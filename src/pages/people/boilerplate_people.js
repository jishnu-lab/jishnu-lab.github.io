"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import { BackgroundGradient } from "@/components/ui/card-bg-gradient";
import Image from "next/image";
import {IconBrandGithub, IconBrandLinkedin, IconWorld, IconBrandTwitter, IconSchool} from "@tabler/icons-react";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   roleInLab: "Research Scientist",
//   shortBlurb:
//     "John is a research scientist with a focus on computational systems immunology. He has a background in machine learning and network analysis.",
// };

function BackgroundGradientCard() {
  return (
    <div className="relative w-fit mx-auto mb-6">
      {/* Background + Image */}
      <BackgroundGradient className="max-w-sm">
      <div className="relative z-10 rounded-[22px] overflow-hidden">
        <Image
          src="/images/personnel/aaron_rosen.webp"
          alt="Portrait of John Doe"
          width={200}
          height={200}
          className="rounded-[22px] object-contain"
        />
      </div>
      </BackgroundGradient>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-10 relative z-10">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub className="w-5 h-5 hover:text-green-500 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin className="w-5 h-5 hover:text-green-500 transition-colors" />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
          <IconBrandTwitter className="w-5 h-5 hover:text-green-500 transition-colors" />
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <IconWorld className="w-5 h-5 hover:text-green-500 transition-colors" />
        </a>
        <a href="https://example.com/publications" target="_blank" rel="noopener noreferrer">
          <IconSchool className="w-5 h-5 hover:text-green-500 transition-colors" />
        </a>

      </div>
    </div>
  );
}

export default function PersonPage({}) {
  const person = {
    firstName: "John",
    lastName: "Doe",
    roleInLab: "Research Scientist",
    shortBlurb:
      "John is a research scientist with a focus on computational systems immunology. He has a background in machine learning and network analysis.",
  };

  return (
    <>
      <Head>
        <title>
          {person.firstName} {person.lastName}
        </title>
        <meta
          name="description"
          content={`Profile of ${person.firstName} ${person.lastName}`}
        />
        <link rel="icon" type="image/png" href="/favicon-512x512.png" />
      </Head>

      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <BackgroundGradientCard />

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 tracking-tight mb-4">
            {person.firstName} {person.lastName}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium mb-2">
            {person.roleInLab}
          </p>
          <p className="text-md md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {person.shortBlurb}
          </p>
        </div>
      </Layout>
    </>
  );
}
