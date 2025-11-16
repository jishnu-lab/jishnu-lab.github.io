/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";
import { cn } from "@/lib/utils";
import { IconLayoutBottombarCollapseFilled, IconLayoutNavbarCollapseFilled } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  direction = "horizontal", //'horizontal' or 'vertical'
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} direction={direction} />
      <FloatingDockMobile items={items} className={mobileClassName}/>
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-row gap-2 z-50 
             h-16 items-end rounded-2xl px-4 pb-3 md:flex bg-gray-400/80 dark:bg-neutral-900/80 backdrop-blur"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 , x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{
                  opacity: 0,
                  y: -10,
                  x: -10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay:idx * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-900"
      >
          {open ? (
            <IconLayoutNavbarCollapseFilled className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
          ) : (
            <IconLayoutBottombarCollapseFilled className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
          )}
        {/* <IconLayoutBottombarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" /> */}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  direction
}) => {
  const mouseCoord = useMotionValue(Infinity);
  const handleMouseMove = (e) => {
    if (isVertical) {
      mouseCoord.set(e.clientY); // vertical tracking
    } else {
      mouseCoord.set(e.clientX); // horizontal tracking
    }
  };
  const isVertical = direction === "vertical";
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseCoord.set(Infinity)}
      className={cn(
        "hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex  bg-gray-400/80 dark:bg-neutral-900/80 backdrop-blur ",
        isVertical ? "flex-col h-auto w-16 py-4 px-2 gap-4" : "items-end h-16 px-4 pb-3 gap-4",
        className
      )}
      >
      {items.map((item) => (
        <IconContainer mouseCoord={mouseCoord} isVertical={isVertical} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseCoord,
  title,
  icon,
  href,
  isVertical = false,
}) {
  const ref = useRef(null);
  const [center, setCenter] = useState(0);

  // Get the icon center position (x or y depending on layout)
  useEffect(() => {
    const updateBounds = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setCenter(isVertical ? rect.top + rect.height / 2 : rect.left + rect.width / 2);
      }
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [isVertical]);

  // Compute distance from mouse
  const distance = useTransform(mouseCoord, (val) => Math.abs(val - center));

  const size = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconSize = useSpring(useTransform(distance, [-150, 0,  150], [20, 40, 20]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
                <motion.div
                     initial={{ opacity: 0, y: isVertical ? 0 : 10, x: isVertical ? 10 : "-50%" }}
                     animate={{ opacity: 1, y: 0, x: isVertical ? 10 : "-50%" }}
                     exit={{ opacity: 0, y: isVertical ? 0 : 2, x: isVertical ? 10 : "-50%" }}
                     className={cn(
                         "absolute w-max rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white font-mono font-bold",
                         isVertical
                         ? "left-full ml-1/2 top-1/2 -translate-y-1/2 "
                         : "top-full left-1/2 mt-4"
                 )}
                   >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}