import React from 'react';

import FaqBox from '@/components/core/Faq';
import Formulario from '@/components/core/Faq/Formulario';

import { IoIosArrowRoundDown } from "react-icons/io";

import { FAQuestions } from '@/lib/data';

export default function Faq() {
    return (
        <div className="mb-20 flex flex-col">
            <div className="mb-36">
                <div className="text-center space-y-1">
                    <h1 className="text-4xl">FAQ</h1>
                    <h2 className="font-light">perguntas frequentes</h2>
                </div>
                <FaqBox questions={FAQuestions} />
            </div>
            <div className="absolute xsm:top-[67rem] sm:top-[52rem] md:top-[48rem] lg:top-[45rem] xl:top-[38rem] text-center flex flex-col gap-8 self-center items-center">
                <div>
                    <div className="flex items-center justify-center">
                        <h2 className="text-2xl">Envie sua pergunta!</h2>
                        <div className="hidden lg:block mb-8">
                            <IoIosArrowRoundDown size={35} className="absolute" />
                        </div>
                    </div>
                    <p>Ainda ficou com uma dúvida e quer descobrir a resposta?</p>
                </div>
                <div className="lg:mb-0 lg:w-[40vw] w-11/12 border-1 rounded-md px-5 pt-3 pb-5 shadow-lg bg-gray-100">
                    <Formulario />
                </div>
            </div>
            <div className="h-[50rem] sm:h-[38rem] lg:h-[40rem]"></div>
        </div>
    );
};
