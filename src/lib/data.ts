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
                bio: "Sou o Arthur e, ao longo da minha trajetória profissional, fui melhorando minhas habilidades em linguagens de programação essenciais como JavaScript, TypeScript e Java. Além disso, possuo uma notável experiência em tecnologias tanto de front-end quanto de back-end, incluindo frameworks como React, Next.js, Angular e Spring",
                social: {
                    instagram: "https://www.instagram.com/arthur_f18/",
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
        localizacao: "Lab 2"
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
        localizacao: "Multimidia"
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
        localizacao: "Lab 4"
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
        localizacao: "Lab 2"
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
        localizacao: "Lab 3"
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
        localizacao: "Lab 6"
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
        localizacao: "Lab 5"
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
        localizacao: "Lab 4"
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
        localizacao: "Lab 3"
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
        localizacao: "Lab 5"
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
        localizacao: "Lab 6"
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
            answer: "Não! Todos os minicursos são oferecidos gratuitamente por parte dos alunos e ex-alunos, basta apenas se inscrever para participar! Vá em Eventos > Minicursos, escolha seu minicurso e faça sua inscrição!"
        },
        {
            key: 2,
            question: "Apenas os alunos de Computação podem se inscrever nos minicursos?",
            answer: "Não, todos minicursos são abertos para inscrições de alunos de qualquer curso."
        },
        {
            key: 3,
            question: "É necessário algum tipo de conhecimento prévio para participar?",
            answer: "Dependerá do minicurso, a maioria não requer conhecimento conhecimento prévio na área. Veja os pré-requesitos do minicurso ao clicar no minicurso escolhido em Eventos > Minicursos!"
        },
        {
            key: 4,
            question: "No período do evento haverá aulas para os alunos de Computação?",
            answer: "Não, as aulas que ocorrerem nos horários do evento serão suspensas para que todos possam participar dos mini-cursos. Fique atento, pois alguns professores cobrarão a presença dos alunos no decorrer evento!"
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
            answer: "Sim, após a realização da inscricão e participação no evento, é possivel baixar um certificado ao fim do WTCC. É possível também ganhar horas extras assistindo os minicursos e/ou outras partes do WTCC! Baixe no site que você fez a inscrição!"
        },
        {
            key: 8,
            question: "Trabalho no horário do evento, posso participar?",
            answer: "Claro! Fale com alguém da organização do evento e consiga um documento assinado que comprova a sua participação no evento, assim você poderá apresentar ao seu empregador e garantir suas horas complementares."
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
        localizacao: "Auditório da PROEC",
        pageExists: true,
        page: "/eventos/mostra-cientifica"
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
        localizacao: "Lab 4 - LCC",
        pageExists: true,
        page: "/eventos/maratona-de-programacao"
    },
    {
        index: 9,
        dia: 3,
        hora: "08:00 - 11:00",
        titulo: "Hackathon",
        descricao: "Competição de problem solving em grupo com alunos do curso de Ciência da Computação.",
        localizacao: "Sala do Multídia do LCC",
        pageExists: true,
        page: "/eventos/hackathon"
    }
];

