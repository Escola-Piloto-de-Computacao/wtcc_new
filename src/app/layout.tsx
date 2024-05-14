import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "IX WTCC",
    description: "Site oficial do WTCC",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Header />
                <main className="mt-32 mx-12 lg:mx-0 h-[85vh]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
