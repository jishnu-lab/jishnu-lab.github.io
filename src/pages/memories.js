"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import {CardsCarousel} from "@/components/ui_data/memories_ui_data";
import { BackgroundBeamsWithCollision } from "@/components/backgrounds/background-beams-collision";


export default function Memories() {
    return (
        <>
        <Head>
            <title>Fun & Memories</title>
            <meta name="description" content="My publications" />
            <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
        </Head>
        <BackgroundBeamsWithCollision className="fixed inset-0 -z-10 bg-transparent"/>
        <Layout>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-7xl font-sans py-20 md:py-10 relative z-20 font-bold tracking-tight">
          Now Playing: <br/> Work Hard, Play Hard
        </h2>
        <CardsCarousel/>
        </Layout>
        </>
        
        
    );
    }