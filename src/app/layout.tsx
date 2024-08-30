import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const Footer = dynamic(() => import("@/components/footer/footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
  description:
    "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
  alternates: {
    canonical: "https://acemq.com/",
  },
  openGraph: {
    title: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
    description:
      "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
    url: "https://acemq.com/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          <div className="container">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

