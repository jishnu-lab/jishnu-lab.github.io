import Head from "next/head";
import Layout from "@/components/common/layout";
import {NewsCardData} from "@/components/ui_data/news_ui_data";
import { cn } from "@/lib/utils";
import React from "react";

export default function News() {
    return (
        <>
                
        <Head>
            <title>News</title>
            <meta name="description" content="What's Cooking?" />
            <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
        </Head>

        <Layout className="bg-transparent">
            <div className="relative z-10">
                {/* Background dots only for header */}
                <div
                    className={cn(
                    "absolute inset-0",
                    "bg-[length:20px_20px]",
                    "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
                    "pointer-events-none -z-10"
                    )}
                />

                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 
                                text-7xl font-sans font-bold py-20 md:py-10 tracking-tight">
                    What's Poppin'?
                </h2>
            </div>
            <NewsCardData className="light:text-white"/>
        </Layout>
        </>
        
        
    );
}