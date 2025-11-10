import Head from "next/head";
import Layout from "@/components/common/layout";
import { BackgroundBeams } from "../components/backgrounds/background-beams";
export default function Publication() {
    return (
        <>
        <Head>
            <title>Funding Agencies</title>
            <meta name="description" content="Our Funders" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BackgroundBeams className="fixed inset-0 -z-10"/>
        <Layout>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Our Funding Agencies
        </h2>
        </Layout>
        </>
        
        
    );
    }