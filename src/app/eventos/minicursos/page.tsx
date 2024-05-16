"use client";

import React, { useState } from 'react';
import { MinicourseCard, MinicourseCardSubtitle, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardImage } from '@/components/ui/minicourse-card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { HiCursorClick } from "react-icons/hi";
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

export default function Minicursos() {
    const [selectedButton, setSelectedButton] = useState("todos");

    function handleSelectedButtonChange(button: string) {
        setSelectedButton(button);
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="col-span-1 flex flex-col place-self-center gap-3">
                <div className="text-center">
                    <h2 className="text-2xl">/minicursos</h2>
                    <p className="text-sm">13:30</p>
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
            </div>
            <div className="grid grid-cols-3 mx-20 gap-8">
                {minicursos.map((minicurso) => {

                    const [modalOpen, setModalOpen] = useState(false);
                    const handleModalOpen = () => {
                        setModalOpen(true);
                    }

                    if (selectedButton === minicurso.date || selectedButton === "todos") {
                        return (
                            <>
                                <CardMinicurso key={minicurso.index} minicurso={minicurso} onOpenModal={handleModalOpen} />
                                <Modal
                                    //title={minicurso.alternateTitle}
                                    centered
                                    open={modalOpen}
                                    footer={null}
                                    onCancel={() => setModalOpen(false)}
                                    width={930}
                                >
                                    <div className="text-left text-base text-gray-600 italic">
                                        {minicurso.alternateTitle}
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

interface CardMinicursoProps { minicurso: Minicurso; onOpenModal: () => void; };
const CardMinicurso: React.FC<CardMinicursoProps> = ({ minicurso, onOpenModal }) => {

    const handleClick = () => {
        onOpenModal();
    };

    return (
        <div className="col-span-1" onClick={handleClick}>
            <MinicourseCard>
                <MinicourseCardHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-5">
                            {minicurso.tags?.map((tag) => (
                                <div className="flex gap-1" key={tag.index}>
                                    <Tag className={`flex gap-1 px-2 ${tag.color}`}>
                                        <LogoPicker label={tag.name} />
                                        {tag.name}
                                    </Tag>
                                </div>
                            ))}
                        </div>
                        <HiCursorClick />
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
                <div className="pt-[0.3px]">
                    <FrontEndIcon size={20} />
                </div>
            );
        case "web":
            return (
                <div className="pt-[0.3px]">
                    <WebIcon size={20} />
                </div>
            );
        case "iniciante":
            return (
                <div className="pt-[0.3px]">
                    <InicianteIcon size={20} />
                </div>
            );
        case "exatas":
            return (
                <div className="pt-[0.3px]">
                    <MathIcon size={20} />
                </div>
            );
        case "linguagem":
            return (
                <div className="pt-[0.3px]">
                    <LanguageIcon size={20} />
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
                    <MobileIcon size={20} />
                </div>
            );
        case "back-end":
            return (
                <div className="pt-[0.3px]">
                    <BackendIcon size={20} />
                </div>
            );
        case "ferrementa":
            return (
                <div className="pt-[0.3px]">
                    <ToolIcon size={20} />
                </div>
            );
        case "jogos":
            return (
                <div className="pt-[0.3px] pr-[0.5px]">
                    <GameIcon size={20} />
                </div>
            );
        case "sistemas operacionais":
            return (
                <div className="pt-[0.3px]">
                    <OSIcon size={20} />
                </div>
            );
        case "automação":
            return (
                <div className="pt-[0.3px]">
                    <AutomationIcon size={20} />
                </div>
            );
        case "robótica":
            return (
                <div className="pt-[0.3px]">
                    <RobotIcon size={20} />
                </div>
            );
        case "análise de dados":
            return (
                <div className="pt-[0.3px]">
                    <MathIcon size={20} />
                </div>
            );
        default:
            return null;
    }
};