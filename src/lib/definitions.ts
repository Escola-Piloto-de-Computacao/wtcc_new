import React, { ReactNode } from "react";

export type Minicurso = {
    index: number;
    title: string;
    alternateTitle: string;
    picture: string;
    alternatePicture?: string;
    date: string;
    tags?: Tag[];
    description: string;
    prerequesites?: string[];
    palestrantes: Palestrante[];
    localizacao: string;
};

export type Palestrante = {
    name: string;
    bio: string;
    social?: SocialMedia;
    picture?: string;
};

export type SocialMedia = {
    github?: string;
    instagram?: string;
    email?: string;
    linkedin?: string;
};

export type Tag = {
    index: number;
    name: string;
    color: string;
};

export type Palestra = {
    name: string;
    description: string;
    descriptionCont?: string;
    speaker: Palestrante;
    img: string;
};

export type Question = {
    key: number;
    question: string;
    answer: string;
};

export type Faq = {
    questions: Question[];
};

export type Atividade = {
    index: number;
    dia: number;
    hora: string;
    titulo: string;
    descricao: string;
    localizacao: string;
    pageExists?: boolean;
    page?: string;
};

export type Imagem = {
    index: number;
    src: string;
    descricao: string;
    alt: string;
};

export type Patrocinador = {
    index: number;
    nome: string;
    alt: string;
    imagem: string;
    link?: string;
};

export type Commands = {
    [key: string]: {
        description: string;
        usage?: string;
        fn: (...args: string[]) => string;
    };
};

export type TerminalFile = {
    name: string;
    content: string;
    address: string;
};

export type Projeto = {
    index: number;
    title: string;
    description?: string;
    image?: string;
    icon?: ReactNode;
}