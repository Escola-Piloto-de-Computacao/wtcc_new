"use client";

import React, { useState } from 'react';
import { MinicourseCard, MinicourseCardSubtitle, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardImage } from '@/components/ui/minicourse-card';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { HiCursorClick } from "react-icons/hi";
import { FrontEndLogo, InicianteLogo, WebLogo } from "@/components/ui/logos";

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
        date: "05/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "linguagem",
                color: "bg-red-300",
                index: 1
            },
            {
                name: "front-end",
                color: "bg-green-300",
                index: 2
            },
            {
                name: "web",
                color: "bg-blue-300",
                index: 3
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
        title: "Pré-Cálculo Computacional",
        alternateTitle: "Fundamentos de Exatas na Computação",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "exatas",
                color: "bg-red-300",
                index: 1
            }
        ],
        description: "No minicurso será feita uma revisão e um aprofundamento, a partir de uma abordagem computacional, dos tópicos essenciais para o estudo do Cálculo. Dessa forma, os participantes podem se preparar e contextualizar seus conhecimento para as disciplinas introdutórias de exatas na computação.",
        palestrantes: [
            {
                name: "Paulo Henrique Almeida de Andrade",
                bio: "Estudante de computação que adora fazer códigos, cálculos e aviões.",
                social: {
                    github: "https://github.com/andrade-paulo/",
                    linkedin: "https://www.linkedin.com/in/andrade-paulo/",
                    instagram: "https://www.instagram.com/h.oluap/"
                },
                picture: "https://avatars.githubusercontent.com/u/50432692?v=4"
            }
        ],
    },
    {
        index: 2,
        title: "Desenvolvimento Mobile com Flutter",
        alternateTitle: "Desenvolvimento para dispositivos móveis",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "05/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "framework",
                color: "bg-blue-300",
                index: 1
            },
            {
                name: "mobile",
                color: "bg-purple-300",
                index: 2
            }
        ],
        description: "Neste minicurso, os participantes aprenderão a desenvolver aplicativos móveis com Flutter, um framework multiplataforma de código aberto criado pelo Google. O Flutter permite o desenvolvimento de aplicativos para Android e iOS a partir de um único código base, facilitando a criação de interfaces de usuário bonitas e responsivas.",
        prerequesites: [
            "Programação Orientada a Objetos"
        ],
        palestrantes: [
            {
                name: "Níckolas Emanuel de Oliveira",
                bio: "Aluno do 6° Período de Ciência da Computação – Desenvolvedor Front-end Mobile",
                social: {
                    github: "https://github.com/nickolas-silva",
                    instagram: "https://www.instagram.com/nickolas_emanuel_/"
                }
            },
            {
                name: "Lucas Vinícius Fernandes da Silva",
                bio: "Aluno do 6° Período de Ciência da Computação – Desenvolvedor Front-end e Back-end com Node",
                social: {
                    github: "https://github.com/lucassf2k",
                    instagram: "https://www.instagram.com/lucassf2k/"
                }
            }
        ],
    },
    {
        index: 3,
        title: "GameMaker Studio - Aprenda sobre a melhor engine de jogos 2D do mercado",
        alternateTitle: "Desenvolvimento de jogos com o motor gráfico GameMaker Studio",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "05/06",
        tags: [
            {
                name: "ferrementa",
                color: "bg-red-300",
                index: 0
            },
            {
                name: "jogos",
                color: "bg-purple-300",
                index: 1
            }
        ],
        description: "Você verá as bases de como criar jogos 2D na maior engine para tal, nela já foram criados muitos jogos conhecidos, como Undertale, Katana Zero, Hotline Miami, e muitos outros. Aqui você irá entender as principais funcionalidades da engine e faremos juntos um protótipo de um jogo no estilo plataforma.",
        prerequesites: [
            "Conhecimento básico em programação"
        ],
        palestrantes: [
            {
                name: "Vinícius Dantas de Sousa",
                bio: "Aspirante a game dev com experiência em alguns projetos.",
                social: {
                    github: "https://github.com/vinicius-dantasso"
                }
            },
            {
                name: "Luiz Ryan Borges da Costa",
                bio: "“Acho muito deselegante falar sobre si mesmo” – Hélcio Wagner",
                social: {
                    github: "https://github.com/lryanborges",
                    instagram: "https://www.instagram.com/ryxnlock"
                }
            }
        ]
    },
    {
        index: 4,
        title: "Introdução ao Linux",
        alternateTitle: "Sistemas Operacionais baseados em Linux",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "sistemas operacionais",
                color: "bg-red-300",
                index: 1
            }
        ],
        description: "O presente curso visa, ensinar os componentes básicos de um sistema operacional, como processos e memória, além de focar em como sistemas linux operam sobre esses recursos de hardware e gerenciam recursos lógicos, como arquivos, diretórios, programas/processos. O curso também apresenta boas práticas ,gerais e de segurança, introduz a configuração de servidores e demonstra a importância dos SO’s.",
        palestrantes: [
            {
                name: "Thiago Henrique Fonseca Pereira",
                bio: "Graduando do sétimo período, desenvolvedor fullstack e entusiasta de tecnologia. Inimigo número 1 do windows.",
                social: {
                    github: "https://github.com/thiagohenriquefp",
                    linkedin: "https://linkedin.com/in/thiagohfpereira",
                }
            }
        ]
    },
    {
        index: 5,
        title: "Introdução ao PHP com Laravel MVC",
        alternateTitle: "PHP com Laravel MVC e suas vantagens",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "06/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "framework",
                color: "bg-blue-300",
                index: 1
            },
            {
                name: "back-end",
                color: "bg-yellow-300",
                index: 2
            }
        ],
        prerequesites: [
            "Conhecimento básico em programação"
        ],
        description: "Laravel é um framework desenvolvido para facilitar a escrita de aplicações e web services em PHP. Com foco na simplicidade e legibilidade do código, esse framework disponibiliza interfaces de fácil utilização para os principais componentes que implementam tarefas comuns à maioria dos back-ends, abstraindo a complexidade necessária para a criação de sistemas de rotas, autenticação de usuários, cache, persistência de dados. Neste Mini-curso lhe será apresentado a linguagem PHP e ao framework Laravel para assim despertar o interesse no tema.",
        palestrantes: [
            {
                name: "Lucas Henrique Martins Padilha",
                bio: "Técnico em informática pelo IFPB, atualmente estudante de Ciência da computação na UFERSA, com experiência em C# ASP.NET MVC",
                social: {
                    instagram: "https://www.instagram.com/lucaspadilha06"
                }
            }
        ]
    },
    {
        index: 6,
        title: "Introdução a automação em Python com PyAutoGUI",
        alternateTitle: "Automação em Python",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "05/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "automação",
                color: "bg-yellow-300",
                index: 1
            }
        ],
        prerequesites: [
            "Lógica de programação básica"
        ],
        description: "Uma apresentação das principais funcionalidades da PyautoGUI, uma biblioteca de automação em Python capaz de procurar imagens, controlar inputs do mouse e teclado.",
        palestrantes: [
            {
                name: "Vinícius Gabriel Lima de Oliveira",
                bio: "Estudante de Ciência da Computação do 5º período",
                social: {
                    github: "https://github.com/FolkBlues7"
                }
            }
        ]
    },
    {
        index: 7,
        title: "Introdução a robótica com Lego EV3",
        alternateTitle: "Conceitos iniciais de robótica e programação com Lego EV3 Scratch.",
        picture: "https://avatars.githubusercontent.com/u/50432692?v=4",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "robótica",
                color: "bg-red-300",
                index: 1
            }
        ],
        prerequesites: [
            "Noções básicas de programação (não obrigatório)",
            "Noções básicas de lógica (não obrigatório)"
        ],
        description: "O objetivo do minicurso é oferecer uma base teórica simples sobre robótica, ao mesmo tempo que se oferecem desafios práticos de montagem e programação utilizando o kit de robótica educacional Lego Mindstorms EV3. Ao final do minicurso, o ouvinte aprenderá a usar o software de programação EV3 Classroom, assim como desenvolverá noções de montagem e lógica de programação.",
        palestrantes: [
            {
                name: "João Lucas Galdino Duarte",
                bio: "Sênior Lego Scratch",
                social: {
                    github: "https://github.com/G4ldin0",
                    instagram: "https://www.instagram.com/g4ld1n0_/",
                    linkedin: "www.linkedin.com/in/joão-lucas-0421481b0"
                }
            },
            {
                name: "Sarah Heloysa Oliveira Tomaz",
                bio: "Prof. Robótica e Maker, integrando IA e práticas de machine learning em seu ensino.",
                social: {
                    github: "https://github.com/SarahTomaz",
                    linkedin: "https://www.linkedin.com/in/sarah-tomaz-3627952ab/",
                    instagram: "https://www.instagram.com/sarah.stho/"
                }
            }
        ]
    }
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
                        onClick={() => { handleSelectedButtonChange("05/06") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "05/06" ? "bg-gray-200" : ""}`}>
                        30/05
                    </Button>
                    <Button
                        onClick={() => { handleSelectedButtonChange("06/06") }}
                        variant="ghost"
                        className={`text-lg ${selectedButton === "06/06" ? "bg-gray-200" : ""}`}>
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
};

interface CardMinicursoProps { minicurso: Minicurso; };
const CardMinicurso: React.FC<CardMinicursoProps> = ({ minicurso }) => {
    return (
        <div className="col-span-1">
            <MinicourseCard>
                <MinicourseCardHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-5">
                            {minicurso.tags?.map((tag) => (
                                <div
                                    className="flex gap-1"
                                    key={tag.index}
                                >
                                    <Tag
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
            <div className="pt-[0.3px]">
                <FrontEndLogo size={20} />
            </div>
        );
    } else if (label === "web") {
        return (
            <div className="pt-[0.3px]">
                <WebLogo size={20} />
            </div>
        );
    } else if (label === "iniciante") {
        return (
            <div className="pt-[0.3px]">
                <InicianteLogo size={20} />
            </div>
        );
    };
    return null;
}