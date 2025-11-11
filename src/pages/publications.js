"use client";
import { useState, useMemo } from "react";
import Head from "next/head";
import Layout from "@/components/common/layout";
import { PublicationData } from "@/components/ui_data/publication_ui_data";
import publications from "@/assets/data/publications.json";
import { MultiSelectDropdown } from "@/components/ui/multiselect-dropdown";
import {
  formatPeopleTagsForDropdown,
  formatDomainTagsForDropdown,
  formatDatesForDropdown,
} from "@/components/ui_data/tag_ui_data";
import { cn } from "@/lib/utils";

export default function Publication() {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [selectedFirstAuthors, setSelectedFirstAuthors] = useState([]);
  const [selectedOtherLabMembers, setSelectedOtherLabMembers] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [isJishnuAuthor, setIsJishnuAuthor] = useState(null);

  const clearFilters = () => {
    setSelectedDomains([]);
    setSelectedFirstAuthors([]);
    setSelectedOtherLabMembers([]);
    setSelectedYears([]);
    setIsJishnuAuthor(null);
  };

  const uniqueValues = useMemo(() => {
    const domains = new Set();
    const firsts = new Set();
    const others = new Set();
    const dates = [];

    publications.forEach((pub) => {
      pub.domainTags?.split(",").map((t) => t.trim()).forEach((tag) => domains.add(tag));
      pub.firstAuthorsLab?.split(",").map((t) => t.trim()).forEach((tag) => firsts.add(tag));
      pub.otherLabMembers?.split(",").map((t) => t.trim()).forEach((tag) => others.add(tag));
      if (pub.date) dates.push(pub.date);
    });

    return {
      domainTags: formatDomainTagsForDropdown([...domains]),
      firstAuthorsLab: formatPeopleTagsForDropdown([...firsts]),
      otherLabMembers: formatPeopleTagsForDropdown([...others]),
      yearOptions: formatDatesForDropdown(dates),
    };
  }, []);

  const filtered = publications.filter((pub) => {
    const matchesDomain =
      selectedDomains.length === 0 ||
      pub.domainTags?.split(",").map((t) => t.trim()).some((tag) => selectedDomains.includes(tag));
    const matchesFirst =
      selectedFirstAuthors.length === 0 ||
      pub.firstAuthorsLab?.split(",").map((t) => t.trim()).some((tag) => selectedFirstAuthors.includes(tag));
    const matchesOther =
      selectedOtherLabMembers.length === 0 ||
      pub.otherLabMembers?.split(",").map((t) => t.trim()).some((tag) => selectedOtherLabMembers.includes(tag));
    const matchesYear =
      selectedYears.length === 0 || selectedYears.flat().includes(pub.date);
    const matchesJishnu =
      isJishnuAuthor === null || (pub.isCorrespondingAuthorJishnu === true) === isJishnuAuthor;
    return matchesDomain && matchesFirst && matchesOther && matchesYear && matchesJishnu;
  });

  return (
    <>
      <Head>
        <title>Publications</title>
        <meta name="description" content="Our publications" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png" />
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
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-7xl font-sans py-20 md:py-10 relative z-20 font-bold tracking-tight">
          Our Deep Focus Playlist
        </h2>
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* Publication Data */}
          <div className="w-full md:w-3/4 order-2 md:order-none light:text-black dark:text-white">
            <h2 className="text-lg text-center font-bold mb-4">
              Publications ({filtered.length})
            </h2>
            <PublicationData data={filtered} />
          </div>
          {/* Filter Section */}
          <div className="w-full md:w-1/4 order-1 md:order-none light:text-black dark:text-white">
            <h2 className="text-lg text-left font-bold mb-4">Filters</h2>

            {/* Clear Filters Button */}
            <button
              onClick={clearFilters}
              className="relative w-full sm:w-72 md:max-w-xs rounded-full bg-gray-100 hover:bg-green-500 hover:text-white 
                      text-black py-2 pl-3 pr-10 text-center shadow-md text-sm focus:outline-none 
                      focus:ring-2 focus:ring-blue-500 font-bold mb-4"
            >
              Clear All Filters
            </button>

            {/* Domain Filter */}
            <h4 className="text-md font-bold mb-4">Domain Filter</h4>
            <MultiSelectDropdown
              label="Domains"
              options={uniqueValues.domainTags}
              selectedValues={selectedDomains}
              onChange={setSelectedDomains}
            />

            {/* First Author Filter */}
            <h4 className="text-md font-bold mb-4">First Authors</h4>
            <MultiSelectDropdown
              label="First Authors"
              options={uniqueValues.firstAuthorsLab}
              selectedValues={selectedFirstAuthors}
              onChange={setSelectedFirstAuthors}
            />

            {/* Other Lab Members Filter */}
            <h4 className="text-md font-bold mb-4">Contributing Authors</h4>
            <MultiSelectDropdown
              label="Contributing Lab Members"
              options={uniqueValues.otherLabMembers}
              selectedValues={selectedOtherLabMembers}
              onChange={setSelectedOtherLabMembers}
            />

            {/* Year Filter */}
            <h4 className="text-md font-bold mb-4">Year</h4>
            <MultiSelectDropdown
              label="Year"
              options={uniqueValues.yearOptions}
              selectedValues={selectedYears}
              onChange={setSelectedYears}
            />

            {/* Toggle for Jishnu Author */}
            <h4 className="text-md font-bold mb-4">Jishnu as Corresponding</h4>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setIsJishnuAuthor(true)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 shadow-md hover:bg-green-500 hover:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Yes
              </button>
              <button
                onClick={() => setIsJishnuAuthor(false)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 shadow-md hover:bg-green-500 hover:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="py-6 md:py-12 lg:py-24" aria-hidden="true" />
      </Layout>
    </>
  );
}
 