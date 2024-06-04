'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Image } from 'antd';

import { steps } from '@/lib/steps';
import { uppV, uppV2, uppV3, leftV, rightV2 } from '@/lib/motion-variants';

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

    return (
        <div className="mb-12 flex flex-col gap-8">
            <div>
                <motion.h1 initial="hidden" animate="visible" variants={uppV2} className="text-4xl font-light text-center">Inscreva-se</motion.h1>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <motion.h3
                    key={step}
                    initial="hidden"
                    animate="visible"
                    variants={previousStep > step ? leftV : rightV2}
                    className="text-base font-semibold"
                >
                    Passo {step + 1}: {steps[step].title}
                </motion.h3>
                <div className="flex max-w-xs gap-3">
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
                </div>
                <div className="mt-7 w-full h-[28rem]">
                    <div className="flex gap-3 bg-slate-200 rounded-md p-12 mx-16 h-96">
                        {steps[step].image != "" && (
                            <motion.div key={steps[step].image} initial="hidden" animate="visible" variants={uppV3} className="w-1/2 flex flex-col justify-center items-center">
                                <div className="object-cover">
                                    <Image src={steps[step].image} alt={steps[step].title} loading='eager' />
                                </div>
                                <p className="mt-1 text-xs text-center italic">{steps[step].imageDesc}</p>
                            </motion.div>
                        )}
                        <motion.div key={step} initial="hidden" animate="visible" variants={uppV} className={steps[step].image != "" ? "w-1/2" : "w-full"}>
                            {steps[step].content}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};