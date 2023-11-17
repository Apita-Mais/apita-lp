import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-default",
});

export const metadata: Metadata = {
  authors: [{ name: "Equipe Apita Mais", url: "https://apitamais.com.br" }],
  category: "futebol",
  creator: "Equipe Apita Mais",
  description:
    "Celebrando a força do futebol feminino, onde cada jogada é um passo em direção à igualdade e excelência esportiva.",
  title: {
    default: "Apita Mais – Elevando o futebol feminino para um novo patamar",
    template: "%s | Apita Mais",
  },
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Futebol",
    "TailwindCSS",
    "Framer Motion",
    "Vercel",
    "Tech",
    "Apita Mais",
    "apita+",
    "Plataforma",
    "Feminino",
    "Futebol Feminino",
    "Soccer",
    "Football",
  ],
  openGraph: {
    description:
      "Celebrando a força do futebol feminino, onde cada jogada é um passo em direção à igualdade e excelência esportiva.",
    images: [
      {
        alt: "Apita Mais",
        height: 1080,
        url: "https://i.imgur.com/P4DjAKw.png",
        width: 1920,
      },
    ],
    locale: "pt-BR",
    title: "Apita Mais – Elevando o futebol feminino para um novo patamar",
    type: "website",
    url: "https://sobre.apitamais.com.br",
  },
  publisher: "Equipe Apita Mais",
  twitter: {
    card: "summary_large_image",
    site: "@apita-mais",
    title: "Apita Mais – Elevando o futebol feminino para um novo patamar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "overflow-x-hidden bg-background font-inter outline-none",
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
