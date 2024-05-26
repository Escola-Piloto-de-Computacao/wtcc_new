import React from 'react';
import { Minicurso, Palestrante, Palestra, Faq, Atividade, Imagem, Patrocinador, Commands } from '@/lib/definitions';

const minicursos: Minicurso[] = [
    {
        index: 0,
        title: "Desenvolvimento Web: HTML, CSS e JavaScript",
        alternateTitle: "Aprendendo HTML, CSS e JavaScript do básico e além",
        picture: "/imagens-minicursos/htmlcssjavascript2.jpg",
        alternatePicture: "/imagens-minicursos/htmlcssjavascript.png",
        date: "05/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "front-end",
                color: "bg-indigo-300",
                index: 1
            },
            {
                name: "web",
                color: "bg-blue-300",
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
                picture: "/imagens-minicursos/arthurFelipe.jpeg"
            },
            {
                name: "Wender Enzo de Oliveira",
                bio: "Desenvolvedor web full stack, proativo e apaixonado por criar soluções inovadoras para desafios técnicos. Minha vasta experiência com React, Angular, Next.js, TypeScript, Python, Tailwind CSS, componentes estilizados, PostgreSQL, JavaScript, MySQL e Java me permitem resolver uma ampla gama de problemas projetos com habilidade e eficiência. Além disso, sou um defensor entusiasta do Next.js, que me permite construir aplicativos de página única (SPA) com ótimo desempenho e SEO aprimorado.",
                social: {
                    instagram: "https://www.instagram.com/wenderenzo/",
                    email: "wenderenzo2014@outlook.com"
                },
                picture: "/imagens-minicursos/wenderEnzo.jpeg"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 1,
        title: "Pré-Cálculo Computacional",
        alternateTitle: "Fundamentos de Exatas na Computação",
        picture: "/imagens-minicursos/pre-calc.jpg",
        alternatePicture: "/imagens-minicursos/pre-calc2.jpg",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "exatas",
                color: "bg-cyan-300",
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
                picture: "/imagens-minicursos/pauloHenrique.jpg"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 2,
        title: "Desenvolvimento Mobile com Flutter",
        alternateTitle: "Desenvolvimento para dispositivos móveis",
        picture: "/imagens-minicursos/flutter.png",
        alternatePicture: "/imagens-minicursos/flutter2.jpg",
        date: "05/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "framework",
                color: "bg-pink-300",
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
        localizacao: "Lab x"
    },
    {
        index: 3,
        title: "GameMaker Studio - Aprenda sobre a melhor engine de jogos 2D do mercado",
        alternateTitle: "Desenvolvimento de jogos com o motor gráfico GameMaker Studio",
        picture: "/imagens-minicursos/gamemaker.jpg",
        alternatePicture: "/imagens-minicursos/gamemaker2.jpg",
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
                },
                picture: "https://avatars.githubusercontent.com/u/88327585?v=4"
            },
            {
                name: "Luiz Ryan Borges da Costa",
                bio: "“Acho muito deselegante falar sobre si mesmo” – Hélcio Wagner",
                social: {
                    github: "https://github.com/lryanborges",
                    instagram: "https://www.instagram.com/ryxnlock"
                },
                picture: "/imagens-minicursos/luisRyan.png"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 4,
        title: "Introdução ao Linux",
        alternateTitle: "Sistemas Operacionais baseados em Linux",
        picture: "/imagens-minicursos/linux.jpg",
        alternatePicture: "/imagens-minicursos/linux2.jpg",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "sistemas operacionais",
                color: "bg-rose-400",
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
                },
                picture: "/imagens-minicursos/thiagoHenrique.jpeg"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 5,
        title: "Introdução ao PHP com Laravel MVC",
        alternateTitle: "PHP com Laravel MVC e suas vantagens",
        picture: "/imagens-minicursos/laravel.jpg",
        alternatePicture: "/imagens-minicursos/laravel2.jpg",
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
                color: "bg-orange-300",
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
                },
                picture: "/imagens-minicursos/lucasPadilha.png"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 6,
        title: "Introdução a automação em Python com PyAutoGUI",
        alternateTitle: "Automação em Python",
        picture: "/imagens-minicursos/pyautogui.png",
        alternatePicture: "/imagens-minicursos/pyautogui2.jpg",
        date: "05/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "automação",
                color: "bg-emerald-300",
                index: 1
            }
        ],
        prerequesites: [
            "Noções básicas de lógica de programação"
        ],
        description: "Uma apresentação das principais funcionalidades da PyautoGUI, uma biblioteca de automação em Python capaz de procurar imagens, controlar inputs do mouse e teclado.",
        palestrantes: [
            {
                name: "Vinícius Gabriel Lima de Oliveira",
                bio: "Estudante de Ciência da Computação do 5º período",
                social: {
                    github: "https://github.com/FolkBlues7"
                },
                picture: "/imagens-minicursos/viniciusGabriel.jpg"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 7,
        title: "Introdução a robótica com Lego EV3",
        alternateTitle: "Conceitos iniciais de robótica e programação com Lego EV3 Scratch.",
        picture: "/imagens-minicursos/lego.png",
        alternatePicture: "/imagens-minicursos/lego2.png",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "robótica",
                color: "bg-lime-300",
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
                },
                picture: "/imagens-minicursos/joaoLucas.jpeg"
            },
            {
                name: "Sarah Heloysa Oliveira Tomaz",
                bio: "Prof. Robótica e Maker, integrando IA e práticas de machine learning em seu ensino.",
                social: {
                    github: "https://github.com/SarahTomaz",
                    linkedin: "https://www.linkedin.com/in/sarah-tomaz-3627952ab/",
                    instagram: "https://www.instagram.com/sarah.stho/"
                },
                picture: "/imagens-minicursos/sarahHeloysa.jpeg"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 8,
        title: "Introdução a Linguagem R",
        alternateTitle: "Análise de dados com R",
        picture: "/imagens-minicursos/r.png",
        alternatePicture: "/imagens-minicursos/r2.jpg",
        date: "05/06",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "análise de dados",
                color: "bg-fuchsia-300",
                index: 1
            }
        ],
        prerequesites: [
            "Conhecimento básico em programação (não obrigatório)",
            "Conhecimento básico em estatística (não obrigatório)"
        ],
        description: "O Minicurso de Introdução à Linguagem R é uma oportunidade empolgante de mergulhar no mundo da análise de dados e estatísticas usando uma das linguagens de programação mais poderosas e populares para ciência de dados.Este curso introdutório foi projetado para atender tanto a iniciantes quanto a pessoas com alguma experiência em programação. Durante o minicurso, os participantes irão aprender os fundamentos da linguagem R, incluindo estruturas de dados, operações básicas, manipulação de dados e visualização. Além disso, serão introduzidos aos pacotes e bibliotecas mais úteis para análise de dados, como o ggplot2 para visualização e o dplyr para manipulação de dados.",
        palestrantes: [
            {
                name: "Joas Gabriel Barros de Sousa",
                bio: "Aluno do 3º período de Ciência da Computação",
                social: {
                    github: "https://github.com/joas-barros"
                },
                picture: "/imagens-minicursos/joasGabriel.jpg"
            },
            {
                name: "Lucas Silva de Souza",
                bio: "Aluno do 3º período de Ciência da Computação",
                social: {
                    github: "https://github.com/Lucassilv7"
                },
                picture: "/imagens-minicursos/lucasSilva.png"
            }
        ],
        localizacao: "Lab x"
    },
    {
        index: 9,
        title: "Introdução a React e TailwindCSS",
        alternateTitle: "Desenvolvimento de interfaces web com React em typescript com TailwindCSS",
        picture: "/imagens-minicursos/react.jpg",
        alternatePicture: "/imagens-minicursos/react2.jpg",
        date: "06/06",
        tags: [
            {
                name: "framework",
                color: "bg-pink-300",
                index: 0
            },
            {
                name: "front-end",
                color: "bg-indigo-300",
                index: 1
            },
            {
                name: "web",
                color: "bg-blue-300",
                index: 2
            }
        ],
        description: "O minicurso de introdução ao React e TailwindCSS tem como objetivo apresentar os conceitos básicos de desenvolvimento de interfaces web com React em typescript e TailwindCSS. Serão abordados conceitos como componentização, estado, propriedades, hooks, estilização com TailwindCSS e consumo de APIs.",
        prerequesites: [
            "Conhecimento básico em programação",
            "Conhecimento básico em HTML e CSS",
            "Conhecimento básico em JavaScript (não obrigatório)"
        ],
        palestrantes: [
            {
                name: "Pedro Figueira Bôa-Viagem",
                bio: "Estudante de Ciência da Computação e desenvolvedor front-end.",
                social: {
                    github: "https://github.com/PepeuFBV"
                },
                picture: "/imagens-minicursos/pedroFigueira.png"
            }
        ],
        localizacao: "Lab x"
    }
];

