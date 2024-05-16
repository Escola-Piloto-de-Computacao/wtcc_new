export type Minicurso = {
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
    name: string;
    color: string;
    index: number;
};