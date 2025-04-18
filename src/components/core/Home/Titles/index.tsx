"use client";

import React from "react";
import Image from "next/image";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";
import { Tooltip } from "antd";
import { ClickHereArrow } from "@/components/ui/icons";
import Button from "@/components/core/Home/InscreverButton";

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
            objectFit="cover"
            className="w-auto h-auto rounded-2xl"
            quality={100}
            loading="eager"
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
            <Highlight className="text-black dark:text-black" animationTime={2}>
              Descubra o mundo da computação
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <p className="mt-6 lg:mt-5 lg:w-11/12 lg:ml-4 text-justify lg:indent-3 text-balance hyphens-auto break-words">
        O X Workshop Técnico-Científico de Computação do RN tem como propósito
        despertar o interesse dos estudantes de graduação e pós-graduação em
        pesquisa científica na área de ciência da computação. Além disso, busca
        discutir temas relevantes para estudantes e profissionais, desenvolver
        habilidades não abordadas na faculdade, promover o aprendizado mútuo e
        introduzir os calouros ao curso. O evento proporciona um espaço de
        intercâmbio entre alunos de Ciência da Computação e cursos de
        tecnologia, exibindo trabalhos acadêmicos e pesquisas tecnológicas
        realizadas na universidade. No evento, será disponibilizado um momento
        para se conhecer os{" "}
        <Link href="/eventos/mostra-cientifica">
          <span className="italic">
            projetos
            <HiCursorClick
              className="inline-flex ml-[0.2rem] mb-[0.5rem]"
              size={10}
            />
          </span>
        </Link>{" "}
        do curso, ver a{" "}
        <Link href="/eventos/palestra">
          <span className="italic">
            palestra
            <HiCursorClick
              className="inline-flex ml-[0.2rem] mb-[0.5rem]"
              size={10}
            />
          </span>
        </Link>{" "}
        de um ex-aluno atuante da área, ver{" "}
        <Link href="/eventos/minicursos">
          <span className="italic">
            minicursos
            <HiCursorClick
              className="inline-flex ml-[0.2rem] mb-[0.5rem]"
              size={10}
            />
          </span>
        </Link>{" "}
        diversos oferecidos por alunos e participar das competições{" "}
        <Link href="/eventos/hackathon">
          <span className="italic">
            Hackathon
            <HiCursorClick
              className="inline-flex ml-[0.2rem] mb-[0.5rem]"
              size={10}
            />
          </span>
        </Link>{" "}
        e da{" "}
        <Link href="/eventos/maratona-de-programacao">
          <span className="italic">
            Maratona de Programação
            <HiCursorClick
              className="inline-flex ml-[0.2rem] mb-[0.5rem]"
              size={10}
            />
          </span>
        </Link>
        !
      </p>
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
            <Highlight
              className="text-black dark:text-black"
              animationTime={2.5}
            >
              Despertando o conhecimento
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <p className="mt-5 lg:ml-4 text-justify lg:indent-4 text-balance hyphens-auto break-words">
        {" "}
        Durante o evento, os participantes terão acesso a uma programação
        diversificada, incluindo cerimônia de abertura, palestras,
        mesas-redondas, minicursos, hackathon e maratona de programação. Além
        disso, ao participar dos minicursos, os alunos poderão obter{" "}
        <Tooltip
          title="Ao se assistir o decorrer do evento, se ganhará horas complementares, assim como, ao assistir os minicursos oferecidos à tarde!"
          color="white"
          overlayInnerStyle={{ color: "black", textAlign: "justify" }}
        >
          <span className="bg-yellow-300 cursor-alias italic">
            CERTIFICADOS
          </span>
        </Tooltip>
        , enriquecendo seus currículos e ampliando suas habilidades na área. Não
        perca essa oportunidade de aprendizado e networking! 🚀🔍🎓
      </p>
    </div>
  );
};

const Titles = () => {
  return (
    <div className="col-start-2 col-span-5">
      <Title1 />
      <Title2 />
    </div>
  );
};

export { Titles, Images };