const palestranteSelecionado: Palestrante = {
    name: "Mikéas Azevedo",
    bio: "Egresso do curso de Ciência da Computação da UFERSA, atualmente Software Engineer no iFood, com experiência em empresas como Mercado Livre e Invillia.",
    social: {
        github: "test"
    },
    picture: ""
};

const palestra: Palestra = {
    name: "Perspectiva sobre o futuro do mercado de trabalho",
    description: "Mikéias Azevedo, formado em Ciência da Computação pela UFERSA, é atualmente Software Engineer no iFood. Em sua apresentação, compartilhará de forma pessoal sua trajetória acadêmica e profissional, destacando os desafios e conquistas que marcaram sua carreira.",
    descriptionCont: "Ele discutirá as competências essenciais para se destacar no competitivo mercado de tecnologia e oferecerá dicas práticas e valiosas para estudantes e profissionais que estão iniciando suas jornadas.",
    speaker: palestranteSelecionado,
    img: "/palestra/mikeas.png"
};

const FAQuestions: Faq = {
    questions: [
        {
            key: 1,
            question: "Os minicursos oferecidos cobram algum valor de inscrição?",
            answer: "Não! Todos os mini-cursos são oferecidos gratuitamente por parte dos alunos e professores, basta apenas se inscrever para participar!"
        },
        {
            key: 2,
            question: "Apenas os alunos de Computação podem se inscrever nos minicursos?",
            answer: "Não, todos minicursos são abertos para inscrições de alunos de qualquer curso."
        },
        {
            key: 3,
            question: "É necessário algum tipo de conhecimento prévio para participar?",
            answer: "Dependerá do minicurso, a maioria não requer conhecimento conhecimento prévio na área. Veja os pré-requesitos do minicurso na aba de MINICURSOS em Eventos!"
        },
        {
            key: 4,
            question: "No período do evento haverá aulas para os alunos de Computação?",
            answer: "Não, as aulas que ocorrerem nos horários do evento serão suspensas para que todos possam participar dos mini-cursos."
        },
        {
            key: 5,
            question: 'Onde fica o LCC - Laboratório de Ciência da Computação?',
            answer: 'O LCC está localizado no leste da UFERSA, próximo ao Expocenter.'
        },
        {
            key: 6,
            question: 'Em qual local será sediado a abertura do evento?',
            answer: 'A abertura será localizada no Auditório da PROEC.'
        },
        {
            key: 7,
            question: "Eu ganho horas complementares participando do evento?",
            answer: "Com certeza, após a realização da inscricão e participação no evento, suas horas serão contabilizadas no sistema. É possível também ganhar horas extras assistindo os minicursos!"
        }
    ]
};

