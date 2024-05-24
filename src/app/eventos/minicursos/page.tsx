"use client";

import React, { useState } from 'react';
import { MinicourseCard, MinicourseCardSubtitle, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardImage } from '@/components/ui/minicourse-card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { HiCursorClick } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
import { Modal } from "antd";
import { Minicurso } from "@/lib/definitions";
import { ModalContent } from "@/components/core/Eventos/ModalContent";
import {
    BackendIcon,
    FrontEndIcon,
    InicianteIcon, WebIcon,
    MathIcon,
    LanguageIcon,
    FrameworkIcon,
    MobileIcon, ToolIcon,
    GameIcon,
    OSIcon,
    AutomationIcon,
    RobotIcon
} from "@/components/ui/icons";
import { minicursos } from "@/lib/data";
import { number } from 'zod';

export default function Minicursos() {
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
                    <p className="text-base font-light">13:30</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 mb-16 gap-8">
                {minicursos.map((minicurso) => {
                    if (selectedButton === minicurso.date || selectedButton === "todos") {
                        return (
                            <>
                                <CardMinicurso key={minicurso.index} minicurso={minicurso} onOpenModal={handleModalOpen} />
                                <Modal
                                    centered
                                    open={minicurso.index === modalOpen}
                                    footer={null}
                                    onCancel={() => setModalOpen(-1)}
                                    width={930}
                                    className=""
                                >
                                    <div className="flex flex-col text-left text-base text-gray-600 italic">
                                        <p className="font-semibold">{minicurso.date} às 14:00 - {minicurso.localizacao}</p>
                                        <div className="">
                                            {minicurso.alternateTitle}
                                        </div>
                                    </div>
                                    <ModalContent minicourse={minicurso} />
                                </Modal>
                            </>
                        );
                    }
                })}
            </div>
        </div>
    );
};

interface CardMinicursoProps { minicurso: Minicurso; onOpenModal: (modalNum: number) => void; };
const CardMinicurso: React.FC<CardMinicursoProps> = ({ minicurso, onOpenModal }) => {

    const handleClick = () => {
        onOpenModal(minicurso.index);
    };

    return (
        <div className="col-span-1" onClick={handleClick}>
            <MinicourseCard>
                <MinicourseCardHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-row flex-wrap gap-2">
                            {minicurso.tags?.map((tag) => (
                                <div className="flex gap-1" key={tag.index}>
                                    <Tag className={`flex gap-1 px-2 ${tag.color}`}>
                                        <LogoPicker label={tag.name} />
                                        {tag.name}
                                    </Tag>
                                </div>
                            ))}
                        </div>
                        {/*<HiCursorClick />*/}
                        <p className="text-sm font-mono">{minicurso.localizacao}</p>
                    </div>
                </MinicourseCardHeader>
                <MinicourseCardImage src={minicurso.picture} alt={minicurso.title} />
                <MinicourseCardTitle>
                    {minicurso.title}
                </MinicourseCardTitle>
                <MinicourseCardSubtitle>
                    {minicurso.alternateTitle}
                </MinicourseCardSubtitle>
            </MinicourseCard>
        </div>
    );
};

interface LogoPickerProps { label: string; };
const LogoPicker: React.FC<LogoPickerProps> = ({ label }) => {
    switch (label) {
        case "front-end":
            return (
                <div className="pt-[0.5px]">
                    <FrontEndIcon size={19} />
                </div>
            );
        case "web":
            return (
                <div className="pt-[0.4px]">
                    <WebIcon size={19} />
                </div>
            );
        case "iniciante":
            return (
                <div className="pt-[0.4px]">
                    <InicianteIcon size={19} />
                </div>
            );
        case "exatas":
            return (
                <div className="pt-[0.3px]">
                    <MathIcon size={19} />
                </div>
            );
        case "linguagem":
            return (
                <div className="pt-[0.4px]">
                    <LanguageIcon size={19} />
                </div>
            );
        case "framework":
            return (
                <div className="pt-[0.5px]">
                    <FrameworkIcon size={18} />
                </div>
            );
        case "mobile":
            return (
                <div className="pt-[0.3px]">
                    <MobileIcon size={19} />
                </div>
            );
        case "back-end":
            return (
                <div className="pt-[0.3px]">
                    <BackendIcon size={19} />
                </div>
            );
        case "ferrementa":
            return (
                <div className="pt-[0.3px]">
                    <ToolIcon size={19} />
                </div>
            );
        case "jogos":
            return (
                <div className="pt-[0.4px] pr-[0.5px]">
                    <GameIcon size={19} />
                </div>
            );
        case "sistemas operacionais":
            return (
                <div className="pt-[0.3px]">
                    <OSIcon size={19} />
                </div>
            );
        case "automação":
            return (
                <div className="pt-[0.3px]">
                    <AutomationIcon size={19} />
                </div>
            );
        case "robótica":
            return (
                <div className="pt-[0.3px]">
                    <RobotIcon size={19} />
                </div>
            );
        case "análise de dados":
            return (
                <div className="pt-[0.4px]">
                    <MathIcon size={19} />
                </div>
            );
        default:
            return null;
    }
};
