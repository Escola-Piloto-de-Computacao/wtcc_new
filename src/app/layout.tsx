import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico",
    },
    title: "IX WTCC",
    description: "Site oficial do IX WTCC, evento anual organizado pelo curso de Ciência da Computação da UFERSA.",
    authors: { name: "EPC", url: "https://escolapilotodecomputacao.com.br" },
    keywords: ["IX WTCC", "UFERSA", "Ciência da Computação", "Computação", "Tecnologia", "Evento", "Workshop", "Tecnologia da Informação", "IX Workshop de Tecnologia da Computação e Computação"],

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Header />
                <main className="mt-32 mx-7 lg:mx-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
};
