import Head from "next/head";
import Layout from "@/components/common/layout";
import { BackgroundBeams } from "../components/backgrounds/background-beams";
import { FundingTileData } from "@/components/ui_data/funding_ui_data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Funding() {
  const [filterType, setFilterType] = useState("All"); // "All", "Current", or "Completed"

  return (
    <>
      <Head>
        <title>Funding Agencies</title>
        <meta name="description" content="Our Funders" />
        <link rel="icon" href="/favicon-512x512.png" />
      </Head>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Grid Background */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "bg-[length:20px_20px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial Mask Overlay */}
        <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <Layout>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Our Funding Agencies
        </h2>

        <div className="flex justify-center py-4 gap-4">
          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-4 transition ${
              filterType === "All"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setFilterType("All")}
          >
            All
          </button>

          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold font-mono mb-4 transition ${
              filterType === "Current"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setFilterType("Current")}
          >
            Current
          </button>

          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold font-mono mb-4 transition ${
              filterType === "Completed"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setFilterType("Completed")}
          >
            Completed
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <FundingTileData type={filterType} />
        </div>
        <div className="py-6 md:py-12 lg:py-24" aria-hidden="true" />
      </Layout>
    </>
  );
}
