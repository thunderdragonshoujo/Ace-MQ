import "./globals.css";
// import React from "react";

import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.css";
import dynamic from "next/dynamic";
// import Footer from "@/components/footer/Footer";
const Footer = dynamic(() => import("@/components/footer/footer"));

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container">
          <Navbar />
          <div className={styles.container}></div>
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}

// to do today
// zip extract of parallel distributed
// acemq initialization and development home page adjustments

// Initialized Acemq Website with Nextjs
// Delveloped Half of the Acemq landing page from scratch
// -- 1  done
// deployed Acemq to vercel
// Initialized a git repositories for acemq and ace8 -- done half
// 30 min next tetorial
