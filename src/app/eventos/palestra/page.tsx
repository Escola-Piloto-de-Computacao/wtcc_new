'use client';

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { BsPersonFill } from 'react-icons/bs';

import { palestra } from '@/lib/data';
import { leftV, uppV, downV, downV2, leftV2, rightV } from '@/lib/motion-variants';

export default function Palestra() {
    return (
        <div className="mb-20 flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-9 lg:mt-36">
            <motion.div initial="hidden" animate="visible" variants={rightV} className="md:col-start-1 lg:col-start-2 md:col-span-6 lg:col-span-5 rounded-xl">
                <Image
                    src={palestra.img}
                    alt={"Foto da palestra " + palestra.name}
                    width={1512} height={2016}
                    className="rounded-md h-[35vh] sm:h-[60vh] md:h-[75vh] w-full object-cover object-center"
                    quality={60}
                    loading='eager'
                />
            </motion.div>
            <div className="md:col-start-7 md:col-span-6 lg:col-span-5 lg:mt-4 flex flex-col gap-8 lg:gap-12">
                <div className="flex flex-col gap-4">
                    <div>
                        <motion.p initial="hidden" animate="visible" variants={uppV} className="text-base font-light">Auditório da PROEC - 25/04 - 08:00</motion.p>
                        <motion.h2 initial="hidden" animate="visible" variants={leftV} className="text-2xl lg:text-3xl font-bold text-left font-poppings mr-5 lg:mr-16">{palestra.name}</motion.h2>
                    </div>
                    <motion.div initial="hidden" animate="visible" variants={downV} className="lg:ml-2 flex flex-col gap-2 text-justify indent-5">
                        <p className="">{palestra.description}</p>
                        <p className="">{palestra.descriptionCont}</p>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-2">
                    <motion.div initial="hidden" animate="visible" variants={leftV2} className="flex gap-2">
                        <BsPersonFill size={30} />
                        <h3 className="mt-[0.18rem] text-medium lg:text-xl font-bold text-left font-poppings">{palestra.speaker.name}</h3>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" variants={downV2} className="ml-2 indent-5">
                        <p className="text-justify mr-5 lg:mr-16">{palestra.speaker.bio}</p>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};