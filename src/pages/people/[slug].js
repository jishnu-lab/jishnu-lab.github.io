"use client";
import Head from "next/head";
import Layout from "@/components/common/layout";
import teamdata from "@/assets/data/team.json";
import {PeopleCardData} from "@/components/ui_data/people_ui_data";

export async function getStaticPaths() {
  // Filter out people without a slugLongTermMembers
  const paths = teamdata
    .filter((person) => person.slugLongTermMembers) // Only include those with a valid slug
    .map((person) => ({
      params: { slug: person.slugLongTermMembers }
    }));

  return {
    paths,
    fallback: false, // Required for static export
  };
}

export async function getStaticProps({ params }) {
  // Find the person from teamdata by slug
  const person = teamdata.find((p) => p.slugLongTermMembers === params.slug);

  // If the person doesn't exist, return 404
  if (!person) {
    return {
      notFound: true, // This will show a 404 page if the person is not found
    };
  }

  return {
    props: { person },
  };
}

export default function PeoplePage({person}) {
  // const person = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   roleInLab: "Research Scientist",
  //   shortBlurb:
  //     "John is a research scientist with a focus on computational systems immunology. He has a background in machine learning and network analysis.",
  // };

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
          <div className="relative w-fit mx-auto mb-6">
            <PeopleCardData person={person} />
          </div>

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