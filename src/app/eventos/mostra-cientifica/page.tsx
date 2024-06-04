'use client';

import React from 'react';

import { motion } from 'framer-motion';

import FlipWords from '@/components/ui/flip-words';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import { uppV, appearV, uppV3, downV3 } from '@/lib/motion-variants';
import { projetosCientificos } from '@/lib/projects';

export default function MostraCientifica() {
    const words = ["projetos", "pesquisas", "inovações", "descobertas"];

    return (
        <div className="mb-16 flex flex-col gap-8 text-center">
            <div className="w-full flex flex-col items-center text-center mb-1">
                <div className="xsm:w-[66vw] sm:w-[45vw] md:w-[37vw] lg:w-[23vw] xl:w[19vw]">
                    <motion.p initial="hidden" animate="visible" variants={uppV} className="text-base font-light">Auditório da PROEC - 05/06 - 10:30</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={appearV} className="w-full text-4xl font-light border-b-2 border-current pb-1">Mostra Científica</motion.h1>
                </div>
                <motion.h2 initial="hidden" animate="visible" variants={downV3} className="pt-1">Veja<FlipWords words={words} />do curso de Ciência da Computação da UFERSA</motion.h2>
            </div>
            <div>
                <BentoGrid className="max-w-5xl mx-auto md:px-3 xl:px-0">
                    {projetosCientificos.map((projeto) => (
                        <motion.div initial="hidden" animate="visible" variants={uppV3} className={projeto.index === 1 || projeto.index === 2 ? "md:col-span-2" : ""}>
                            <BentoGridItem
                                key={projeto.index}
                                projeto={projeto}
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
};