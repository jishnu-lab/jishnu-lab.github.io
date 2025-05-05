import Head from "next/head";
import Layout from "@/components/common/layout";
import { TeamData } from "@/pages/ui_data/team_ui_data";
export default function Publication() {
    return (
        <>
        <Head>
            <title>Cool Kids</title>
            <meta name="description" content="My publications" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Meet the Artists
        </h2>
            <TeamData/>
        </Layout>
        </>
        
        
    );
    }