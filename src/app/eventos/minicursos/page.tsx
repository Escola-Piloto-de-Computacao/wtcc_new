'use client';

import React, { useState, useEffect } from 'react';

import { Modal } from 'antd';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import ModalContent from '@/components/core/Eventos/Minicursos/ModalContent';
import CardMinicurso from '@/components/core/Eventos/Minicursos/CardMinicurso';
import ExtraInfoCard from '@/components/core/Eventos/Minicursos/ExtraInfoCard';
import CalouroInfoCard from '@/components/core/Eventos/Minicursos/CalouroInfoCard';

import { minicursos } from '@/lib/data';
import { useChangeDate } from '@/lib/context/store';
import { minicursosV } from '@/lib/motion-variants';

export default function Minicursos() {

    const date = useChangeDate((state) => state.currentDate);
    const changeDate = useChangeDate((state) => state.setCurrentDate);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, [setHydrated]);

    function handleSelectedButtonChange(button: string) {
        changeDate(button);
    }

    const [modalOpen, setModalOpen] = useState(-1); //-1 for no open modals
    function handleModalOpen(modalNum: number) {
        setModalOpen(modalNum);
    }

    return (
        <div className="flex flex-col gap-10" >
            <div className="col-span-1 flex flex-col place-self-center gap-3">
                <div className="text-center">
                    <h2 className="text-3xl">Minicursos</h2>
                    <p className="text-base font-light">Laboratórios do LCC - 14:00</p>
                </div>
                <div className="flex gap-10">
                    <Button
                        onClick={() => { handleSelectedButtonChange("23/04") }}
                        variant="ghost"
                        className={`text-lg ${date === "23/04" ? "bg-gray-200" : ""}`}>
                        23/04
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("24/04") }}
                        variant="ghost"
                        className={`text-lg ${date === "24/04" ? "bg-gray-200" : ""}`}>
                        24/04
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("todos") }}
                        variant="ghost"
                        className={`text-lg ${date === "todos" ? "bg-gray-200" : ""}`}>
                        todos
                    </Button>
                </div>
                <ExtraInfoCard />
                <CalouroInfoCard />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 mb-16 gap-8 h-full">
                {minicursos.map((minicurso) => {
                    if (date === minicurso.date || date === "todos") {
                        return (
                            <motion.div key={minicurso.index + date} initial="hidden" animate="visible" whileHover="hover" variants={minicursosV} className="h-full flex flex-col" >
                                <CardMinicurso key={minicurso.index} minicurso={minicurso} onOpenModal={handleModalOpen} className="h-full" />
                                <Modal
                                    centered
                                    open={minicurso.index === modalOpen}
                                    footer={null}
                                    onCancel={() => setModalOpen(-1)}
                                    width={930}
                                    className=""
                                >
                                    <div className="flex flex-col text-left text-base text-gray-600 italic">
                                        <p className="font-thin">{minicurso.date} às 14:00 - {minicurso.localizacao}</p>
                                        <div className="">
                                            {minicurso.alternateTitle}
                                        </div>
                                    </div>
                                    <ModalContent minicourse={minicurso} />
                                </Modal>
                            </motion.div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
