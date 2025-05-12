"use client";
import Link from "next/link";

export default function Footer({ links = [] }) {
    const year = new Date().getFullYear();
  
    return (
      <footer className="mb-10 border-t pt-6 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            © {year} Jishnu Das. All rights reserved.
            <br/>
            Developed with <span className="text-red-500">♥</span> by{" "}
            <Link
              href="https://swapnilkeshari.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
                Swapnil Keshari
                </Link>
          </div>
          <div className="flex gap-4">
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
