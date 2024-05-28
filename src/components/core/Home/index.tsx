'use client';

import React, { useEffect } from 'react';
import Map from '@/components/core/Home/MapArea';
import { FaMapLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import { Tooltip, Popover } from 'antd';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import Image from 'next/image';
import { ClickHereArrow } from '@/components/ui/icons';
import { HiCursorClick } from 'react-icons/hi';
import Patrocinadores from '@/components/core/Home/Patrocinadores';

const Button = () => {
    return (
        <div className="m-2 mt-12 lg:mt-0 flex justify-center">
            <Popover content={<p className="text-center">Inscrições abrem em breve!</p>} trigger="hover" className="hidden md:block">
                <button
                    className="font-bold text-white bg-green-600 rounded-2xl px-4 py-2 text-2xl cursor-not-allowed"
                    disabled
                    onClick={() => window.location.href = ""}>
                    INSCREVA-SE!
                </button>
            </Popover>
            <button
                className="md:hidden font-bold text-white bg-red-500 rounded-2xl px-4 py-2 text-lg cursor-not-allowed"
                disabled
                onClick={() => window.location.href = ""}>
                INSCRIÇÕES AINDA NÃO ABERTAS
            </button>
        </div>
    );
};

const Title1 = () => {
    return (
        <div className="mb-12 lg:pr-10">
            <div className="text-3xl lg:text-4xl text-center lg:text-left font-thin rounded-md">
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="lg:pl-1 lg:pr-2 font-semibold leading-0"
                    >
                        {" "}
                        <Highlight className="text-black dark:text-white" animationTime={2}>
                            Descubra o mundo da computação
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
            </div>
            <p className="mt-6 lg:mt-5 lg:w-11/12 lg:ml-4 text-justify lg:indent-3 text-balance hyphens-auto break-words">O IX Workshop Técnico-Científico de Computação do RN tem como propósito despertar o interesse dos estudantes de graduação e pós-graduação em pesquisa científica na área de ciência da computação. Além disso, busca discutir temas relevantes para estudantes e profissionais, desenvolver habilidades não abordadas na faculdade, promover o aprendizado mútuo e introduzir os calouros ao curso. O evento proporciona um espaço de intercâmbio entre alunos de Ciência da Computação e cursos de tecnologia, exibindo trabalhos acadêmicos e pesquisas tecnológicas realizadas na universidade.</p>
        </div>
    );
};

const Title2 = () => {
    return (
        <div>
            <div className="pt-3 lg:pt-0 text-3xl text-center lg:text-left rounded">
                <HeroHighlight containerClassName="lg:justify-start">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.333,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="inline"
                    >
                        {" "}
                        <Highlight className="text-black dark:text-white" animationTime={2.5}>
                            Despertando o conhecimento
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
            </div>
            <p className="mt-5 lg:ml-4 text-justify lg:indent-4 text-balance hyphens-auto break-words"> Durante o evento, os participantes terão acesso a uma programação diversificada, incluindo cerimônia de abertura, palestras, mesas-redondas, minicursos, hackathon e maratona de programação. Além disso, ao participar dos minicursos, os alunos poderão obter <Tooltip title="Ao se assistir o decorrer do evento, se ganhará horas complementares, assim como, ao assistir os minicursos oferecidos à tarde!" color='white' overlayInnerStyle={{ color: 'black', textAlign: 'justify' }}><span className="bg-yellow-300 cursor-help">CERTIFICADOS</span></Tooltip>, enriquecendo seus currículos e ampliando suas habilidades na área. Não perca essa oportunidade de aprendizado e networking! 🚀🔍🎓</p>
        </div>
    );
};

const Images = () => {
    return (
        <div className="lg:h-[85vh] py-4 lg:py-0 col-start-7 col-span-5 flex flex-col items-center justify-center lg:ml-24">
            <div className="hidden lg:block bg-blue-200 rounded-xl w-[24%] h-3/6 mb-52 mr-60 absolute"></div>
            <div className="hidden lg:block bg-green-200 rounded-xl w-1/5 h-[53%] mb-72 ml-64 absolute"></div>
            <div className="hidden lg:grid col-span-1 lg:grid-rows-2 gap-3">
                <div className="z-10">
                    <Image
                        src="/home1.png"
                        alt="Imagem de antigos WTCC's"
                        width={5473}
                        height={2303}
                        objectFit='cover'
                        className="w-auto h-auto rounded-2xl"
                        quality={100}
                        loading='eager'
                    />
                </div>
                <div className="grid grid-cols-12 gap-2 justify-items-center z-10">
                    <div className="col-span-5 h-36 object-cover">
                        <Image
                            src="/home2.jpg"
                            alt="Imagem de antigos WTCC's"
                            width={1080}
                            height={720}
                            className="w-auto h-auto rounded-2xl"
                            quality={100}
                            loading="eager"
                        />
                    </div>
                    <div className="col-span-7 h-36 object-cover">
                        <Image
                            src="/home3.jpg"
                            alt="Imagem de antigos WTCC's"
                            width={1080}
                            height={500}
                            className="w-auto h-auto rounded-2xl"
                            quality={100}
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center z-20">
                <Button />
                <ClickHereArrow />
            </div>
        </div>
    );
};

const MapArea = () => {
    return (
        <div className="col-span-12 lg:grid lg:grid-cols-6 lg:gap-10 flex flex-col lg:mx-24 pt-10 lg:pt-16" id="mapa">
            <div className="col-start-2 col-span-2 flex flex-col gap-2 mb-6 lg:pb-0">
                <div className="flex lg:justify-end justify-center gap-2 mt-4">
                    <FaMapLocationDot size={30} className="mt-[0.15rem]" />
                    <h1 className="text-3xl">Onde será o evento?</h1>
                </div>
                <p className="text-justify indent-4">Veja no mapa a seguir onde ocorrerá o evento, assista aos minicursos nos Laboratórios do do prédio LCC, a palestra e abertura do evento no Auditório da PROEC.</p>
                <p className="text-justify indent-4">Descubra onde ocorerrá cada parte do WTCC na página <Link href="/cronograma"><span className="bg-yellow-300 px-1 italic">Cronograma<HiCursorClick className="inline-flex ml-1" /></span></Link>.</p>
            </div>
            <div className="col-span-3 w-full h-[45vh]">
                <Map />
            </div>
        </div>
    );
};

const MainArea = () => {

    useEffect(() => {
        if (window.location.hash === '#mapa') {
            const scrollMarkElement = document.getElementById('mapa');
            if (scrollMarkElement) {
                const offsetTop = scrollMarkElement.offsetTop;
                const offset = 210;
                window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <section className="lg:grid lg:grid-cols-12">
            <div className="col-start-2 col-span-5">
                <Title1 />
                <Title2 />
            </div>
            <Images />
            <MapArea />
            <Patrocinadores />
        </section>
    );
};

export default MainArea;