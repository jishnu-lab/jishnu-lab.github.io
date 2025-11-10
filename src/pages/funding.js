import Head from "next/head";
import Layout from "@/components/common/layout";
import { BackgroundBeams } from "../components/backgrounds/background-beams";
import { FundingTileData } from "@/components/ui_data/funding_ui_data";
import { useState } from "react";

export default function Funding() {
  const [showCurrent, setShowCurrent] = useState(true);

  return (
    <>
      <Head>
        <title>Funding Agencies</title>
        <meta name="description" content="Our Funders" />
        <link rel="icon" href="/favicon-512x512.png" />
      </Head>
      <BackgroundBeams className="fixed inset-0 -z-10" />
      <Layout>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Our Funding Agencies
        </h2>

        <div className="flex justify-center py-4 gap-4">
          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-4 transition ${
              showCurrent
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setShowCurrent(true)}
          >
            Current
          </button>
          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-4 transition ${
              !showCurrent
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setShowCurrent(false)}
          >
            Completed
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <FundingTileData type={showCurrent ? "current" : "Completed"} />
        </div>
      </Layout>
    </>
  );
}
