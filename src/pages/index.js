"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import React from "react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import { TextRevealCard} from "@/components/ui/text-reveal-card";


export default function Home() {
  return (
    <>
        <Head>
        <title>Jishnu Lab</title>
        <meta name="description" content="Computational Systems Immunology" />
      </Head>
      <HeroHighlight className="fixed inset-0 -z-10"/>

      <Layout>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Welcome to Jishnu Lab
        </h2>
        <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Here we are serious about Computational Systems Immunology and
        </h3>
        <div className="flex flex-col items-center justify-center mt-3">
        <TextRevealCard text="ML, Networks and Immunology" revealText= "Curiosity, Caffine, and Code"
                        className="items-center justify-center overflow-visible"/>
        </div>
      </Layout>
      </>

  );
}