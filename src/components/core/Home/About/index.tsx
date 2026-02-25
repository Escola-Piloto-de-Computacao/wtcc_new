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


const Text1 = () => {
  return (
    <div className="mb-12">
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
            <Highlight className="text-[#542A78]" animationTime={2}>
              Descubra o mundo da computação
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <p className="mt-6 lg:mt-5 lg:ml-4 text-justify lg:indent-3 text-balance hyphens-auto break-words">
        O XI Workshop Técnico-Científico de Computação do RN tem como propósito
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

const Text2 = () => {
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
              className="text-black"
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
          <span className="bg-[#B395CC] cursor-alias italic">
            CERTIFICADOS
          </span>
        </Tooltip>
        , enriquecendo seus currículos e ampliando suas habilidades na área. Não
        perca essa oportunidade de aprendizado e networking! 🚀🔍🎓
      </p>
    </div>
  );
};

const Text = () => {
  return (
    <div className="block col-start-2 col-span-10 my-20 mx-10 lg:px-[40px]">
      <Text1 />
      <Text2 />
    </div>
  );
};

export {Text};
