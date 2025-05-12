"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import React from "react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {TextRevealCard} from "@/components/ui/text-reveal-card";
import {CardsCarousel} from "@/components/ui_data/memories_ui_data";

export default function Home() {
  return (
    <>
        <Head>
        <title>Jishnu Lab</title>
        <meta name="description" content="Computational Systems Immunology" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
      </Head>
      <HeroHighlight className="fixed inset-0 -z-30 bg-transparent pointer-events-none "/>
      <Layout>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 
      md:text-7xl text-5xl font-sans py-20 relative z-20 font-bold tracking-tight">
        Jishnu's Computational Systems Immunology Lab
        </h2>
        {/* <CardsCarousel/> */}
        <h3 className="text-center text-neutral-800 dark:text-neutral-200
                       text-4xl font-sans relative z-20 font-bold tracking-tight">
          We Take</h3>
          <div className="flex flex-col items-center justify-center">
          <TextRevealCard text="ML, Networks and Immunology" revealText= "Code, Caffine, and Collaboration"
                          className="items-center text-center justify-center overflow-visible text-neutral-800 dark:text-neutral-200"/>
          </div>
          <h3 className="text-center text-neutral-800 dark:text-neutral-200
                       text-4xl font-sans relative z-20 font-bold tracking-tight">
          Quite Seriously!
          </h3>
      </Layout>
      </>

  );
}