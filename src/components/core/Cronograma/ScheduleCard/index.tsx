"use client";

import React from 'react';
import { Popover } from 'antd';
import './schedule.css';
import { Atividade } from '@/lib/definitions';
import { MapPinIcon } from '@/components/ui/icons';
import Link from 'next/link';

interface ScheduleCardProps {
    atividade: Atividade;
};
const ScheduleCard: React.FC<ScheduleCardProps> = ({ atividade }) => {
    return (
        <div className="fade-in w-[75vw]" >
            <div className="w-full flex flex-col items-center gap-1 py-5 sm:flex-row border-1 sm:border-0 sm:border-b-2 border-black ">
                <div className="w-full text-center sm:w-1/4">
                    <p className="text-base font-medium">{atividade.hora}</p>
                </div>
                <div className="flex flex-col items-center sm:items-start w-full sm:w-2/4 pb-2 sm:pb-0">
                    <h3 className="text-blue-400 text-lg font-medium">{atividade.titulo}</h3>
                    <p className="lg:ml-3 text-sm text-center sm:text-left px-1 sm:px-0">{atividade.descricao}</p>
                </div>
                <Link
                    href='/#mapa'
                    className="hidden md:flex md:flex-grow align-middle justify-center cursor-pointer">
                    <Popover
                        content={
                            <h1 className="text-md">Clique para ver no mapa!</h1>
                        }
                        placement='right'
                        className="md:flex items-center">
                        <div className="flex flex-row w-auto justify-center">
                            <MapPinIcon />
                            <p className="ml-1 text-sm font-semibold">{atividade.localizacao}</p>
                        </div>
                    </Popover>
                </Link>
                <div className="md:hidden flex flex-row sm:w-1/4 justify-center">
                    <MapPinIcon />
                    <p className="text-sm font-semibold">{atividade.localizacao}</p>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;