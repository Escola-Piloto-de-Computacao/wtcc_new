"use client";

import React, { useState } from 'react';
import { MinicourseCard, MinicourseCardSubtitle, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardImage } from '@/components/ui/minicourse-card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { HiCursorClick } from "react-icons/hi";
import { FrontEndLogo } from "@/components/ui/logos";

type Minicurso = {
    index: number;
    title: string;
    alternateTitle: string;
    picture: string;
    date: string;
    tags?: {
        name: string;
        color: string;
        index: number;
    }[];
    description: string;
    prerequesites?: string[];
    palestrantes: Palestrante[];
};

type Palestrante = {
    name: string;
    bio: string;
    social?: {
        github?: string;
        instagram?: string;
        email?: string;
        linkedin?: string;
    };
    picture?: string;
};

const minicursos: Minicurso[] = [
    {
        index: 0,
        title: "Desenvolvimento Web: HTML, CSS e JavaScript",
        alternateTitle: "Aprendendo HTML, CSS e JavaScript do básico e além",
        picture: " @/public/frontend.jpg",
        date: "30/05",
        tags: [
            {
                name: "web",
                color: "bg-blue-300",
                index: 0
            },
            {
                name: "front-end",
                color: "bg-green-300",
                index: 1
            },
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 2
            }
        ],
        description: "Este curso tem como objetivo fornecer uma compreensão abrangente das linguagens fundamentais da web: HTML (HyperText Markup Language), CSS (Cascading Style Sheets) e JavaScript. Os participantes aprenderão a criar páginas web dinâmicas e responsivas, utilizando boas práticas de programação.",
        palestrantes: [
            {
                name: "Arthur Felipe Araujo",
                bio: "Desenvolvedor web fullstack apaixonado por criar interfaces incríveis. Sendo o front-end minha especialidade, tenho uma experiência sólida em desenvolvimento de software.",
                social: {
                    instagram: "https://www.instagram.com/artie.arauj0/",
                    email: "arthurfellype21@gmail.com",
                },
                picture: "https://avatars.githubusercontent.com/u/50432692?v=4"
            },
            {
                name: "Wender Enzo de Oliveira",
                bio: "Desenvolvedor web full stack, proativo e apaixonado por criar soluções inovadoras para desafios técnicos. Minha vasta experiência com React, Angular, Next.js, TypeScript, Python, Tailwind CSS, componentes estilizados, PostgreSQL, JavaScript, MySQL e Java me permitem resolver uma ampla gama de problemas projetos com habilidade e eficiência. Além disso, sou um defensor entusiasta do Next.js, que me permite construir aplicativos de página única(SPA) com ótimo desempenho e SEO aprimorado.",
                social: {
                    instagram: "https://www.instagram.com/wenderenzo/",
                    email: "wenderenzo2014@outlook.com"
                },
                picture: "https://avatars.githubusercontent.com/u/50432692?v=4"
            }
        ],
    },
    {
        index: 1,
        title: "Introdução ao Desenvolvimento de Jogos",
        alternateTitle: "Aprendendo a criar jogos do zero",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "30/05",
        tags: [
            {
                name: "Jogos",
                color: "bg-red-300",
                index: 0
            },
            {
                name: "Iniciante",
                color: "bg-yellow-300",
                index: 1
            }
        ],
        description: "Este curso tem como objetivo fornecer uma introdução ao desenvolvimento de jogos digitais. Os participantes aprenderão a criar um jogo simples utilizando a engine Unity, uma das mais populares e acessíveis do mercado.",
        palestrantes: [
            {
                name: "Gabriel de Oliveira",
                bio: "Desenvolvedor de jogos apaixonado por criar experiências interativas e envolventes. Tenho experiência com Unity, Unreal Engine, C#, C++, Java e Python.",
                social: {
                    instagram: "https://www.instagram.com/gabrieloliveira/",
                    email: "teste@gmail.com"
                },
                picture: "https://avatars.githubusercontent.com/u/50432692?v=4"
            }
        ],
    },
];

export default function Minicursos() {
    const [selectedButton, setSelectedButton] = useState("todos");

    function handleSelectedButtonChange(button: string) {
        setSelectedButton(button);
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="col-span-1 flex flex-col place-self-center gap-3">
                <div className="text-center">
                    <h2 className="text-xl">/minicursos</h2>
                    <p className="text-sm">13:30</p>
                </div>
                <div className="flex gap-10">
                    <Button
                        onClick={() => { handleSelectedButtonChange("30/05") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "30/05" ? "bg-gray-200" : ""}`}>
                        30/05
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("31/05") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "31/05" ? "bg-gray-200" : ""}`}>
                        31/05
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("todos") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "todos" ? "bg-gray-200" : ""}`}>
                        todos
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-3 mx-20 gap-16">
                {minicursos.map((minicurso) => {
                    if (selectedButton === minicurso.date || selectedButton === "todos") {
                        return (
                            <CardMinicurso
                                key={minicurso.index}
                                minicurso={minicurso}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

interface CardMinicursoProps {
    minicurso: Minicurso;
}

const CardMinicurso: React.FC<CardMinicursoProps> = ({ minicurso }) => {
    return (
        <div className="col-span-1">
            <MinicourseCard>
                <MinicourseCardHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-5">
                            {minicurso.tags?.map((tag) => (
                                <div className="flex gap-1">
                                    <Tag
                                        key={tag.index}
                                        className={`flex gap-1 px-2 ${tag.color}`}
                                    >
                                        <LogoPicker label={tag.name} />
                                        {tag.name}
                                    </Tag>
                                </div>
                            ))}
                        </div>
                        <HiCursorClick />
                    </div>
                </MinicourseCardHeader>
                <MinicourseCardImage>
                    <img src={minicurso.picture} alt="Foto do minicurso" />
                </MinicourseCardImage>
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
    if (label === "front-end") {
        return (
            <div className="pt-[0.5px]">
                <FrontEndLogo size={20} />
            </div>
        );
    } else if (label === "web") {
        return (
            null
        );
    };
    return null;
}