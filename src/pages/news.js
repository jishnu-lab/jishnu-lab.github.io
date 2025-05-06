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
        </Head>

        <div className="fixed inset-0 pointer-events-none -z-10">
            {/* Background dots */}
            <div
                className={cn(
                "absolute inset-0",
                "bg-[length:20px_20px]",
                "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
                "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />

            {/* Strong dark gradient at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
        </div>

        <Layout className="bg-transparent">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          What's Poppin'?
        </h2>
            <NewsCardData className="bg-transparent"/>
        </Layout>


        
        </>
        
        
    );
}