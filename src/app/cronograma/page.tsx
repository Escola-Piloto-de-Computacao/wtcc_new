"use client";

import React, { useState, useEffect } from "react";
import { cronograma } from "@/lib/data";
import ScheduleCard from "@/components/core/Cronograma/ScheduleCard";
import { Button } from "@/components/ui/button";
import { BsInfoCircle } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";

export default function Cronograma() {

    const initialDay = localStorage.getItem('currentDay') ? Number(localStorage.getItem('currentDay')) : 1;
    const [currentDay, setCurrentDay] = useState(initialDay);

    useEffect(() => {
        localStorage.setItem('currentDay', currentDay.toString());
    }, [currentDay]);

    function handleDayChange(day: number) {
        setCurrentDay(day);
    };

    return (
        <section className="flex flex-col gap-3 mb-24">
            <div className="text-center">
                <h1 className="text-4xl">Cronograma</h1>
                <h2 className="font-light">Programação completa</h2>
            </div>
            <div className={`flex flex-col gap-16 ${currentDay === 2 ? "mb-24" : "lg:mb-48"}`}>
                <div className="flex flex-col gap-6">
                    <Datas handleDayChange={handleDayChange} currentDay={currentDay} />
                    <div className="md:hidden flex gap-1 justify-center">
                        <BsInfoCircle size={20} />
                        <p className="text-center text-sm">Clique nos eventos para mais informações!</p>
                        <div className="pt-[0.15rem]">
                            <HiCursorClick size={15} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    {cronograma.map((atividade) => {
                        if (atividade.dia === currentDay) {
                            return <ScheduleCard atividade={atividade} key={atividade.index} />;
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

interface DatasProps {
    handleDayChange: (day: number) => void;
    currentDay: number;
}
const Datas: React.FC<DatasProps> = ({ handleDayChange, currentDay }) => {
    return (
        <ul className="flex gap-5 justify-center">
            <li>
                <Button
                    onClick={() => handleDayChange(1)}
                    variant="ghost"
                    className={`text-lg ${currentDay === 1 ? "bg-gray-200" : ""}`}>
                    05/06
                </Button>
            </li>
            <li>
                <Button
                    onClick={() => handleDayChange(2)}
                    variant="ghost"
                    className={`text-lg ${currentDay === 2 ? "bg-gray-200" : ""}`}>
                    06/06
                </Button>
            </li>
            <li>
                <Button
                    onClick={() => handleDayChange(3)}
                    variant="ghost"
                    className={`text-lg ${currentDay === 3 ? "bg-gray-200" : ""}`}>
                    07/06
                </Button>
            </li>
        </ul>
    );
}