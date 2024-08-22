import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const Footer = dynamic(() => import("@/components/footer/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
    template: "%s | AceMQ",
  },
  description: "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
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

