'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { uppV2 } from '@/lib/motion-variants';

const MaratonaText = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={uppV2} className="h-full lg:h-[55vh] text-justify indent-6 flex flex-col gap-3 mb-4 lg:mb-0">
            <p>Na maratona, os participantes formam equipes e enfrentam desafios propostos pelos organizadores. O ambiente é caracterizado por intensa colaboração, criatividade e uma atmosfera competitiva, onde a pressão do tempo estimula a produtividade e o pensamento ágil.</p>
            <p>Para estudantes de computação, participar de uma maratona de programação é uma oportunidade valiosa de aplicar os conhecimentos teóricos adquiridos em sala de aula em um contexto prático e dinâmico. Essas competições permitem que os estudantes desenvolvam habilidades essenciais como trabalho em equipe, comunicação, gestão de tempo e resolução de problemas sob pressão. Além disso, a maratona proporciona uma imersão no processo de desenvolvimento de software, desde a concepção da ideia até a implementação e apresentação final, oferecendo uma visão completa e prática do ciclo de vida de um projeto tecnológico.</p>
            <p>A maratona incentiva a atualização constante dos conhecimentos e o aprendizado de novas tecnologias e metodologias, fundamentais em um campo tão dinâmico quanto o da computação e tecnologias da informação. Participar de uma maratona de programação demonstra proatividade e paixão pela área, atributos muito valorizados no mercado de trabalho. Em suma, essas competições contribuem significativamente para o crescimento profissional e pessoal dos participantes, tornando-se uma experiência enriquecedora e muitas vezes transformadora.</p>
        </motion.div>
    );
};

export default MaratonaText;