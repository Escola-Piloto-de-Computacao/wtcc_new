"use client";

import { useState } from "react";
import { cronograma } from "@/lib/data";
import ScheduleCard from "@/components/core/Schedule/ScheduleCard";
import { Button } from "@/components/ui/button";

export default function Cronograma() {

    const [currentDay, setCurrentDay] = useState(1);

    function handleDayChange(day: number) {
        setCurrentDay(day);
    }

    return (
        <section className="h-[81vh] flex flex-col gap-3">
            <div className="text-center">
                <h1 className="text-4xl">Cronograma</h1>
                <h2 className="font-light">Descubra onde e quando estar</h2>
            </div>
            <div className="flex flex-col gap-16">
                <Datas handleDayChange={handleDayChange} currentDay={currentDay} />
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