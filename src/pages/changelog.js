import Head from "next/head";
import Layout from "@/components/common/layout";
import { TimelineData } from "@/components/ui_data/changelog_ui_data";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/backgrounds/background-beams";
export default function Changelog() {
    return (
        <>
        <Head>
            <title>Changelog</title>
            <meta name="description" content="My publications" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BackgroundBeams className="fixed inset-0 pointer-events-none -z-10"/>

        
        <Layout>
        <div className="w-full bg-grey-700 flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
            Here, Even Change Changes
            </h2>
            <div className="w-[40rem] relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
                {/* Core component */}
                <SparklesCore
                background="bg-primary"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-[40rem] h-5"
                particleColor="#FFFFFF"
                />
        
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-grey-700 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
            <TimelineData className="bg-transparent"/>
        </Layout>
        
        </>
        
        
    );
    }