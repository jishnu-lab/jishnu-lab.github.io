import { Geist, Geist_Mono } from "next/font/google";
// import "@/styles/globals.css";
import Navbar from "@/components/common/navbar";
import { NavItemsData } from "@/components/ui_data/navbar_ui_data";
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const links = [
  { href: "/team", label: "Team" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/", label: "Home" },
  { href: "/funding", label: "Funding" },
  { href: "/changelog", label: "Changelog" },
  { href: "/memories", label: "Memories" },
  { href: "/contactus", label: "Contact Us" },
];

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar items={NavItemsData} />
      <main className="flex-grow pt-10 pb-10 px-20">
        {children}
      </main>
      <Footer links={links} />
    </div>
  );
}


// export default function Layout({ children }) {
//   return (
//     <>
//         <Navbar items={NavItemsData} />
//         <div className={`pt-10 pb-10 px-20 ${geistSans.variable} ${geistMono.variable} antialiased`}>
//           {children}
//         </div>
//         <Footer links={links} />
//     </>
//   );
// }
