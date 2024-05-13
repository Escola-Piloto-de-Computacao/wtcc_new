import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <main className="mt-36 mx-12 lg:mx-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
