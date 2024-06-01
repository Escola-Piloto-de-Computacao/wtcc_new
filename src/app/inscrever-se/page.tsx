'use client';

import React, { useState } from 'react';

import { steps } from '@/lib/steps';

export default function InscreverSePage() {

    const [step, setStep] = useState<number>(0);

    const handleChangeStep = (step: number) => {
        setStep(step);
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-light text-center">Inscrição</h1>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <h3 className="text-base font-semibold">Passo {step + 1}: {steps[step].title}</h3>
                <div className="flex max-w-xs gap-3">
                    {steps.map((cStep) => (
                        <button
                            key={cStep.index}
                            className={"w-16 h-3 rounded-sm bg-gray-400 dark:bg-gray-800" + (step > cStep.index ? " bg-gray-800" : "") + (step === cStep.index ? " bg-blue-500" : "")}
                            onClick={() => handleChangeStep(cStep.index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};