"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import React from "react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import { TextRevealCard} from "@/components/ui/text-reveal-card";
import {CardsCarousel} from "@/components/ui_data/memories_ui_data";

export default function Home() {
  return (
    <>
        <Head>
        <title>Jishnu Lab</title>
        <meta name="description" content="Computational Systems Immunology" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
      </Head>
      {/* <HeroHighlight className="fixed inset-0 -z-10 bg-transparent"/> */}

      <Layout>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 
                    text-7xl font-sans py-20 md:py-10 relative z-20 font-bold tracking-tight overflow-hidden">
          Jishnu's Computational Systems Immunology Lab
        </h2>
        {/* <CardsCarousel/> */}
        <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
          Where we are serious about
        </h3>
        <div className="flex flex-col items-center justify-center mt-3">
        <TextRevealCard text="ML, Networks and Immunology" revealText= "Curiosity, Caffine, and Code"
                        className="items-center justify-center overflow-visible text-neutral-800 dark:text-neutral-200"/>
        </div>
      </Layout>
      </>

  );
}