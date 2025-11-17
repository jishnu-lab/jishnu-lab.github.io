import Head from "next/head";
import Layout from "@/components/common/layout";
import {Globe} from "@/components/ui_data/globe_ui_data";
import {IconRepeat} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "../components/backgrounds/background-lines";

export function FeaturesSection() {
    const features = [
      {
        title: "Find Cool Kids @ Room 4003, 4007, 4011, 4012",
        description: "The Assembly, 5051 Centre Avenue, Pittsburgh, PA 15213",
        skeleton: <SkeletonOne />,
        className:
          "col-span-1 lg:col-span-3 dark:border-transparent",
      },
      {
        title: "IYKYK: Clearing Inbox is the OG ASMR",
        description: "Reach us at jishnu@pitt.edu from wherever you are",
        skeleton: <SkeletonTwo />,
        className: "col-span-1 lg:col-span-3 dark:border-transparent",
      },
      {
        title: "Interested in joining the band?",
        description: "",
        skeleton: <SkeletonThree />,
        className: "col-span-1 lg:col-span-3 dark:border-transparent",
      },
    ];
    return (
      <div className="relative z-20 py-10 lg:py-10 max-w-7xl mx-auto">
        <div className="px-8">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center 
                            tracking-tight font-bold text-neutral-400 dark:text-neutral-300">
            Whatever you prefer
            </h4>
 
            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-200">
            We are always open to new ideas and collaborations. If you have any questions or suggestions, feel free to reach out to us!
            </p>
      </div>

        <div className="relative ">
          <div
            className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-transparent">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const FeatureCard = ({
    children,
    className
  }) => {
    return (
      <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
        {children}
      </div>
    );
  };
  
  const FeatureTitle = ({
    children
  }) => {
    return (
      <p
        className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-green-500 text-xl md:text-2xl md:leading-snug">
        {children}
      </p>
    );
  };
  
  const FeatureDescription = ({
    children
  }) => {
    return (
      <p
        className={cn(
          "text-sm md:text-base  max-w-4xl text-left mx-auto",
          "text-neutral-500 text-center font-normal dark:text-neutral-300",
          "text-left max-w-sm mx-0 md:text-sm my-2"
        )}>
        {children}
      </p>
    );
  };

  export const SkeletonOne = () => {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9222785432853!2d-79.9471849245841!3d40.45485715331887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f23e80de6b6d%3A0x64987478d2d7a92d!2sJishnu&#39;s%20Systems%20Immunology%20Lab!5e0!3m2!1sen!2sus!4v1746460020615!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    );
  };
  export const SkeletonTwo = () => {
    return (
    <div className="h-60 md:h-100 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <Globe className="absolute bottom-0 right-0 w-32 h-32" />
      </div>
    );
  };
  export const SkeletonThree = () => {
      const formUrl = "https://forms.gle/wo4PZiD249FxQeoS8";
      return (
        <div className="h-60 md:h-100 flex flex-col items-center justify-center relative bg-transparent dark:bg-transparent mt-10">
          <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-black py-2 px-4 text-center shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-4"
          >
        Fill out the form
          </a>
        </div>
      );
    };
export default function ContactUs() {
    return (
        <>
        <Head>
            <title>Contact Us</title>
            <meta name="description" content="Reach out to us" />
            <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
        </Head>
        <BackgroundLines className="fixed inset-0 pointer-events-none -z-10"/>

        <Layout>
        <div className="flex justify-center py-10">
            <h2 className="inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 
                            text-7xl font-sans font-bold tracking-tight whitespace-nowrap leading-[1.2] py-20 md:py-10">
                Meeting <IconRepeat className="w-10 h-10 text-neutral-500 dark:text-neutral-300" /> Email
            </h2>
        </div>
            <FeaturesSection/>
        </Layout>
        </>
        
        
    );
    }