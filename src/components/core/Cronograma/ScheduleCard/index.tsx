"use client";

import React from 'react';
import { Popover } from 'antd';
import './schedule.css';
import { Atividade } from '@/lib/definitions';
import { MapPinIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { HiCursorClick } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface ScheduleCardProps {
    atividade: Atividade;
};
const ScheduleCard: React.FC<ScheduleCardProps> = ({ atividade }) => {

    const cronogramaItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="fade-in w-[75vw]" >
            <div className="w-full flex flex-col items-center gap-1 py-5 sm:flex-row border-1 sm:border-0 sm:border-b-2 border-black ">
                <div className="w-full text-center sm:w-1/4">
                    <motion.p initial="hidden" animate="visible" variants={cronogramaItem} className="text-base font-medium">{atividade.hora}</motion.p>
                </div>
                <motion.div initial="hidden" animate="visible" variants={cronogramaItem} className="flex flex-col items-center sm:items-start w-full sm:w-2/4 pb-2 sm:pb-0">
                    {atividade.pageExists ? (
                        <Link href={`${atividade.page}`}>
                            <div className="flex gap-1">
                                <h3 className="text-blue-400 text-lg font-medium ml-4 sm:ml-0">{atividade.titulo}</h3>
                                <HiCursorClick size={15} className="text-blue-400" />
                            </div>
                        </Link>
                    ) : (
                        <h3 className="text-blue-400 text-lg font-medium">{atividade.titulo}</h3>
                    )}
                    <p className="md:ml-3 text-sm text-center sm:text-left px-1 sm:px-0">{atividade.descricao}</p>
                </motion.div>
                <Link
                    href='/#mapa'
                    className="hidden md:flex md:flex-grow align-middle justify-center cursor-pointer">
                    <Popover
                        content={
                            <h1 className="text-md">Clique para ver no mapa!</h1>
                        }
                        placement='right'
                        className="md:flex items-center">
                        <motion.div initial="hidden" animate="visible" variants={cronogramaItem} className="flex flex-row w-auto h-auto justify-center gap-[0.1rem]">
                            <MapPinIcon size={15} className="pt-[0.15rem]" />
                            <p className="ml-1 text-sm font-semibold">{atividade.localizacao}</p>
                        </motion.div>
                    </Popover>
                </Link>
                <div className="md:hidden flex flex-row sm:w-1/4 justify-center gap-[0.1rem]">
                    <MapPinIcon size={15} className="pt-[0.15rem]" />
                    <p className="text-sm font-semibold">{atividade.localizacao}</p>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;