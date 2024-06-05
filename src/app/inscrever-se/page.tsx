'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { steps } from '@/lib/steps';
import { uppV, uppV2, uppV3, leftV, rightV2 } from '@/lib/motion-variants';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function InscreverSePage() {

    const [step, setStep] = useState<number>(0);
    const [previousStep, setPreviousStep] = useState<number>(-1);

    const handleChangeStep = (newStep: number) => {
        if (step === newStep) {
            return;
        }
        setPreviousStep(step);
        setStep(newStep);
    };

    const handleNextStep = () => {
        if (step < steps.length - 1) {
            setPreviousStep(step);
            setStep(step + 1);
        };
    };

    const handlePreviousStep = () => {
        if (step > 0) {
            setPreviousStep(step);
            setStep(step - 1);
        };
    };

    return (
        <div className="mb-12 flex flex-col gap-8">
            <div>
                <motion.h1 initial="hidden" animate="visible" variants={uppV2} className="text-4xl font-light text-center">Inscreva-se</motion.h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <motion.h3
                    key={step}
                    initial="hidden"
                    animate="visible"
                    variants={previousStep > step ? leftV : rightV2}
                    className="text-base font-semibold"
                >
                    Passo {step + 1}: {steps[step].title}
                </motion.h3>
                <div className="flex max-w-sm gap-3 items-center">
                    <FaArrowLeft size={25} className="text-2xl cursor-pointer" onClick={() => handlePreviousStep()} />
                    {steps.map((cStep) => (
                        <motion.button
                            initial="hidden"
                            animate="visible"
                            variants={uppV3}
                            key={cStep.index}
                            className={"w-16 h-3 rounded-sm transition-colors duration-500 ease-linear " +
                                (step > cStep.index ? "bg-gray-700" : step === cStep.index ? "bg-blue-500" : "bg-gray-400 dark:bg-gray-800")}
                            onClick={() => handleChangeStep(cStep.index)}
                        />
                    ))}
                    <FaArrowRight size={25} className="text-2xl cursor-pointer" onClick={() => handleNextStep()} />
                </div>
                <div className="mt-7 w-full md:h-[70vh]">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-3 bg-slate-200 rounded-md p-5 md:p-12 md:mx-16 md:h-[60vh] xsm:max-md:items-center">
                        {steps[step].image != "" && (
                            <motion.div key={steps[step].image} initial="hidden" animate="visible" variants={uppV3} className="md:w-1/2 flex flex-col justify-center items-center">
                                <div className="md:object-cover">
                                    <Image width={600} height={400} src={steps[step].image} alt={steps[step].title} quality={100} loading='eager' />
                                </div>
                                <p className="mt-1 text-xs text-center italic">{steps[step].imageDesc}</p>
                            </motion.div>
                        )}
                        <motion.div key={step} initial="hidden" animate="visible" variants={uppV} className={steps[step].image != "" ? "md:w-1/2 text-center md:text-left text-lg" : "w-full text-center md:text-left text-lg"}>
                            {steps[step].content}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};