const imagens: Imagem[] = [
    {
        index: 0,
        src: "/imagens-galeria/1.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 1,
        src: "/imagens-galeria/2.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 3,
        src: "/imagens-galeria/4.jpeg",
        descricao: "Coffee Break - WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 4,
        src: "/imagens-galeria/5.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 5,
        src: "/imagens-galeria/6.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 6,
        src: "/imagens-galeria/7.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 7,
        src: "/imagens-galeria/8.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 8,
        src: "/imagens-galeria/9.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 9,
        src: "/imagens-galeria/10.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 10,
        src: "/imagens-galeria/11.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 11,
        src: "/imagens-galeria/12.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 12,
        src: "/imagens-galeria/13.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 13,
        src: "/imagens-galeria/14.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 14,
        src: "/imagens-galeria/15.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 15,
        src: "/imagens-galeria/16.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 16,
        src: "/imagens-galeria/17.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 17,
        src: "/imagens-galeria/18.jpeg",
        descricao: "Equipe de professores no IX WTCC",
        alt: "Equipe de professores no IX WTCC"
    },
    {
        index: 18,
        src: "/imagens-galeria/19.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 19,
        src: "/imagens-galeria/20.jpeg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 20,
        src: "/imagens-galeria/21.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 21,
        src: "/imagens-galeria/22.jpeg",
        descricao: "Minicurso de Flutter - IX WTCC",
        alt: "Minicurso de Flutter - IX WTCC"
    },
    {
        index: 22,
        src: "/imagens-galeria/23.jpeg",
        descricao: "Minicurso de Flutter - IX WTCC",
        alt: "Minicurso de Flutter - IX WTCC"
    },
    {
        index: 23,
        src: "/imagens-galeria/24.jpeg",
        descricao: "Minicurso de HTML, CSS e Javascript - IX WTCC",
        alt: "Minicurso de HTML, CSS e Javascript - IX WTCC"
    },
    {
        index: 24,
        src: "/imagens-galeria/25.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 25,
        src: "/imagens-galeria/26.jpeg",
        descricao: "Minicurso de R - IX WTCC",
        alt: "Minicurso de R - IX WTCC"
    },
    {
        index: 26,
        src: "/imagens-galeria/27.jpeg",
        descricao: "Minicurso de HTML, CSS e Javascript - IX WTCC",
        alt: "Minicurso de HTML, CSS e Javascript - IX WTCC"
    },
    {
        index: 27,
        src: "/imagens-galeria/28.jpeg",
        descricao: "Minicurso de Git e Github - IX WTCC",
        alt: "Minicurso de Git e Github - IX WTCC"
    },
    {
        index: 28,
        src: "/imagens-galeria/29.jpeg",
        descricao: "IX WTCC",
        alt: "IX WTCC"
    },
    {
        index: 29,
        src: "/imagens-galeria/30.jpeg",
        descricao: "Minicurso de Flutter - IX WTCC",
        alt: "Minicurso de Flutter - IX WTCC"
    },
    {
        index: 30,
        src: "/imagens-galeria/35.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 31,
        src: "/imagens-galeria/36.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 32,
        src: "/imagens-galeria/37.jpeg",
        descricao: "Minicurso de PyAutoGUI - IX WTCC",
        alt: "Minicurso de PyAutoGUI - IX WTCC"
    },
    {
        index: 33,
        src: "/imagens-galeria/38.jpg",
        descricao: "Minicurso de PyAutoGUI - IX WTCC",
        alt: "Minicurso de PyAutoGUI - IX WTCC"
    },
    {
        index: 34,
        src: "/imagens-galeria/39.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 35,
        src: "/imagens-galeria/40.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 36,
        src: "/imagens-galeria/41.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 37,
        src: "/imagens-galeria/42.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 38,
        src: "/imagens-galeria/43.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 39,
        src: "/imagens-galeria/44.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 40,
        src: "/imagens-galeria/45.jpg",
        descricao: "Equipe de professores nos WTCC's passados",
        alt: "Equipe de professores nos WTCC's passados"
    },
    {
        index: 41,
        src: "/imagens-galeria/46.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 42,
        src: "/imagens-galeria/47.jpg",
        descricao: "Hackathon - VIII WTCC",
        alt: "Hackathon - VIII WTCC"
    },
    {
        index: 43,
        src: "/imagens-galeria/48.jpg",
        descricao: "Hackathon - VIII WTCC",
        alt: "Hackathon - VIII WTCC"
    },
    {
        index: 44,
        src: "/imagens-galeria/49.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 45,
        src: "/imagens-galeria/51.jpg",
        descricao: "WTCC's passados",
        alt: "WTCC's passados"
    },
    {
        index: 46,
        src: "/imagens-galeria/31.jpg",
        descricao: "Palestra - IX WTCC",
        alt: "Palestra - IX WTCC"
    },
    {
        index: 47,
        src: "/imagens-galeria/32.jpg",
        descricao: "Mesa Redonda - IX WTCC",
        alt: "Mesa Redonda - IX WTCC"
    },
    {
        index: 48,
        src: "/imagens-galeria/33.jpeg",
        descricao: "Minicurso de Pandas - IX WTCC",
        alt: "Minicurso de Pandas - IX WTCC"
    },
    {
        index: 49,
        src: "/imagens-galeria/34.jpeg",
        descricao: "Minicurso de Pré-Cálculo - IX WTCC",
        alt: "Minicurso de Pré-Cálculo - IX WTCC"
    },
    {
        index: 50,
        src: "/imagens-galeria/52.jpg",
        descricao: "Ministrantes com Professoras - IX WTCC",
        alt: "Ministrantes com Professoras - IX WTCC"
    },
    {
        index: 51,
        src: "/imagens-galeria/53.jpg",
        descricao: "Participantes da Mesa Rendonda com Professoras - IX WTCC",
        alt: "Participantes da Mesa Rendonda com Professoras - IX WTCC"
    },
    {
        index: 52,
        src: "/imagens-galeria/54.jpg",
        descricao: "Minicurso de Gamemaker Studio 2 - IX WTCC",
        alt: "Minicurso de Gamemaker Studio 2 - IX WTCC"
    },
    {
        index: 53,
        src: "/imagens-galeria/55.jpg",
        descricao: "Minicurso de Linux - IX WTCC",
        alt: "Minicurso de Linux - IX WTCC"
    },
    {
        index: 54,
        src: "/imagens-galeria/56.jpg",
        descricao: "Minicurso de Pandas - IX WTCC",
        alt: "Minicurso de Pandas - IX WTCC"
    },
    {
        index: 55,
        src: "/imagens-galeria/57.jpg",
        descricao: "Minicurso de React - IX WTCC",
        alt: "Minicurso de React - IX WTCC"
    },
    {
        index: 56,
        src: "/imagens-galeria/58.jpg",
        descricao: "Minicurso de Robótica - IX WTCC",
        alt: "Minicurso de Robótica - IX WTCC"
    },
    {
        index: 57,
        src: "/imagens-galeria/59.jpg",
        descricao: "Vencedores do Hackathon - IX WTCC",
        alt: "Vencedores do Hackathon - IX WTCC"
    },
    {
        index: 58,
        src: "/imagens-galeria/60.jpg",
        descricao: "Participantes do Hackathon - IX WTCC",
        alt: "Participantes do Hackathon - IX WTCC"
    },
    {
        index: 59,
        src: "/imagens-galeria/61.jpg",
        descricao: "Participantes do Hackathon - IX WTCC",
        alt: "Participantes do Hackathon - IX WTCC"
    },
    {
        index: 60,
        src: "/imagens-galeria/62.jpg",
        descricao: "Organização do Hackathon - IX WTCC",
        alt: "Organização do Hackathon - IX WTCC"
    },
    {
        index: 61,
        src: "/imagens-galeria/63.jpg",
        descricao: "Maratona de Programação - IX WTCC",
        alt: "Maratona de Programação - IX WTCC"
    },
    {
        index: 62,
        src: "/imagens-galeria/64.jpg",
        descricao: "Maratona de Programação - IX WTCC",
        alt: "Maratona de Programação - IX WTCC"
    },
    {
        index: 63,
        src: "/imagens-galeria/65.jpg",
        descricao: "Vencedores da Maratona de Programação - IX WTCC",
        alt: "Vencedores da Maratona de Programação - IX WTCC"
    },
    {
        index: 64,
        src: "/imagens-galeria/66.jpg",
        descricao: "Vencedores da Maratona de Programação - IX WTCC",
        alt: "Vencedores da Maratona de Programação - IX WTCC"
    },
    {
        index: 65,
        src: "/imagens-galeria/67.jpg",
        descricao: "Participantes da Maratona de Programação - IX WTCC",
        alt: "Participantes da Maratona de Programação - IX WTCC"
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
    },
    {
        index: 7,
        nome: "Cimsal",
        alt: "Cimsal",
        imagem: "/imagens-patrocinadores/cimsal.png",
        link: "https://cimsal.com.br"
    },
    {
        index: 8,
        nome: "Apreciatte",
        alt: "Apreciatte",
        imagem: "/imagens-patrocinadores/apreciatte.png",
        link: "https://apreciatte.com.br"
    },
    {
        index: 9,
        nome: "Uqvestir",
        alt: "Uqvestir",
        imagem: "/imagens-patrocinadores/uqvestir2.png",
        link: "https://www.instagram.com/uqvestir/"
    },
    {
        index: 10,
        nome: "Sua sapataria",
        alt: "Sua sapataria",
        imagem: "/imagens-patrocinadores/suaSapataria.png",
    }
];

