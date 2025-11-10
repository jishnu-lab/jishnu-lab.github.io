// "use client";
// import Head from "next/head";
// import Layout from "@/components/common/layout";
// import React from "react";
// import {HeroHighlight} from "@/components/ui/hero-highlight";
// import {TextRevealCard} from "@/components/ui/text-reveal-card";
// import {CardsCarousel} from "@/components/ui_data/memories_ui_data";

// export default function Home() {
//   return (
//     <>
//         <Head>
//         <title>Jishnu Lab</title>
//         <meta name="description" content="Computational Systems Immunology" />
//         <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
//       </Head>
//       <HeroHighlight className="fixed inset-0 -z-30 bg-transparent pointer-events-none "/>
//       <Layout>
//       <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 
//       md:text-7xl text-5xl font-sans py-20 relative z-20 font-bold tracking-tight">
//         Jishnu's Computational Systems Immunology Lab
//         </h2>
//         {/* <CardsCarousel/> */}
//         <h3 className="text-center text-neutral-800 dark:text-neutral-200
//                        text-4xl font-sans relative z-20 font-bold tracking-tight">
//           We Take</h3>
//           <div className="flex flex-col items-center justify-center">
//           <TextRevealCard text="ML, Networks and Immunology" revealText= "Code, Caffine, and Collaboration"
//                           className="items-center text-center justify-center overflow-visible text-neutral-800 dark:text-neutral-200"/>
//           </div>
//           <h3 className="text-center text-neutral-800 dark:text-neutral-200
//                        text-4xl font-sans relative z-20 font-bold tracking-tight">
//           Quite Seriously!
//           </h3>
//       </Layout>
//       </>

//   );
// }

"use client";
import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/common/layout";

// ----- Featured Links -----
const featured = [
  {
    label: "Research",
    href: "/publications",
    icon: "🧬",
    description: "Cutting-edge systems immunology, single-cell, and multi-omics discoveries."
  },
  {
    label: "Our Team",
    href: "/team",
    icon: "👩‍🔬",
    description: "Meet our multidisciplinary scientist team and collaborators."
  },
  {
    label: "Memories",
    href: "/memories",
    icon: "📸",
    description: "Conferences, lab retreats and fun moments—our culture in action."
  }
];

// ----- ThinkWidget -----
import { useRouter } from "next/navigation"; // App Router version. For pages/ use: import { useRouter } from "next/router";
function ThinkWidget() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onThink = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={onThink}
      className="flex flex-col items-center justify-center mt-10 mb-10 w-full"
    >
      <div className="flex items-center w-full max-w-lg bg-white/80 dark:bg-neutral-900/80 border rounded-2xl shadow-xl px-6 py-4">
        <span className="text-xl text-blue-600 mr-2">🧠</span>
        <input
          className="flex-1 outline-none bg-transparent text-lg dark:text-neutral-100 text-neutral-900 font-mono placeholder:text-neutral-400"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search lab website…"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition"
        >
          Think!
        </button>
      </div>
      <span className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
        Instantly search all Jishnu Lab web content
      </span>
    </form>
  );
}

// ----- Main Page -----
export default function Home() {
  return (
    <>
      <Head>
        <title>Jishnu Lab</title>
        <meta name="description" content="Systems Immunology Lab" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
      </Head>
      <Layout>
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-neutral-950 dark:to-neutral-900 flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mb-8 mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-black dark:from-white dark:to-neutral-300 text-transparent tracking-tight py-12">
            Jishnu’s Systems Immunology Lab
          </h1>
          <p className="max-w-2xl text-center text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-6">
            Discovering Immune Network Logic and Cellular Programs through Computational Modeling, ML, and Multi-Omics.
          </p>
          <ThinkWidget />
        </section>

        {/* Featured Quick Links */}
        <section className="flex flex-wrap justify-center gap-10 mt-6 px-4 mb-12">
          {featured.map(x => (
            <Link key={x.href} href={x.href}
              className="bg-white/85 dark:bg-neutral-900/80 shadow-md border rounded-xl px-6 py-6 max-w-xs flex-1 min-w-[220px] flex flex-col items-center text-center hover:scale-105 transition"
            >
              <span className="text-4xl mb-2">{x.icon}</span>
              <h3 className="font-bold text-lg mb-1">{x.label}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{x.description}</p>
              <span className="text-indigo-600 font-semibold hover:underline text-sm">
                Explore
              </span>
            </Link>
          ))}
        </section>

        {/* Contact Section */}
        <section className="flex flex-col items-center my-14">
          <span className="text-lg font-medium text-neutral-600 dark:text-neutral-300 mb-3">
            Curious about our research, or want to collaborate?
          </span>
          <Link href="/contactus"
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white shadow-md text-lg font-bold hover:bg-indigo-700 mb-2">
            Contact Us
          </Link>
        </section>
      </main>
      </Layout>
    </>
  );
}
