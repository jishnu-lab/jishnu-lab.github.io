"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/use-outside-click";

// function processAuthors(authors) {
//   const authorList = authors.split(',').map(a => a.trim());
//   const firstAuthors = authorList
//     .filter(a => a.endsWith('*'));
//     // .map(a => a.replace('*', '').trim());
//   const correspondingAuthors = authorList
//     .filter(a => a.endsWith('^'));
//     // .map(a => a.replace('^', '').trim());
//   return `${firstAuthors.join(', ')}, [...] , ${correspondingAuthors.join(', ')}`;
// }

function processAuthors(authors) {
  const authorList = authors.split(',').map(a => a.replace('?', '').trim());
  const total = authorList.length;

  if (total <= 6) {
    return authorList.join(', ');
  }

  const firstThree = authorList.slice(0, 3);
  const lastThree = authorList.slice(-3);

  return `${firstThree.join(', ')}, [...], ${lastThree.join(', ')}`;
}

export function ExpandableCard({
  cardKey,
  title,
  date,
  journal,
  authors,
  domainTagsRendered,
  firstAuthorsLabLinksRendered,
  otherLabMembersLinksRendered,
  isCorrespondingAuthorJishnu,
  icon,
  openText,
  closeText = openText,
  ctaLink,
  imageSrc,
}) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      {/* ANIMATING OVERALL LIST PRESENCE ON FIRST LOAD*/}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg:black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* OPEN MODAL*/}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 grid place-items-center z-[100]"
          >
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.0 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${title}-${cardKey}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-auto overscroll-contain"
            >
              <motion.div layoutId={`image-${title}-${cardKey}`}>
                <img
                  width={200}
                  height={200}
                  src={imageSrc}
                  alt={title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h2
                      layoutId={`title-${title}-${cardKey}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {title}
                    </motion.h2>
                    <motion.h3
                      layoutId={`date_journal-${date}-${journal}-${cardKey}`}
                      className="italic text-neutral-600 dark:text-neutral-400"
                    >
                      {date} - {journal}
                    </motion.h3>
                    <motion.p
                      layoutId={`authors-${authors}-${cardKey}`}
                      className="my-4 text-neutral-600 dark:text-neutral-400"
                    >
                      {authors}
                      <br />
                    </motion.p>
                    {domainTagsRendered}
                    {firstAuthorsLabLinksRendered}
                    {otherLabMembersLinksRendered}
                    {/* {isCorrespondingAuthorJishnu === true? ("Jishnu is also one of the Co-/Corresponding Author. Feel free to reach out!") :(null) } */}
                  </div>

                  <motion.a
                    layoutId={`button-${title}-${cardKey}`}
                    href={ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full hover:underline bg-green-500 text-white"
                  >
                    {openText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLOSED DESIGN*/}
      <div
        onClick={() => setActive(true)}
        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-2xl mx-auto"
      >
        <div className="flex gap-4 flex-col md:flex-row">
          <motion.div layoutId={`image-${title}-${cardKey}`}>{icon}</motion.div>
          <div>
            <motion.h3
              layoutId={`title-${title}-${cardKey}`}
              className="font-medium text-neutral-800 dark:text-neutral-200"
            >
              {title}
            </motion.h3>
            <motion.p
              layoutId={`date_journal-${date}-${journal}-${cardKey}`}
              className="italic text-neutral-600 dark:text-neutral-400"
            >
            <span className="italic">
              {date} - {journal}
            </span>
            <br />
            <span className="not-italic">
              {processAuthors(authors)}
            </span>
            </motion.p>

          </div>
        </div>
        <motion.button
          layoutId={`closebutton-${title}-${cardKey}`}
          className="px-4 py-2 text-sm rounded-full hover:underline bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 shadow-md"
        >
          {closeText}
        </motion.button>
      </div>
    </>
  );
}

export function CloseIcon() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}
