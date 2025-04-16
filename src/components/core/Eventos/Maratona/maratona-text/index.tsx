'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { uppV2 } from '@/lib/motion-variants';

const MaratonaText = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={uppV2} className="h-full lg:h-[52vh] text-justify indent-6 flex flex-col gap-3 mb-4 lg:mb-0">
            <p>Na maratona, os participantes formam equipes e enfrentam desafios propostos pelos organizadores. O ambiente é caracterizado por intensa colaboração, criatividade e uma atmosfera competitiva, onde a pressão do tempo estimula a produtividade e o pensamento ágil.</p>
            <p>Para estudantes de computação, uma maratona de programação é uma chance única de transformar teoria em prática. Além de aprimorar trabalho em equipe, comunicação e gestão de tempo, esses desafios simulam o ciclo real do desenvolvimento de software, da ideia à implementação, em um ambiente dinâmico e sob pressão.</p>
            <p>Para participar do evento, não é necessário saber alguma linguagem de programação específica, espera-se que o grupo decida usar de uma linguagem das mais conhecidas (ex. Java, C++).</p>
            <p>Para participar da maratona, é necessário formar um grupo de <span className="bg-yellow-300 px-[0.15rem]">3 alunos</span> e se inscrever no formulário abaixo! A premiação e competição será no <span className="bg-yellow-300 px-[0.15rem]">dia 24/04, das 8:00 às 12:00</span>.</p>
        </motion.div>
    );
};

export default MaratonaText;