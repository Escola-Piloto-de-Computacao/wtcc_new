import { Minicurso, Palestrante, Palestra, Faq, Atividade, Imagem, Patrocinador, TerminalFile } from '@/lib/definitions';

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
                bio: "Desenvolvedor web fullstack apaixonado por criar interfaces incríveis. Sendo o front-end minha especialidade, tenho uma experiência sólida em desenvolvimento de software",
                social: {
                    instagram: "https://www.instagram.com/artie.arauj0/",
                    email: "arthurfellype21@gmail.com",
                },
                picture: "/imagens-minicursos/arthurFelipe.jpeg"
            },
            {
                name: "Wender Enzo de Oliveira",
                bio: "Desenvolvedor web full stack, proativo e apaixonado por criar soluções inovadoras para desafios técnicos. Minha vasta experiência com React, Angular, Next.js, TypeScript, Python, Tailwind CSS, componentes estilizados, PostgreSQL, JavaScript, MySQL e Java me permitem resolver uma ampla gama de problemas projetos com habilidade e eficiência. Além disso, sou um defensor entusiasta do Next.js, que me permite construir aplicativos de página única (SPA) com ótimo desempenho e SEO aprimorado",
                social: {
                    instagram: "https://www.instagram.com/wenderenzo/",
                    email: "wenderenzo2014@outlook.com"
                },
                picture: "/imagens-minicursos/wenderEnzo.jpeg"
            }
        ],
        localizacao: ""
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
                bio: "Estudante de computação que adora fazer códigos, cálculos e aviões",
                social: {
                    github: "https://github.com/andrade-paulo/",
                    linkedin: "https://www.linkedin.com/in/andrade-paulo/",
                    instagram: "https://www.instagram.com/h.oluap/"
                },
                picture: "/imagens-minicursos/pauloHenrique.jpg"
            }
        ],
        localizacao: ""
    },
    {
        index: 2,
        title: "Criação de Aplicativos com Flutter",
        alternateTitle: "Desenvolvimento de Aplicações Móveis e Responsivas com Flutter",
        picture: "/imagens-minicursos/flutter.png",
        alternatePicture: "/imagens-minicursos/flutter2.png",
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
        description: "O minicurso \"Desenvolvimento com Dart e Flutter\" é uma imersão completa nas tecnologias Dart e Flutter, essenciais para o desenvolvimento de aplicativos móveis modernos e responsivos. Em quatro horas de conteúdo dinâmico, os participantes serão guiados desde os fundamentos básicos de programação em Dart até técnicas avançadas de desenvolvimento de interfaces com Flutter. Com uma abordagem prática e teórica, os alunos aprenderão a criar aplicativos completos e eficientes, explorando widgets básicos e avançados, gerenciamento de estado, arquitetura do Flutter e melhores práticas de desenvolvimento. Ao final do curso, os participantes estarão aptos a desenvolverem suas próprias aplicações móveis de forma ágil e eficaz, utilizando todo o potencial oferecido por Dart e Flutter.",
        prerequesites: [
            "Conhecimento básico em programação",
            "Familiaridade com o ambiente de desenvolvimento Visual Studio Code",
            "Programação Orientada a Objetos (não obrigatório)"
        ],
        palestrantes: [
            {
                name: "Níckolas Emanuel de Oliveira",
                bio: "Aluno do 6° Período de Ciência da Computação – Desenvolvedor Front-end Mobile",
                social: {
                    github: "https://github.com/nickolas-silva",
                    instagram: "https://www.instagram.com/nickolas_emanuel_/"
                },
                picture: "/imagens-minicursos/nickolasEmanuel.png"
            },
            {
                name: "Lucas Vinícius Fernandes da Silva",
                bio: "Aluno do 6° Período de Ciência da Computação – Desenvolvedor Front-end e Back-end com Node",
                social: {
                    github: "https://github.com/lucassf2k",
                    instagram: "https://www.instagram.com/lucassf2k/"
                },
                picture: "/imagens-minicursos/lucasVinicius.png"
            },
            {
                name: "Nicholas Vinicius Araújo Pinheiro",
                bio: "Desenvolvedor de software com foco em soluções tecnológicas. Responsável pelo desenvolvimento mobile com Flutter na Dunnas",
                social: {
                    instagram: "https://www.instagram.com/nicholasvinicius_/"
                },
                picture: "/imagens-minicursos/nicholasVinicius.png"
            }
        ],
        localizacao: ""
    },
    {
        index: 3,
        title: "GameMaker Studio - Aprenda sobre a melhor engine de jogos 2D do mercado",
        alternateTitle: "Desenvolvimento de jogos com o motor gráfico GameMaker Studio",
        picture: "/imagens-minicursos/gamemaker.jpg",
        alternatePicture: "/imagens-minicursos/gamemaker2.jpg",
        date: "06/06",
        tags: [
            {
                name: "ferramenta",
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
                bio: "Aspirante a game dev com experiência em alguns projetos",
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
        localizacao: ""
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
                bio: "Graduando do sétimo período, desenvolvedor fullstack e entusiasta de tecnologia. Inimigo número 1 do windows",
                social: {
                    github: "https://github.com/thiagohenriquefp",
                    linkedin: "https://linkedin.com/in/thiagohfpereira",
                },
                picture: "/imagens-minicursos/thiagoHenrique.jpeg"
            }
        ],
        localizacao: ""
    },
    {
        index: 5,
        title: "Introdução ao Python com Pandas",
        alternateTitle: "Análise de Dados com Python e Pandas",
        picture: "/imagens-minicursos/pandas.png",
        alternatePicture: "/imagens-minicursos/pandas2.png",
        date: "06/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 1
            },
            {
                name: "análise de dados",
                color: "bg-fuchsia-300",
                index: 2
            }
        ],
        prerequesites: [
            "Conhecimento básico em programação"
        ],
        description: "Este minicurso tem como objetivo introduzir os participantes ao uso do Python para análise de dados utilizando a biblioteca Pandas. Os alunos aprenderão a manipular, processar e analisar conjuntos de dados reais, desenvolvendo habilidades práticas essenciais para qualquer cientista dados. Serão abordados conceitos fundamentais do Python, operações básicas e avançadas com Pandas, além de técnicas de visualização de dados. Este minicurso é ideal para aqueles que desejam iniciar na área de Data Science e melhorar suas habilidades em Python.",
        palestrantes: [
            {
                name: "Valentina Silva de Lacerda",
                bio: "É estudante de Ciência da Computação com forte interesse em Data Science e Machine Learning. Possui experiência prática com análise de dados utilizando Python e é entusiasta de tecnologias open-source",
                social: {
                    github: "https://github.com/valentinaslacerda",
                },
                picture: "/imagens-minicursos/valentinaSilva.jpeg"
            },
            {
                name: "Mateus Lanuce Lourenço Pereira",
                bio: "Estudante de Ciência da Computação na Ufersa e atua como Pesquisador Junior no LAIS/UFRN, onde se dedica a projetos que impactam positivamente a saúde pública no Brasil. Tem habilidades avançadas em Javascript, Typescript, HTML5, CSS, React.js, Vue.js e Django Templates, com foco em acessibilidade e SEO",
                social: {
                    github: "https://github.com/mateus-lanuce",
                    linkedin: "https://www.linkedin.com/in/mateus-lanuce/"
                },
                picture: "/imagens-minicursos/mateusLanuce.jpg"
            }
        ],
        localizacao: ""
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
            },
            {
                name: "Artur Segantini",
                bio: "Entusiasta de worldbuilding e amante de programação orientada a objetos",
                social: {
                    github: "https://github.com/ARTSALT",
                    instagram: "https://www.instagram.com/artur_sals/"
                },
                picture: "/imagens-minicursos/arturSegantini.png"
            }
        ],
        localizacao: ""
    },
    {
        index: 7,
        title: "Introdução a Robótica com Lego EV3",
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
                name: "Brenno Kevyn Maia de Souza",
                bio: "A melhor maneira de prever o futuro é inventá-lo",
                social: {
                    github: "https://github.com/BrennoKM",
                    linkedin: "https://www.linkedin.com/in/brenno-kevyn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                picture: "/imagens-minicursos/brenoKevyn.jpg"
            }
        ],
        localizacao: ""
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
        localizacao: ""
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
        description: "O minicurso de introdução ao React e TailwindCSS tem como objetivo apresentar os conceitos básicos de desenvolvimento de interfaces web com React em Typescript e TailwindCSS. Serão abordados conceitos como componentização, estado, props, hooks, e estilização com TailwindCSS. Ao final do minicurso, os participantes terão o conehcimento necessário para desenvolver aplicações web modernas e responsivas nas tecnologias mais utilizadas no mercado de trabalho atualmente.",
        prerequesites: [
            "Conhecimento básico em programação",
            "Conhecimento básico em HTML e CSS",
            "Conhecimento básico em JavaScript (não obrigatório)"
        ],
        palestrantes: [
            {
                name: "Pedro Figueira Bôa-Viagem",
                bio: "Estudante do 5º período Ciência da Computação e desenvolvedor Front-End. Tenho desenvolvido com React, Next.js, TypeScript, TailwindCSS e Node.js. Atualmente bolsista da EPC e Diretor Presidente da Empresa Júnior de Computação da Ufersa, Lótus Tech",
                social: {
                    github: "https://github.com/PepeuFBV"
                },
                picture: "/imagens-minicursos/pedroFigueira.png"
            },
            {
                name: "Lucas Gabriel",
                bio: "Desenvolvedor web e mobile com 3 anos de experiência na área. Hoje trabalho diariamente com Nextjs (React), Flutter, Go e SQL. Estou sempre em dia com novas tecnologias e meios de inovar a área da programação",
                social: {
                    github: "http://github.com/lucasmelodev1"
                },
                picture: "/imagens-minicursos/lucasGabriel.png"
            }
        ],
        localizacao: ""
    },
    {
        index: 10,
        title: "Introdução a Git e Github",
        alternateTitle: "Versionamento e colaboração de código com Git e Github",
        picture: "/imagens-minicursos/github.png",
        alternatePicture: "/imagens-minicursos/github2.png",
        date: "05/06",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            },
            {
                name: "ferramenta",
                color: "bg-red-300",
                index: 1
            }
        ],
        description: "Neste minicurso, você será introduzido ao mundo do controle de versão utilizando Git e GitHub. Git é uma poderosa ferramenta de controle de versão distribuído, essencial para o desenvolvimento moderno de software, permitindo que desenvolvedores colaborem de forma eficaz, rastreiem alterações no código e revertam para versões anteriores se necessário. GitHub, por sua vez, é uma plataforma baseada na web que utiliza Git e facilita o gerenciamento de repositórios, colaboração em projetos de código aberto e integração contínua.",
        palestrantes: [
            {
                name: "Clara Lopes",
                bio: "Aluna do 3º período de Ciência da Computação",
                social: {
                    github: "https://github.com/ClaraLeticia"
                },
                picture: "https://avatars.githubusercontent.com/u/86624111?v=4"
            }
        ],
        localizacao: ""
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
        descricao: "Abertura do evento com a equipe organizadora acadêmica, a coordenção do curso, chefia do departamento, coordenação do mestrado e equipe da PROGRAD. Assim como a abertura e lançamento do Hackathon e Maratona de Programação.",
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
        descricao: "Apresentação de projetos realizados por alunos do curso de Ciência da Computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 3,
        dia: 1,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e ex-alunos do curso de Ciência da Computação.",
        localizacao: "Laboratórios do LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },
    {
        index: 4,
        dia: 2,
        hora: "08:00 - 09:30",
        titulo: "Palestra",
        descricao: "Palestra com um convidado especial sobre o mercado de trabalho e a importância da área da Ciência da Computação.",
        localizacao: "Auditório da PROEC",
        pageExists: true,
        page: "/eventos/palestra"
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
        descricao: "Mesa redonda com profissionais, professores e alunos da área de Computação.",
        localizacao: "Auditório da PROEC",
        pageExists: true,
        page: "/eventos/mesa-redonda"
    },
    {
        index: 7,
        dia: 2,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e ex-alunos do curso de Ciência da Computação.",
        localizacao: "Laboratórios do LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },
    {
        index: 8,
        dia: 3,
        hora: "08:00 - 11:00",
        titulo: "Maratona de Programação",
        descricao: "Competição de programação com alunos do curso de Ciência da Computação.",
        localizacao: "Lab 4 - LCC"
    },
    {
        index: 9,
        dia: 3,
        hora: "08:00 - 11:00",
        titulo: "Hackathon",
        descricao: "Competição de problem solving em grupo com alunos do curso de Ciência da Computação.",
        localizacao: "Sala do Multídia do LCC"
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
        src: "/imagens-galeria/43.jpg",
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
        src: "/imagens-galeria/44.jpg",
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
        src: "/imagens-galeria/45.jpg",
        descricao: "Imagem da equipe de professores no WTCC",
        alt: "Imagem da equipe de professores no WTCC"
    },
    {
        index: 10,
        src: "/imagens-galeria/11.jpeg",
        descricao: "Imagem da equipe de professores no WTCC",
        alt: "Imagem da equipe de professores no WTCC"
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
        src: "/imagens-galeria/46.jpg",
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
    },
    {
        index: 20,
        src: "/imagens-galeria/47.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 21,
        src: "/imagens-galeria/48.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 22,
        src: "/imagens-galeria/49.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    },
    {
        index: 23,
        src: "/imagens-galeria/51.jpg",
        descricao: "Imagem de WTCC passados",
        alt: "Imagem de WTCC's passados"
    }
];

const patrocinadores: Patrocinador[] = [
    {
        index: 0,
        nome: "Cacim",
        alt: "Cacim Laboratório",
        imagem: "/imagens-patrocinadores/cacim.png",
        link: "https://cacim.com.br"
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
        nome: "Solar Z",
        alt: "Solar Z",
        imagem: "/imagens-patrocinadores/solarz.png",
        link: "https://solarz.com.br"
    },
    {
        index: 3,
        nome: "UFERSA",
        alt: "Universidade Federal Rural do Semi-Árido",
        imagem: "/imagens-patrocinadores/ufersa.png",
        link: "https://ufersa.edu.br/"
    },
    {
        index: 4,
        nome: "PROGRAD",
        alt: "Pró-Reitoria de Graduação",
        imagem: "/imagens-patrocinadores/prograd.png",
        link: "https://prograd.ufersa.edu.br/"
    },
    {
        index: 5,
        nome: "Computação Licenciatura",
        alt: "Licenciatura Curso de Computação",
        imagem: "/imagens-patrocinadores/compLicen.png",
        link: "https://cc.ufersa.edu.br/"
    },
    {
        index: 6,
        nome: "CCEN",
        alt: "Centro de Ciências Exatas e da Natureza",
        imagem: "/imagens-patrocinadores/ccen.png",
        link: "https://ccen.ufersa.edu.br/"

    }
];

const terminalFiles: TerminalFile[] = [
    {
        name: "maratona-de-programacao.txt",
        content: "Maratona de programação é um evento que reúne programadores, que em equipes, para resolver problemas de código mais rapidamente possível. É uma excelente oportunidade para aprender novas habilidades, conhecer outros alunos, competir pela premiação e se divertir.",
        address: "/"
    },
];

export { terminalFiles, minicursos, palestra, FAQuestions, cronograma, imagens, patrocinadores }