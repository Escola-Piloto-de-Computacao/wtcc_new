'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import MyTerminal from '@/components/core/Eventos/MyTerminal';
import MaratonaText from '@/components/core/Eventos/Maratona/maratona-text';
import { Switch } from '@/components/ui/switch';
import { Button } from 'antd';

import { BsInfoCircle, BsCardText } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';

import { downV4, downV3, uppV3, appearV, leftV3 } from '@/lib/motion-variants';

export default function Maratona() {

    const [interactiveMode, setInteractiveMode] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setInteractiveMode(window.innerWidth > 768);
        }
    }, []);

    return (
        <div className="pb-16 lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:grid xl:grid-cols-12 gap-8 justify-center">
            <div className="order-last xl:order-1 col-span-7 flex flex-col gap-6">
                <div className="flex flex-col items-center">
                    <motion.p initial="hidden" animate="visible" variants={uppV3} className="italic font-light text-sm ">24/04 - Lab 4 LCC</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={appearV} className="text-4xl text-center font-mono mb-2">Maratona de Programação</motion.h1>
                </div>
                <div className="flex flex-col gap-2 h-full">
                    <div className="w-full md:overflow-hidden">
                        {interactiveMode ? <MyTerminal /> : <MaratonaText />}
                    </div>
                    <div className={`flex gap-1 w-full flex-col sm:flex-row ${interactiveMode ? 'justify-between' : 'justify-end'}`}>
                        {interactiveMode ? <motion.div initial="hidden" animate="visible" variants={downV4} className="flex gap-1 items-center">
                            <BsInfoCircle size={15} />
                            <p className="text-xs text-center">Clique na janela do terminal e digite <span className="font-fira bg-[#212121] text-white px-[0.2rem] rounded-sm">help</span></p>
                        </motion.div> : null}
                        <motion.div initial="hidden" animate="visible" variants={downV3} className="flex gap-1 items-center">
                            <BsCardText size={17} />
                            <p>Modo interativo</p>
                            <Switch
                                className="ml-1"
                                checked={interactiveMode} //initial state of the switch
                                onCheckedChange={setInteractiveMode} //function to change the state of the switch
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <motion.ul initial="hidden" animate="visible" variants={uppV3} className="list-disc">
                        <li>Pré-requisitos: Programação de Computadores</li>
                    </motion.ul>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:mx-2">
                        <motion.div initial="hidden" animate="visible" variants={uppV3} className="w-1/2 md:w-1/3 mx-auto">
                            <Button type="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScxk1-rJW5DlqQA_q4PKg3vyReqlW45AmzQzuESGqw_2ULKpA/viewform?usp=dialog" target="_blank" className="w-full text-sm md:text-base">Inscreva-se</Button>
                        </motion.div>
                        <div className="md:z-10 md:absolute bg-yellow-200 md:px-2 rounded-md w-[40%] md:w-auto mx-auto md:mx-0 text-center">
                            <Link href="/faq" legacyBehavior passHref>
                                <span className="italic cursor-pointer">Ainda tenho dúvidas!<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div initial="hidden" animate="visible" variants={leftV3} className="hidden xl:flex w-[28vw] order-1 xl:order-last col-span-5 place-content-center justify-content-end">
                <Image
                    src="/maratona.jpg"
                    alt="Maratona de Programação"
                    width={1200}
                    height={1600}
                    className="rounded-lg"
                    quality={100}
                    loading='eager'
                />
            </motion.div>
        </div>
    );
};