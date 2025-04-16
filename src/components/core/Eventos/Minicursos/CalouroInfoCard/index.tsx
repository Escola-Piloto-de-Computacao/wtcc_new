'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { Modal } from 'antd';

import { BsInfoCircle } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';

interface CalouroInfoCardProps { className?: string }
const CalouroInfoCard: React.FC<CalouroInfoCardProps> = ({ className }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function openModal(state: boolean) {
        setIsModalVisible(state);
    };

    const modal = () => {
        Modal.info({
            title: 'Sugestões aos calouros',
            content: (
                <div className="flex flex-col gap-4 text-medium">
                    <div className="flex flex-col gap-1">
                        <p>Devido a natureza do evento do evento do WTCC ser voltado aos calouros, a maioria dos minicursos tem viés introdutório, seguem algumas recomendações de minicursos aos calouros:</p>
                        <ul className="list-disc ml-10 flex flex-col gap-1">
                            <li><span className="font-semibold">Dia 23</span>: <span className="italic">HTML, CSS e Javascript (Web Básico)</span>; <span className="italic">Figma</span>; <span className="italic">Kotlin</span></li>
                            <li><span className="font-semibold">Dia 24</span>: <span className="italic">Avaliação de Design de Interfaces</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Agora seguem algumas recomendações de minicursos a depender da área de mercado em que deseja ingressar:</p>
                        <ul className="list-disc ml-10 flex flex-col gap-1">
                            <li><span className="font-semibold">Desenvolvimento Web</span>: <span className="italic">HTML, CSS e Javascript</span> (para quem é completo iniciante na área); <span className="italic">Ruby on Rails</span> (para quem já conhece o básico da área)</li>
                            <li><span className="font-semibold">Design de Interfaces</span>: <span className="italic">Figma</span> (para quem quer entender como se introduzir an área); <span className="italic">Avaliação de Design de Interfaces</span> (para quem quer entender o que faz uma boa interface)</li>
                            <li><span className="font-semibold">Desenvolvimento de Jogos</span>: <span className="italic">Introdução a Godot 4</span>; <span className="italic">Introdução a Unity</span>; Ambas ferramentas muito utilizadas no mercado atual</li>
                        </ul>
                    </div>
                    <div className="mt-2 mb-3 mr-5 flex flex-col gap-3 bg-slate-300 rounded-md p-2">
                        <p>Essas são apenas sugestões, fique a vontade para escolher os minicursos que mais lhe interessam!</p>
                    </div>
                </div >
            ),
            width: 650,
            style: { top: 20 },
            closable: true,
            footer: null
        });
    };

    return (
        <>
            <Button
                variant="ghost"
                className={cn("lg:absolute lg:z-20 lg:right-0 lg:mr-16 flex gap-1 items-center py-2 px-3", className)}
                onClick={modal}
            >
                <BsInfoCircle size={20} />
                <p>Sugestões de minicursos aos calouros</p>
                <div className="mb-[0.1rem]">
                    <HiCursorClick size={15} />
                </div>
            </Button >
        </>
    );
};

export default CalouroInfoCard;