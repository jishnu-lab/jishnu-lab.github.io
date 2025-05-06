"use client";
import { useState, useMemo} from "react";
import Head from "next/head";
import Layout from "@/components/common/layout";
import { PublicationData } from "@/components/ui_data/publication_ui_data";
import publications from "@/assets/data/publications.json";
import {MultiSelectDropdown} from "@/components/ui/multiselect-dropdown";
import {formatPeopleTagsForDropdown, formatDomainTagsForDropdown} from "@/components/ui_data/tag_ui_data";
import { cn } from "@/lib/utils";

export default function Publication() {
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [selectedFirstAuthors, setSelectedFirstAuthors] = useState([]);
    const [selectedOtherLabMembers, setSelectedOtherLabMembers] = useState([]);
    const [isJishnuAuthor, setIsJishnuAuthor] = useState(null); // Use null for both TRUE and FALSE cases
  
    const clearFilters = () => {
      setSelectedDomains([]);
      setSelectedFirstAuthors([]);
      setSelectedOtherLabMembers([]);
      setIsJishnuAuthor(null); // Optional: only if you’re exposing this in UI
    };
  
    const uniqueValues = useMemo(() => {
      const domains = new Set();
      const firsts = new Set();
      const others = new Set();
  
      publications.forEach((pub) => {
        pub.domainTags?.split(",").map((t) => t.trim()).forEach((tag) => domains.add(tag));
        pub.firstAuthorsLab?.split(",").map((t) => t.trim()).forEach((tag) => firsts.add(tag));
        pub.otherLabMembers?.split(",").map((t) => t.trim()).forEach((tag) => others.add(tag));
      });
  
      return {
        domainTags: formatDomainTagsForDropdown([...domains]),
        firstAuthorsLab: formatPeopleTagsForDropdown([...firsts]),
        otherLabMembers: formatPeopleTagsForDropdown([...others]),
      };
    }, []);
  
    const filtered = publications.filter((pub) => {
      const matchesDomain =
        selectedDomains.length === 0 || pub.domainTags?.split(",").map((t) => t.trim()).some((tag) => selectedDomains.includes(tag));
      const matchesFirst =
        selectedFirstAuthors.length === 0 || pub.firstAuthorsLab?.split(",").map((t) => t.trim()).some((tag) => selectedFirstAuthors.includes(tag));
      const matchesOther =
        selectedOtherLabMembers.length === 0 || pub.otherLabMembers?.split(",").map((t) => t.trim()).some((tag) => selectedOtherLabMembers.includes(tag));
      const matchesJishnu = isJishnuAuthor === null || (pub.isCorrespondingAuthorJishnu === "TRUE") === isJishnuAuthor;
      return matchesDomain && matchesFirst && matchesOther && matchesJishnu;
    });
  
    return (
      <>
        <Head>
          <title>Publications</title>
          <meta name="description" content="Our publications" />
          <link rel="icon" href="/favicon.ico" />
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
          Our Deep Focus Playlist
        </h2>
          <div className="flex flex-row w-full gap-4">
            {/* Publication data is fetched from a JSON file. The data is filtered based on the selected filters. */}
            <div className="w-3/4"> {/*Main content area with 3/4 width*/}
              <h2 className="text-lg text-center font-bold text-white mb-4">Publications ({filtered.length})</h2>
              <PublicationData data={filtered} />
            </div>
            {/* Filter section */}
            <div className="w-1/4">{/*Filter content area with 1/4 width*/}
              <h2 className="text-lg text-center font-bold text-white mb-4">Filters</h2>
  
              {/* Clear Filters Button */}
              <button
                onClick={clearFilters}
                className="mb-4 w-full rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-black px-4 py-2 text-sm font-bold mt-4 md:mt-0"
              >
                Clear All Filters
              </button>
  
              {/* Domain Filter */}
              <h4 className="text-md font-bold text-white mb-4">Domain Filter</h4>
              <MultiSelectDropdown
                label="Domains"
                options={uniqueValues.domainTags}
                selectedValues={selectedDomains}
                onChange={setSelectedDomains}
              />
  
              {/* First Author Filter */}
              <h4 className="text-md font-bold text-white mb-4">First Authors</h4>
              <MultiSelectDropdown
                label="First Authors"
                options={uniqueValues.firstAuthorsLab}
                selectedValues={selectedFirstAuthors}
                onChange={setSelectedFirstAuthors}
              />
  
              {/* Other Lab Members Filter */}
              <h4 className="text-md font-bold text-white mb-4">Contributing Authors</h4>
              <MultiSelectDropdown
                label="Contributing Lab Members"
                options={uniqueValues.otherLabMembers}
                selectedValues={selectedOtherLabMembers}
                onChange={setSelectedOtherLabMembers}
              />
  
              {/* Toggle for Jishnu Author */}
              <h4 className="text-md font-bold text-white mb-4">Jishnu as Corresponding</h4>
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setIsJishnuAuthor(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium  bg-gray-100 hover:bg-green-500 hover:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setIsJishnuAuthor(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium  bg-gray-100 hover:bg-green-500 hover:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
  