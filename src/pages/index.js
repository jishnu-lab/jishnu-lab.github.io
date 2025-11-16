"use client";
import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/common/layout";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {TextRevealCard} from "@/components/ui/text-reveal-card";
import {CardsCarousel} from "@/components/ui_data/memories_ui_data";
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
  },
  {
    label: "Reach Out",
    href: "/contactus",
    icon: "📞",
    description: "Curious about our research, or want to collaborate?"
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
      className="flex flex-col items-center justify-center mt-10 mb-10 w-full z-20"
    >
      <div className="flex items-center w-full max-w-xs sm:max-w-sm md:max-w-lg bg-white/80 dark:bg-neutral-900/80 border rounded-2xl shadow-xl px-6 py-4">
        <span className="text-xl mr-2">🧠</span>
        <input
          className="flex-1 outline-none bg-transparent text-lg dark:text-neutral-100 text-neutral-900 font-mono placeholder:text-neutral-400"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search lab website…"
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          type="submit"
          className="ml-4 px-4 py-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-black transition font-bold"
        >
          Think!
        </button>
      </div>

      <span className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
        Fueled by Caffeine
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
        <meta name="google-site-verification" content="V2GqRBQgwjC6TSPBjkvI7-8G335cwis4E40tZhfFG8I" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
      </Head>
      <HeroHighlight className="fixed w-full h-full -z-10 bg-transparent pointer-events-none "/>
      {/* <HeroHighlight className="w-screen h-screen fixed inset-0 z-[-1] bg-transparent" /> */}

      <Layout>
      <main className="min-h-screen flex flex-col items-center, z-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mb-12 mt-12">
        <h2 className="font-sans bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-7xl  py-20 md:py-10 relative z-20 font-bold tracking-tight">
          Jishnu's Computational Systems Immunology Lab
        </h2>

        <h3 className="text-center text-neutral-800 dark:text-neutral-200
                      text-3xl sm:text-5xl relative z-20 font-bold tracking-tight mt-8 mb-4">
         Exploring</h3>
          <TextRevealCard text="ML, Networks and Immunology" revealText= "Code, Caffeine, & Collaboration"
                           className="items-center text-center justify-center overflow-visible text-neutral-800 dark:text-neutral-200 z-20"/>
          <ThinkWidget />
        </section>

        {/* Featured Quick Links */}
        <section className="flex flex-wrap justify-center gap-10 px-4 mb-12 z-20">
          {featured.map(x => (
            <Link key={x.href} href={x.href}
              className="bg-white/85 dark:bg-neutral-900/80 shadow-md border rounded-xl px-6 py-6 max-w-xs flex-1 min-w-[220px] flex flex-col items-center text-center hover:scale-105 transition"
            >
              <span className="text-4xl mb-2">{x.icon}</span>
              <h3 className="font-bold text-lg mb-1">{x.label}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{x.description}</p>
              <span className="text-green-500 font-semibold hover:underline text-sm">
                Explore
              </span>
            </Link>
          ))}
        </section>
      </main>
      </Layout>
    </>
  );
}
