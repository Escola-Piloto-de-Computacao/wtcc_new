"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiCursorClick } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
import { Modal } from "antd";
import ModalContent from "@/components/core/Eventos/Minicursos/ModalContent";
import { motion } from "framer-motion";
import { minicursos } from "@/lib/data";
import CardMinicurso from "@/components/core/Eventos/Minicursos/CardMinicurso";

export default function Minicursos() {

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, time: 5 }
    };

    const [selectedButton, setSelectedButton] = useState("todos");
    function handleSelectedButtonChange(button: string) {
        setSelectedButton(button);
    }

    const [modalOpen, setModalOpen] = useState(-1); //-1 for no open modals
    function handleModalOpen(modalNum: number) {
        setModalOpen(modalNum);
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="col-span-1 flex flex-col place-self-center gap-3">
                <div className="text-center">
                    <h2 className="text-3xl">Minicursos</h2>
                    <p className="text-base font-light">Laboratórios do LCC - 13:30</p>
                </div>
                <div className="flex gap-10">
                    <Button
                        onClick={() => { handleSelectedButtonChange("05/06") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "05/06" ? "bg-gray-200" : ""}`}>
                        05/06
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("06/06") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "06/06" ? "bg-gray-200" : ""}`}>
                        06/06
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("todos") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "todos" ? "bg-gray-200" : ""}`}>
                        todos
                    </Button>
                </div>
                <div className="md:hidden flex gap-1">
                    <BsInfoCircle size={20} />
                    <p className="text-center text-sm">Clique no minicurso para ver mais informações!</p>
                    <div className="pt-[0.15rem]">
                        <HiCursorClick size={15} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 mb-16 gap-8 h-full">
                {minicursos.map((minicurso) => {
                    if (selectedButton === minicurso.date || selectedButton === "todos") {
                        return (
                            <motion.div key={minicurso.index + selectedButton} initial="hidden" animate="visible" whileHover="hover" variants={variants} className="h-full flex flex-col" >
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
