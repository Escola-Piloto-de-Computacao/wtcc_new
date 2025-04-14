import "./globals.css";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

import { Toaster } from "@/components/ui/toaster";

import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-firacode" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import type { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "X WTCC",
  description:
    "Site oficial do X WTCC, evento anual organizado pelo curso de Ciência da Computação da UFERSA.",
  authors: { name: "EPC", url: "https://escolapilotodecomputacao.com.br" },
  keywords: [
    "X WTCC",
    "UFERSA",
    "Ciência da Computação",
    "Computação",
    "Tecnologia",
    "Evento",
    "Workshop",
    "Tecnologia da Informação",
    "X Workshop de Tecnologia da Computação e Computação",
  ],
};

import { Analytics } from "@vercel/analytics/react";

import Hydration from "@/lib/context/hydration";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="X WTCC" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <Analytics />
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <Hydration />
        <Header />
        <main className="mt-32 mx-7 lg:mx-0">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
