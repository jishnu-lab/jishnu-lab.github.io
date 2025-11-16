"use client";
import Link from "next/link";

export default function Footer({ links = [] }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="fixed left-0 bottom-0 w-full border-t bg-gray-400/80 dark:bg-neutral-900/80 backdrop-blur
                  text-sm text-neutral-600 dark:text-neutral-400 z-50 font-mono font-bold"
      style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.03)" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[70px] md:min-h-[90px] md:flex-row md:justify-between gap-2 md:gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span>
            © {year} Jishnu Das. All rights reserved.
          </span>
          <span>
            Developed with <span className="text-red-500">♥</span> by{" "}
            <Link
              href="https://swapnilkeshari.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              Swapnil Keshari
            </Link>
          </span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          {links.map(({ href, label }, i) => (
            <Link
              key={`footer-link-${label}-${i}`}
              href={href}
              className="hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