const cronograma: Atividade[] = [
    {
        index: 0,
        dia: 1,
        hora: "08:00 - 10:00",
        titulo: "Abertura Oficial do evento",
        descricao: "Abertura do evento com a equipe organizadora academica e a diretoria do curso de Ciência da Computação. Assim como laçamento do tema do Hackathon.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 1,
        dia: 1,
        hora: "10:00 - 10:30",
        titulo: "Coffee Break",
        descricao: "",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 2,
        dia: 1,
        hora: "10:30 - 12:00",
        titulo: "Mostra Científica",
        descricao: "Apresentação de trabalhos científicos realizados por alunos do curso de Ciência da Computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 3,
        dia: 1,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "Laboratórios do LCC"
    },
    {
        index: 4,
        dia: 2,
        hora: "08:00 - 09:30",
        titulo: "Palestra",
        descricao: "Palestra com um convidado especial sobre o mercado de trabalho e a importância da Computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 5,
        dia: 2,
        hora: "09:30 - 10:00",
        titulo: "Coffee Break",
        descricao: "",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 6,
        dia: 2,
        hora: "10:00 - 11:30",
        titulo: "Mesa Redonda",
        descricao: "Mesa redonda com professores e alunos da área de Computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 7,
        dia: 2,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "Laboratórios do LCC"
    },
    {
        index: 8,
        dia: 3,
        hora: "08:00 - 11:00",
        titulo: "Maratona de Programação",
        descricao: "Competição de programação com alunos do curso de Ciência da Computação.",
        localizacao: "Laboratórios do LCC"
    },
    {
        index: 9,
        dia: 3,
        hora: "08:00 - 11:00",
        titulo: "Hackathon",
        descricao: "Competição de programação com alunos do curso de Ciência da Computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 10,
        dia: 3,
        hora: "11:00 - 12:00",
        titulo: "Encerramento do evento",
        descricao: "Encerramento do evento com a equipe organizadora academica e a diretoria do curso de Ciência da Computação.",
        localizacao: "Auditório da PROEC"
    }
];

