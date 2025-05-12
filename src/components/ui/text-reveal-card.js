"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function updateWidthFromClientX(clientX) {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      const relativeX = clientX - left;
      const newWidthPercentage = Math.min(Math.max((relativeX / width) * 100, 0), 100);
      setWidthPercentage(newWidthPercentage);
    }
  }

  function mouseMoveHandler(event) {
    event.preventDefault();
    updateWidthFromClientX(event.clientX);
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    updateWidthFromClientX(event.touches[0].clientX);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-transparent max-w-4xl w-full rounded-lg p-2 relative",
        className
      )}
    >
      {children}
      <div className="py-15 relative flex items-center justify-center">
        {/* Reveal Layer */}
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-gray-200 dark:bg-neutral-900 p-3 rounded-lg z-20 will-change-transform"
        >
          <p
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
            className="text-center text-3xl sm:text-5xl font-semibold 
                        bg-clip-text text-transparent 
                        bg-gradient-to-b from-neutral-800 to-neutral-500
                        dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-30 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent 
                      absolute z-50 will-change-transform items-center justify-center"
        />

        {/* Main Text with Stars */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-center items-center justify-center text-3xl sm:text-5xl font-semibold bg-clip-text text-transparent bg-black dark:bg-white py-2">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => {
  return (
    <h2 className={twMerge("text-neutral-200 text-lg", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({ children, className }) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(160)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [2, 1.5, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "#4CAF50",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
