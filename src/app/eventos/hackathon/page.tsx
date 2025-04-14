"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "antd";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HiCursorClick } from "react-icons/hi";

import {
  downV,
  downV3,
  appearV,
  rightV,
  downV5,
  uppV4,
} from "@/lib/motion-variants";

export default function Hackathon() {
  return (
    <div className="pb-24 lg:pb-[9.16rem] xl:pb-24 lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:flex-row gap-6 justify-center xsm:max-md:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightV}
        className="hidden xl:block w-1/3 h-1/2"
      >
        <Image
          src="/hackathon.jpg"
          alt="Hackathon"
          width={800}
          height={1200}
          className="rounded-lg"
          quality={100}
          loading="eager"
        />
        <motion.p
          initial="hidden"
          animate="visible"
          variants={downV3}
          className="italic text-sm text-center"
        >
          Apresentação dos vencedores do Hackathon do X WTCC
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={downV5}
        className="w-full lg:w-[65.6%] flex flex-col items-center"
      >
        <motion.p
          initial="hidden"
          animate="visible"
          variants={uppV4}
          className="font-light text-sm italic"
        >
          25/04 - Multimídia LCC
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={appearV}
          className="text-4xl text-center font-fira font-extralight"
        >
          Hackathon
        </motion.h1>
        <Tabs defaultValue="O que é?" className="mt-4 w-full">
          <TabsList className="flex gap-4 font-fira">
            <TabsTrigger value="O que é?">O que é?</TabsTrigger>
            <TabsTrigger value="Inscrição">Inscrição</TabsTrigger>
            <TabsTrigger value="Enviar produção">Enviar produção</TabsTrigger>
          </TabsList>
          <TabsContent value="O que é?" className="mt-8 lg:mx-6 text-justify">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={downV}
              className="flex flex-col gap-4 indent-3"
            >
              <p>
                O Hackathon é um evento voltado para a resolução de problemas, a
                partir de um desafio proposto, onde os participantes têm a
                oportunidade de desenvolver soluções inovadoras e criativas,
                utilizando seus conhecimentos, trazendo, ao final, uma proposta
                a ser apresentada e avaliada por uma banca de jurados.
              </p>
              <p>
                É uma grande oportunidade para os participantes colocarem em
                prática seus conhecimentos, aprenderem novas tecnologias,
                trabalharem em equipe, desenvolverem habilidades de comunicação
                e liderança, além de terem a chance de ganhar prêmios e
                reconhecimento. O Hackathon é uma experiência única e
                enriquecedora, que pode abrir portas para novas oportunidades e
                parcerias.
              </p>
              <p>
                Os Hackathons são eventos muito populares e realizados em todo o
                mundo, em diversas áreas, como tecnologia, inovação,
                empreendedorismo, educação, saúde, entre outros. São eventos
                dinâmicos, intensos e desafiadores, que estimulam a
                criatividade, a colaboração e o trabalho em equipe,
                proporcionando uma experiência enriquecedora e transformadora
                para os participantes.
              </p>
              <p>
                Ao final do evento, os grupos apresentam suas soluções para a
                banca de jurados, que avalia e escolhe os melhores projetos, as
                produções vencedoras são premiados. Os Hackathons são uma
                excelente oportunidade para os participantes mostrarem seu
                potencial, desenvolverem suas habilidades e competências, e se
                destacarem no curso.
              </p>
            </motion.div>
          </TabsContent>
          <TabsContent value="Inscrição" className="mt-8 lg:mx-6 text-justify">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={downV}
              className="flex flex-col gap-4 indent-3"
            >
              <p>
                A inscrição no evento deve ser realizada por{" "}
                <span className="bg-yellow-300 px-[0.15rem]">
                  grupos de 2-4 integrantes
                </span>
                , todos sendo alunos do curso da Ciência da Computação. A
                inscrição é gratuita e deve ser feita através do formulário
                abaixo.
              </p>
              <p>
                Os grupos devem se ler e se atentar ao regulamento do evento,
                também disponível abaixo:
              </p>
              <div className="mt-2 flex gap-3 indent-0">
                <Button
                  type="primary"
                  className="w-full"
                  href="/REGULAMENTO-HACKATHON-WTCC24.pdf"
                  target="_blank"
                >
                  Regulamento
                </Button>
                <Button
                  type="primary"
                  className="w-full"
                  href="https://forms.gle/wULc1rNUBbykYAXt5"
                  target="_blank"
                >
                  Formulário de Inscrição
                </Button>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Enviar produção"
            className="mt-8 lg:mx-6 text-justify"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={downV}
              className="flex flex-col items-center gap-4 indent-3"
            >
              <p>
                Após as inscrições, os grupos devem desenvolver suas soluções
                para os desafio proposto e enviar a produção previamente para
                avaliação da banca de jurados. A produção deve ser enviada pelo
                grupo até a data estabelicida no regulamento. Abaixo está o
                formulário para o envio:
              </p>
              <Button
                type="primary"
                className="mt-2 w-1/2 indent-0"
                href="https://forms.gle/2snQ3vQudrmy19Y96"
                target="_blank"
              >
                Formulário de Envio
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={downV}
          className="mt-4 bg-yellow-300 rounded-md px-1 cursor-pointer"
        >
          <Link href="/faq" legacyBehavior passHref>
            <span className="italic cursor-pointer">
              Ainda tenho dúvidas!
              <HiCursorClick
                className="inline-flex ml-[0.2rem] mb-[0.5rem]"
                size={10}
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