const imagens: Imagem[] = [
    {
        index: 0,
        src: "/imagens-galeria/1.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 1,
        src: "/imagens-galeria/2.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 2,
        src: "/imagens-galeria/3.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 3,
        src: "/imagens-galeria/4.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 4,
        src: "/imagens-galeria/5.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 5,
        src: "/imagens-galeria/6.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 6,
        src: "/imagens-galeria/7.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 7,
        src: "/imagens-galeria/8.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 8,
        src: "/imagens-galeria/9.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 9,
        src: "/imagens-galeria/10.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 10,
        src: "/imagens-galeria/11.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 11,
        src: "/imagens-galeria/12.jpeg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 12,
        src: "/imagens-galeria/19.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 13,
        src: "/imagens-galeria/35.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 14,
        src: "/imagens-galeria/36.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 15,
        src: "/imagens-galeria/38.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 16,
        src: "/imagens-galeria/39.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 17,
        src: "/imagens-galeria/40.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 18,
        src: "/imagens-galeria/41.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 19,
        src: "/imagens-galeria/42.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    }
];

const patrocinadores: Patrocinador[] = [
    {
        index: 0,
        nome: "CCEN",
        alt: "Centro de Ciências Exatas e da Natureza",
        imagem: "/imagens-patrocinadores/ccen.png",
        link: "https://ccen.ufersa.edu.br/"

    },
    {
        index: 1,
        nome: "PROEC",
        alt: "Pró-Reitoria de Extensão e Cultura",
        imagem: "/imagens-patrocinadores/proec.png",
        link: "https://proec.ufersa.edu.br/"
    },
    {
        index: 2,
        nome: "UFERSA",
        alt: "Universidade Federal Rural do Semi-Árido",
        imagem: "/imagens-patrocinadores/ufersa.png",
        link: "https://ufersa.edu.br/"
    },
    {
        index: 3,
        nome: "PROGRAD",
        alt: "Pró-Reitoria de Graduação",
        imagem: "/imagens-patrocinadores/prograd.png",
        link: "https://prograd.ufersa.edu.br/"
    },
    {
        index: 4,
        nome: "Computação Licenciatura",
        alt: "Licenciatura Curso de Computação",
        imagem: "/imagens-patrocinadores/compLicen.png",
        link: "https://computacao.ufersa.edu.br/"
    }
];

const maratonaTerminalCommands: Commands = {
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args: string[]) => args.join(' ')
    },
    ls: {
        description: 'List files in the current directory.',
        fn: () => 'file1 file2 file3'
    },
    cd: {
        description: 'Change directory.',
        usage: 'cd <directory>',
        fn: (directory: string) => `Changed directory to ${directory}`
    },
};

export { maratonaTerminalCommands, minicursos, palestra, FAQuestions, cronograma, imagens, patrocinadores }