const terminalFiles: TerminalFile[] = [
    {
        name: "maratona-de-programacao.txt",
        content: "É com grande satisfação que apresentamos a maratona de programação do WTCC 2024. Nela, os participantes formam equipes e enfrentam desafios propostos pelos organizadores. O ambiente é caracterizado por intensa colaboração, criatividade e uma atmosfera competitiva, onde a pressão do tempo estimula a produtividade e o pensamento ágil. Para estudantes de computação, participar de uma maratona de programação é uma oportunidade valiosa de aplicar os conhecimentos teóricos adquiridos em sala de aula em um contexto prático e dinâmico. Essas competições permitem que os estudantes desenvolvam habilidades essenciais como trabalho em equipe, comunicação, gestão de tempo e resolução de problemas sob pressão. Além disso, a maratona proporciona uma imersão no processo de desenvolvimento de software, desde a concepção da ideia até a implementação e apresentação final, oferecendo uma visão completa e prática do ciclo de vida de um projeto tecnológico. Eventos como este também incentivam a atualização constante dos conhecimentos e o aprendizado de novas tecnologias e metodologias, fundamentais em um campo tão dinâmico quanto o da computação e tecnologias da informação. Participar de uma maratona de programação demonstra proatividade e paixão pela área, atributos muito valorizados no mercado de trabalho. Em suma, essas competições contribuem significativamente para o crescimento profissional e pessoal dos participantes, tornando-se uma experiência enriquecedora e muitas vezes transformadora.",
        address: "/"
    },
    {
        name: "regras.txt",
        content: "Para participar, se é necessário formar um grupo com 3 alunos, sem restrições de período! Ambas a premiação e a competição serão no dia 07/06, das 8:00 às 11:00, no Lab 4 do prédio do LCC. Não é necessário saber alguma linguagem de programação específica, espera-se que o grupo decida usar de uma linguagem das mais conhecidas (ex. java, c++).",
        address: "/"
    }
];

export { terminalFiles, minicursos, palestra, FAQuestions, cronograma, imagens, patrocinadores }