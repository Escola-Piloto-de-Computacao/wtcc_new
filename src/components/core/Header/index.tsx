"use client";

import { useEffect, useState } from "react";
import HeaderItems from "./HeaderItems";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 140) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <header className={`top-0 w-screen backdrop-filter backdrop-blur-lg bg-white/50 fixed z-50 trasition ease-in-out duration-500 border-b border-gray-100 ${animateHeader && "shadow-2xl border-none"}`}>
            <ProgressBar />
            <div
                className={`flex justify-between lg:max-w-screen-xl py-2 lg:py-3 ${animateHeader && "py-3 lg:py-4"} mx-auto items-center px-3 lg:px-8 trasition ease-in-out duration-500`}>
                <div className={"hidden lg:flex items-center w-[15vh]"}>
                    <Link href="/" className="pr-8 flex items-center" >
                        <Image src="/logoNew.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <nav className="flex justify-center flex-grow lg:pr-12">
                    <HeaderItems />
                </nav>
            </div>
        </header>
    );
};

