import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import { Header } from "@/components/Header";
import clsx from "clsx";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-default",
});

export const metadata: Metadata = {
  title: "apita+",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-background font-inter outline-none overflow-x-hidden",
          poppins.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
