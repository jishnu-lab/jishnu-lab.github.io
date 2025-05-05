import {
  IconFileRss,
  IconExchange,
  IconHomeFilled,
  IconNewSection,
  IconAddressBook,
  IconUser,
  IconCameraSelfie
} from "@tabler/icons-react";

export const NavItemsData=[
    {
      title: "Team",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./team",
    },
    {
      title: "Publications",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./publication",
    },
    {
      title: "News",
      icon: (
        <IconFileRss className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./news",
    },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <img
    //       src="https://assets.aceternity.com/logo-dark.png"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo" />
    //   ),
    //   href: "./boilerplate",
    // },
    {
      title: "Home",
      icon: (
        <IconHomeFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./changelog",
    },
    {
      title: "Fun & Memories",
      icon: (
        <IconCameraSelfie className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./memories",
    },
    {
      title: "Contact Us",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./contactus",
    },

  ]