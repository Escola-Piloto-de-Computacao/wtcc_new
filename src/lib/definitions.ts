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
    social?: {
        github?: string;
        instagram?: string;
        email?: string;
        linkedin?: string;
    };
    picture?: string;
};