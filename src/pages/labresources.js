import Head from "next/head";
import Layout from "@/components/common/layout";
import Link from "next/link";
import { BackgroundBeams } from "../components/backgrounds/background-beams";

const resources = [
  {
    id: "lab-slack",
    title: "Join Lab Slack",
    description:
      "Request an invite to the lab Slack workspace for day-to-day communication.",
    href: "https://daslabtalk.slack.com",
  },
{
    id: "lab-email-list",
    title: "Join Lab Email List",
    description:
      "Subscribe to the lab mailing list for meetings, announcements, and opportunities.",
    href: "mailto:jishnulab1@groups.pitt.edu?subject=Join%20lab%20email%20list",
  },
  {
    id: "lab-website-update",
    title: "Update Lab Website",
    description:
      "Guide for editing content, creating new pages, and deploying updates to the lab site.",
    href: "https://docs.google.com/spreadsheets/d/1QCWB3HXwSEVA_MqwkRdZLkBSvP72_ijeD1Dfk6fsdyI/edit?usp=sharing",
  },
  {
    id: "lab-calendar",
    title: "Lab Calendar",
    description:
      "View the lab calendar for important dates and events.",
    href: "https://calendar.google.com/calendar/embed?src=c_991e2075866cd53dd444b3b11cd0806bdd9eb2a1bf3158a1bc70b217a7e61fad@group.calendar.google.com"
  },
  {
    id: "lab-meeting-schedule",
    title: "Lab Meeting Schedule",
    description:
      "Overview of the lab meeting schedule, including recurring meetings and special events.",
    href: "https://docs.google.com/spreadsheets/d/1UGPNGM9fr3M-0GJeZ0D8k9BHUu8itvcQfZSJ6OYa5xE/edit?usp=sharing",
  },

  {
    id: "psc-vscode",
    title: "VS Code on PSC Bridges-2",
    description:
      "Step-by-step guide to connect VS Code to PSC (Bridges-2) with remote SSH and extensions. Created by Jane.",
    href: "https://docs.google.com/document/d/12pI4o4W8JVZ_zRcRQ9efxothLMqvBZrgEtdHx0IF6I0/edit?usp=sharing",
  },
  {
    id: "crc-vscode",
    title: "VS Code on CRCD HTC",
    description:
      "Instructions for configuring VS Code remote development on CRC HTC nodes.",
    href: "https://docs.google.com/document/d/1pV-C5eTS6HD5Z76DN1LprgqZI9ozGcA_ifsXcW8apKA/edit?usp=sharing",
  },

];

function ResourceCard({ item }) {
  const baseClasses =
    "flex flex-col justify-between rounded-xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/70 shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 backdrop-blur-sm";

  if (item.href && !item.comingSoon) {
    const isExternal =
      item.href.startsWith("http") || item.href.startsWith("mailto:");
    return (
      <Link
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        <article className={baseClasses}>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
          <div className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Open resource →
          </div>
        </article>
      </Link>
    );
  }

  return (
    <article className={baseClasses}>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
        {item.title}
        </h3>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
          {item.description}
        </p>
      </div>
      {item.comingSoon && (
        <div className="mt-4 inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          Coming soon
        </div>
      )}
    </article>
  );
}

export default function LabResources() {
  return (
    <>
      <Head>
        <title>Lab Internal Resources</title>
        <meta
          name="description"
          content="Internal resources and how-to guides for the lab."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <BackgroundBeams className="fixed inset-0 -z-10" /> */}

      <Layout>
        <section className="py-6 md:py-10 lg:py-12">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-6 font-bold tracking-tight">
            Lab Internal Resources
          </h2>

          <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-6 md:mb-10">
Central hub for lab onboarding, compute setup, communication channels, and website maintenance. If you don’t have access, then either you truly don’t need it (yet), or the access gods forgot about you—please REQUEST ACCESS to any documents or resources that are mysteriously locked.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {resources.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
