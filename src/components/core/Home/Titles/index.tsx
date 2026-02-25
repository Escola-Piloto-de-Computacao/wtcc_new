"use client";

import React from "react";
import Image from "next/image";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { HiCursorClick } from "react-icons/hi";
import Button from "@/components/core/Home/InscreverButton";


const Images = () => {
  return (
    <div className="py-4 lg:py-0 col-start-2 flex flex-col relative">
      <div className="hidden lg:block bg-[#62428A] rounded-xl w-[65%] h-[90%] bottom-0 left-0 absolute"></div>
      <div className="hidden lg:block bg-[#8E5EAD] rounded-xl w-[50%] h-[85%] top-0 right-0 absolute"></div>
      <div className="hidden lg:grid col-span-1 lg:grid-rows-3 gap-3 pl-6 pr-3 pt-4 pb-0 m-auto w-[clamp(450px,35vw,530px)]">
        <div className="z-10 row-span-5">
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
        <div className="grid grid-cols-12 gap-2 justify-items-center z-10 ">
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
    </div>
  );
};


  const Title = () => {
    return (
      <div className="lg:mb-10 m-0 -mb-[20px] lg:pr-10">
        <div className="text-4xl md:text-5xl lg:w-[min(625px,88%)] lg:text-6xl text-center lg:text-start font-thin rounded-md">
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
              className="font-bold leading-0"
            >
              <Highlight className="text-black" animationTime={2}>
                XI Workshop Técnico-Científico de Computação do RN
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
    );
  };


  const Titles = () => {
    return (
      <div className="col-start-6 col-span-5 grid">
        <Title />
        <div className="flex inline-flex m-auto lg:m-0 lg:mr-auto z-20">
          <Button />
          <HiCursorClick 
           className="pl-4 mt-[40px] lg:pl-0 lg:mt-0 lg:-ml-4 lg:-mb-20"
           
           size={40}/>
        </div>
      </div>
    );
  };
  
const Hero = () => {
  return (
    <section className="lg:col-span-12 grid grid-rows-1 lg:grid-cols-12 place-items-center h-[100vh] pt-[90px] lg:pt-[70px] px-[20px] md:px-[120px] pb-0 bg-[#B395CC] bg-[url('/logoWtcc.svg')] bg-[length:max(410px,70%)] bg-blend-soft-light bg-no-repeat bg-left-bottom ">
      <div className="lg:col-span-7">
        <Titles />
      </div>

      <div className="lg:col-span-5 m-auto">
        <Images />
      </div>
    </section>
  );
};

export default Hero;
