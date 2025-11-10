import {
  IconFileRss,
  IconExchange,
  IconBooks,
  IconHomeFilled,
  IconAddressBook,
  IconUser,
  IconCameraSelfie,
  IconCurrencyDollar
} from "@tabler/icons-react";

export const NavItemsData=[
    {
      title: "Team",
      icon: (
        <IconUser className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/team",
    },
    {
      title: "Publications",
      icon: (
        <IconBooks className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/publications",
    },
    {
      title: "News",
      icon: (
        <IconFileRss className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/news",
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
        <IconHomeFilled className="h-full w-full text-emerald-700 dark:text-green-500" />
      ),
      href: "/",
    },
    {
      title: "Funding Agencies",
      icon: (
        <IconCurrencyDollar className="h-full w-full text-emerald-700 dark:text-green-500" />
      ),
      href: "/funding",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "./changelog",
    },
    {
      title: "Fun & Memories",
      icon: (
        <IconCameraSelfie className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/memories",
    },
    {
      title: "Contact Us",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/contactus",
    }
  ]