'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';

import MyTerminal from '@/components/core/Eventos/MyTerminal';
import MaratonaText from '@/components/core/Eventos/Maratona/maratona-text';
import { Switch } from '@/components/ui/switch';

import { BsInfoCircle, BsCardText } from 'react-icons/bs';

import { downV4, downV3 } from '@/lib/motion-variants';

export default function Maratona() {

    const [interactiveMode, setInteractiveMode] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setInteractiveMode(window.innerWidth > 768);
        }
    }, []);

    return (
        <div className="pb-16 lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:grid xl:grid-cols-12 gap-8 justify-center">
            <div className="order-last xl:order-1 col-span-7 flex flex-col gap-8">
                <h1 className="text-4xl text-center font-mono">Maratona de Programação</h1>
                <div className="flex flex-col gap-2 h-full">
                    <div className="w-full h-full md:overflow-hidden">
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
            </div>
            <div className="hidden xl:flex w-[28vw] order-1 xl:order-last col-span-5 place-content-center justify-content-end">
                <Image
                    src="/maratona.png"
                    alt="Maratona de Programação"
                    width={1200}
                    height={1600}
                    className="rounded-lg"
                    quality={100}
                    loading='eager'
                />
            </div>
        </div>
    );
};