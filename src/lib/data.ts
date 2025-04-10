import { Minicurso, Palestrante, Palestra, Faq, Atividade, Imagem, Patrocinador, TerminalFile } from '@/lib/definitions';

const minicursos: Minicurso[] = [
    {
        index: 0,
        title: "Introdução ao Web Básico",
        alternateTitle: "Aprendendo HTML, CSS e JavaScript do básico e além",
        // TODO Mudar as imagens
        picture: "/imagens-minicursos/htmlcssjavascript2.jpg",
        alternatePicture: "/imagens-minicursos/htmlcssjavascript.png",
        date: "24/04",
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
        description: "Quer dominar a arte de criar sites incríveis? No nosso minicurso de HTML, CSS e JavaScript, você aprenderá os fundamentos essenciais para construir páginas web modernas, interativas e visualmente impactantes. Desde a estruturação do conteúdo com HTML, passando pelo design estilizado com CSS, até a adição de dinamismo e funcionalidades com JavaScript, este curso é a porta de entrada para o universo do desenvolvimento web! Venha transformar suas ideias em realidade digital!",
        palestrantes: [
            {
                name: "Artur Segantini",
                bio: "Entusiasta de worldbuilding e amante de programação orientada a objetos",
                social: {
                    github: "https://github.com/ARTSALT",
                    instagram: "https://www.instagram.com/artur_sals/"
                },
                picture: "/imagens-minicursos/arturSegantini.png"
            },
            {
                name: "William Diniza",
                bio: "Aluno do último período de Ciência da Computação, gosto de resolver problemas com soluções criativas.",
                social: {
                    instagram: "https://www.instagram.com/william.praxedes/"
                },
                picture: "/imagens-minicursos/williamDiniz.jpeg"
            }
        ],
        localizacao: "Lab 4"
    },
    {
        index: 1,
        title: "Introdução ao Motor de Jogos Unity",
        alternateTitle: "Introdução ao Motor de Jogos Unity",
        picture: "/imagens-minicursos/unity.jpg",
        alternatePicture: "/imagens-minicursos/unity2.png",
        date: "23/04",
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
        description: "A indústria de jogos digitais movimenta bilhões de dólares anualmente. Neste contexto, um dos principais motores utilizados no desenvolvimento de jogos é o Unity. Este minicurso abordará conceitos fundamentais do Unity. Construiremos um jogo 3D simples a partir do zero. Utilizando o ambiente gráfico do Unity, criaremos cenas e definiremos objetos que estarão presentes naquelas cenas. Além disso, construiremos scripts que estabelecerão como os objetos definidos irão se comportar dentro da cena da qual fazem parte. Trata-se de uma excelente oportunidade de aplicar os conhecimentos aprendidos durante um curso de programação.",
        prerequesites: [
            "Conhecimento básico em programação",
            "Programação Orientada a Objetos (não obrigatório)"
        ],
        palestrantes: [
            {
                // TODO mudar tudo
                name: "Helcio Wagner da Silva",
                bio: "",
                social: {

                },
                picture: ""
            }
        ],
        localizacao: "Lab 2"
    },
    {
        index: 2,
        title: "Figma: Dos primeiros passos ao primeiro site.",
        alternateTitle: "Primeiros Passos em Figma",
        picture: "/imagens-minicursos/figma.png",
        alternatePicture: "/imagens-minicursos/figma2.png",
        date: "23/04",
        tags: [
            {
                name: "ferramenta",
                color: "bg-red-300",
                index: 0
            },
            {
                name: "Iniciante",
                color: "bg-yellow-300",
                index: 1
            }
        ],
        description: "Neste minicurso será ofertado aprendizado acerca da ferramenta Figma para criação de interfaces web e mobile. Iremos aprender a como utilizar a ferramenta, as boas práticas de uso, criação de telas de baixa e alta fidelidade, construir a interface de um site de streaming e a utilização da ferramenta no mercado de trabalho.",
        palestrantes: [
            {
                name: "Vinicius Salviano de Macedo",
                bio: "Poder não é determinado por seu tamanho, mas pelo tamanho de seu coração e dos seus sonhos!",
                social: {
                    github: "https://github.com/ViniciusSalvian",
                    instagram: "https://www.instagram.com/vini_salvian/"
                },
                picture: "/imagens-minicursos/vinicius.jpg"
            }
        ],
        localizacao: "Lab 4"
    },
    {
        index: 3,
        title: "Ruby on Rails na Prática: Construindo Aplicações Web do Zero",
        alternateTitle: "Ruby on Rails na Prática: Construindo Aplicações Web do Zero",
        picture: "/imagens-minicursos/rubyOnRails.png",
        alternatePicture: "/imagens-minicursos/rubyOnRails2.jpg",
        date: "23/04",
        tags: [
            {
                name: "framework",
                color: "bg-pink-300",
                index: 0
            },
            {
                name: "web",
                color: "bg-blue-300",
                index: 1
            }
        ],
        description: "Quer aprender a desenvolver aplicações web modernas e produtivas? Neste minicurso introdutório, você será guiado pelos primeiros passos no Ruby on Rails, o framework que revolucionou o desenvolvimento web com sua abordagem ágil e elegante. Durante a aula, exploraremos desde os fundamentos básicos da linguagem Ruby até a construção de uma aplicação funcional utilizando Rails, passando por modelos, controladores, rotas e views. \nAlém disso, abordaremos conceitos essenciais como MVC (Model-View-Controller), migrações de banco de dados e CRUD (Create, Read, Update, Delete), garantindo que você saia do minicurso com um sólido conhecimento para dar continuidade no desenvolvimento de suas próprias aplicações. Se você busca uma introdução prática e objetiva ao Ruby on Rails, este é o minicurso ideal para você!",
        prerequesites: [
            "Conhecimento básico em programação",
            "Noções de HTML e CSS",
            "Experiência prévia com linguagem de programação (não obrigatório)"
        ],
        palestrantes: [
            {
                //TODO Mudar tudo
                name: "Cláudio Trindade",
                bio: "",
                social: {

                },
                picture: ""
            }
        ],
        localizacao: "Lab 6"
    },
    {
        index: 4,
        title: "Programação em Kotlin",
        alternateTitle: "Introdução a Kotlin",
        picture: "/imagens-minicursos/kotlin.png",
        alternatePicture: "/imagens-minicursos/kotlin2.png",
        date: "23/04",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 1
            }
        ],
        description: "Este mini curso introdutório aborda os fundamentos da linguagem Kotlin, destacando sua versatilidade e vantagens. Os participantes aprenderão a configurar o ambiente de desenvolvimento, manipular entrada e saída de dados, utilizar tipos básicos e operadores, além de implementar estruturas de controle, laços de repetição, arrays e funções. Ideal para quem deseja iniciar na programação com uma linguagem moderna e poderosa.", 
        prerequesites: [
            "Conhecimento básico em lógica de programação"
        ],
        palestrantes: [
            {
                name: "Paulo Henrique Lopes Silva",
                bio: "Professor do Departamento de Computação da UFERSA/Mossoró. Áreas de atuação: Desenvolvimento de Software, Sistemas Distribuídos e Segurança da Informação.",
                social: {},
                picture: "/imagens-minicursos/paulo.jpg"
            },
            {
                name: "Breno Klywer Olegario de Moura",
                bio: "Estudante de Computação apaixonado por clean code",
                social: {
                    github: "https://github.com/Brenokly"
                },
                picture: "/imagens-minicursos/breno.jpg"
            }
        ],
        localizacao: "Lab 7"
    },
    {
        index: 5,
        title: "Introdução ao desenvolvimento de jogos com a Godot Engine 4s",
        alternateTitle: "Criando Jogos na Godot Engine 4: Um Guia Para Iniciantes",
        picture: "/imagens-minicursos/godot.jpg",
        alternatePicture: "/imagens-minicursos/godot2.jpg",
        date: "24/04",
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
        prerequesites: [
            "Conhecimento básico em programação"
        ],
        description: "Neste mini curso daremos o pontapé inicial para o mundo dos jogos digitais com a Godot Engine, o motor de jogos open source mais poderoso do mercado. Abordaremos a interface, programação e conceitos de projeto como Orientação a Objetos e Composição de maneira prática, onde o aluno fará o desenvolvimento guiado do mini game Endless Runner “Filó: The Great Escapade” com o intuito de gerar familiaridade para que o mesmo possa usar tais conhecimentos para seus próprios jogos.",
        palestrantes: [
            {
                name: "João Lucas Galdino Duarte",
                bio: "Sênior Lego Scratch",
                social: {
                    github: "https://github.com/G4ldin0",
                    instagram: "https://www.instagram.com/g4ld1n0_/",
                    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-lucas-0421481b0/"
                },
                picture: "/imagens-minicursos/joao.jpg"
            },
            {
                name: "Wesley Felipe Xavier Rocha",
                bio: "Acho que dá pra rodar DOOM aqui.",
                social: {
                    github: "https://github.com/X4vierWhes",
                    instagram: "https://www.instagram.com/whesxavi?igsh=MXJib3FvNXZ0MmVzdA=="
                },
                picture: "/imagens-minicursos/wesley.jpeg"
            }
        ],
        localizacao: "Lab 2"
    },
    {
        index: 6,
        title: "Programação Paralela em Python",
        alternateTitle: "Programação Paralela em Python",
        picture: "/imagens-minicursos/python.jpg",
        alternatePicture: "/imagens-minicursos/python2.jpg",
        date: "24/04",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            }
        ],
        description: "Este minicurso apresenta os fundamentos da programação paralela em Python, com foco no uso de threads para melhorar o desempenho de aplicações. Os participantes aprenderão a caracterizar e motivar o uso de threads, entender seu ciclo de vida e como a Python Virtual Machine (PVM) gerencia sua execução. Serão abordados tópicos como criação e destruição de threads, tipos de threads, concorrência, sincronização e técnicas de exclusão mútua para evitar condições de corrida.",
        prerequesites: [
            "Conhecimento básico em Python",
            "Noções básicas de lógica de programação"
        ],
        palestrantes: [
            {
                name: "Paulo Henrique Lopes Silva",
                bio: "Professor do Departamento de Computação da UFERSA/Mossoró. Áreas de atuação: Desenvolvimento de Software, Sistemas Distribuídos e Segurança da Informação.",
                social: {
                },
                picture: "/imagens-minicursos/paulo.jpg"
            },
            {
                //TODO Mudar tudo
                name: "Afonso Simão de Góis Neto",
                bio: "",
                social: {
                },
                picture: "/imagens-minicursos/arturSegantini.png"
            }
        ],
        localizacao: "Lab 7"
    },
    {
        index: 7,
        title: "Avaliação de Design de Interfaces",
        alternateTitle: "Avaliação de Design de Interfaces",
        picture: "/imagens-minicursos/ui.jpg",
        alternatePicture: "/imagens-minicursos/ui2.jpg",
        date: "24/04",
        tags: [
            {
                name: "iniciante",
                color: "bg-yellow-300",
                index: 0
            }
        ],
        description: "",
        palestrantes: [
            {
                //TODO Mudar tudo
                name: "Kátia Cilene da Silva Moura",
                bio: "",
                social: {
                },
                picture: "/imagens-minicursos/joaoLucas.jpeg"
            }
        ],
        localizacao: "Lab 4"
    }
];

const palestranteSelecionado: Palestrante = {
    name: "Eduardo Guerra",
    // TODO Traduzir e resumir
    bio: "Eduardo Guerra é pesquisador na Universidade Livre de Bozen-Bolzano, na Itália. Durante sete anos, trabalhou no Instituto Nacional de Pesquisas Espaciais (INPE) no Brasil, onde alcançou o nível de pesquisador sênior. Antes disso, também atuou como professor no Instituto Tecnológico de Aeronáutica (ITA), reconhecido como uma das melhores escolas de engenharia do país. O foco da pesquisa de Eduardo Guerra pode ser descrito como a busca por formas mais eficientes de desenvolver software. Isso envolve padrões, abordagens de programação e processos voltados para otimizar o trabalho das equipes de desenvolvimento. Ele considera os princípios da metodologia ágil como a base de sua pesquisa, pois visam aprimorar a qualidade do software, reduzir o tempo de desenvolvimento e aumentar sua adaptabilidade. O desenvolvimento orientado a testes (TDD) foi o tema central de diversos de seus trabalhos, incluindo a refatoração de código de teste, a aplicação do TDD para tipos específicos de software e a análise do ensino e da avaliação dessa técnica. Além disso, em suas investigações sobre técnicas de programação, metadados e anotações de código foram estudados como alternativas para tornar o software mais adaptável e aprimorar a qualidade do código.",
    social: {
    },
    picture: ""
};

const palestra: Palestra = {
    name: "O que os meus filmes favoritos me ensinaram sobre Agile",
    description: "Uma famosa citação diz que \"a beleza está nos olhos de quem vê\", no entanto, talvez o mesmo possa ser dito sobre a mensagem. Nesta palestra divertida, momentos icônicos de filmes famosos da cultura pop são utilizados para desencadear discussões emocionantes sobre as armadilhas comuns do desenvolvimento de software ágil. Incluirá filmes clássicos dos anos 80, como De Volta para o Futuro e Indiana Jones, e outros mais recentes, como Os Vingadores e O Senhor dos Anéis. As cenas servem como ponto de partida para discutir temas importantes sobre desenvolvimento de software, como a cultura ágil, trabalho em equipe, aprendizado contínuo e abordagens para tomada de decisões técnicas.",
    descriptionCont: "",
    speaker: palestranteSelecionado,
    img: "/palestra/EduardoG.jpeg"
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
            question: 'Onde fica o LCC - Laboratório de Ciênca da Computação?',
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
        hora: "08:00 - 09:00",
        titulo: "Abertura Oficial do evento",
        descricao: "Abertura do evento com a equipe organizadora acadêmica, a coordenção do curso, chefia do departamento, coordenação da graduação e pós-graduação do departamento de computação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 1,
        dia: 1,
        hora: "09:00 - 09:15",
        titulo: "Apresentação da Empresa Júnior de Computação",
        descricao: "Apresentação da empresa júnior de computação, a Lotus Tech.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 2,
        dia: 1,
        hora: "09:15 - 10:15",
        titulo: "Palestra de Abertura",
        descricao: "Um convidado especial trará uma palestra diferenciada sobre as metodologias ágeis, trazendo discussões emocionantes.",
        localizacao: "Auditório da PROEC",
        pageExists: true,
        page: "/eventos/palestra"
    },
    {
        index: 3,
        dia: 1,
        hora: "10:15 - 10:45",
        titulo: "Coffee break",
        descricao: "",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 4,
        dia: 1,
        hora: "10:45 - 11:15",
        titulo: "Startup - Uma proposta profissional no século XXI",
        descricao: "Era da mudança x Mundaça de era, Mentalidade Fixa x Mentalidade Aberta, Velha Economia x Nova Economia, Empreendedor x Pesquisador, Emprego x Profissão, Empresário x Empresidiário, Empreendor x Empreende a Dor, Desafio só presta grande, Estudar, validar e fazer, E a IA? E Kiko?",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 5,
        dia: 1,
        hora: "11:15 - 11:45",
        titulo: "Apresentação do Hackaton e Maratona de Programação",
        descricao: "Abertura das inscrições para o Hackathon e a Maratona de Programação, detalhando cada um dos eventos.",
        localizacao: "Auditório da PROEC",
        pageExists: true,
        page: "/eventos/hackaton"
    },
    {
        index: 6,
        dia: 1,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },
    {
        index: 7,
        dia: 1,
        hora: "16:00 - 16:20",
        titulo: "Cofee Break",
        descricao: "",
        localizacao: "LCC",
    },
    {
        index: 8,
        dia: 2,
        hora: "08:00 - 09:00",
        titulo: "*Apresentação do PpgCC",
        descricao: "Introdução do que é e como funciona o programa de pós-graduação de ciência da computação.",
        localizacao: "Auditório da PROEC",
    },
    {
        index: 9,
        dia: 2,
        hora: "09:00 - 12:00",
        titulo: "Apresentação de Trabalhos da Pós-Graduação",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 10,
        dia: 2,
        hora: "10:30 - 10:45",
        titulo: "Cofee Break",
        descricao: "",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 11,
        dia: 2,
        hora: "08:00 - 12:00",
        titulo: "*Maratona de Programação",
        descricao: "Maratona de programação com alunos do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/maratona-programacao"
    },
    {
        index: 12,
        dia: 2,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },
    {
        index: 13,
        dia: 2,
        hora: "16:00 - 16:20",
        titulo: "Cofee Break",
        descricao: "",
        localizacao: "LCC"
    },
    {
        index: 14,
        dia: 3,
        hora: "08:00 - 09:00",
        titulo: "Palestra de Ética",
        descricao: "Palestra sobre a utilização ética e responsável da inteligência artificial generativa.",
        localizacao: "Auditório da PROEC",
    },
    {
        index: 15,
        dia: 3,
        hora: "09:00 - 09:15",
        titulo: "Apresentação do Projeto de extensão",
        descricao: "Apresentação do projeto de extensão, PegAzuls Aerodesign.",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 16,
        dia: 3,
        hora: "09:15 - 12:00",
        titulo: "Encontro dos discentes do PpgCC",
        descricao: "",
        localizacao: "Auditório da PROEC"
    },
    {
        index: 17,
        dia: 3,
        hora: "09:15 - 12:00",
        titulo: "Mostra Científica",
        descricao: "Apresentação de trabalhos científicos dos alunos do curso de Ciência da Computação.",
        localizacao: "Varanda do Prédio da Assecom"
    },
    {
        index: 18,
        dia: 3,
        hora: "14:00 - 18:00",
        titulo: "Apresentação de Soluções do Hackaton",
        descricao: "Apresentação das soluções do hackaton e avaliação pela banca de jurados.",
        localizacao: "LCC"
    },
    {
        index: 19,
        dia: 3,
        hora: "16:00 - 16:20",
        titulo: "Cofee Break",
        descricao: "",
        localizacao: "LCC"
    },
    {
        index: 20,
        dia: 3,
        hora: "18:00",
        titulo: "Anuncio dos resultados do Hackaton",
        descricao: "Anuncio dos resultados do hackaton e premiação dos vencedores.",
        localizacao: "LCC"
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
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 13,
        src: "/imagens-galeria/14.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 14,
        src: "/imagens-galeria/15.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 15,
        src: "/imagens-galeria/16.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 16,
        src: "/imagens-galeria/17.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 17,
        src: "/imagens-galeria/18.jpeg",
        descricao: "Equipe de professores no X WTCC",
        alt: "Equipe de professores no X WTCC"
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
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 21,
        src: "/imagens-galeria/22.jpeg",
        descricao: "Minicurso de Flutter - X WTCC",
        alt: "Minicurso de Flutter - X WTCC"
    },
    {
        index: 22,
        src: "/imagens-galeria/23.jpeg",
        descricao: "Minicurso de Flutter - X WTCC",
        alt: "Minicurso de Flutter - X WTCC"
    },
    {
        index: 23,
        src: "/imagens-galeria/24.jpeg",
        descricao: "Minicurso de HTML, CSS e Javascript - X WTCC",
        alt: "Minicurso de HTML, CSS e Javascript - X WTCC"
    },
    {
        index: 24,
        src: "/imagens-galeria/25.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 25,
        src: "/imagens-galeria/26.jpeg",
        descricao: "Minicurso de R - X WTCC",
        alt: "Minicurso de R - X WTCC"
    },
    {
        index: 26,
        src: "/imagens-galeria/27.jpeg",
        descricao: "Minicurso de HTML, CSS e Javascript - X WTCC",
        alt: "Minicurso de HTML, CSS e Javascript - X WTCC"
    },
    {
        index: 27,
        src: "/imagens-galeria/28.jpeg",
        descricao: "Minicurso de Git e Github - X WTCC",
        alt: "Minicurso de Git e Github - X WTCC"
    },
    {
        index: 28,
        src: "/imagens-galeria/29.jpeg",
        descricao: "X WTCC",
        alt: "X WTCC"
    },
    {
        index: 29,
        src: "/imagens-galeria/30.jpeg",
        descricao: "Minicurso de Flutter - X WTCC",
        alt: "Minicurso de Flutter - X WTCC"
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
        descricao: "Minicurso de PyAutoGUI - X WTCC",
        alt: "Minicurso de PyAutoGUI - X WTCC"
    },
    {
        index: 33,
        src: "/imagens-galeria/38.jpg",
        descricao: "Minicurso de PyAutoGUI - X WTCC",
        alt: "Minicurso de PyAutoGUI - X WTCC"
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
        descricao: "Palestra - X WTCC",
        alt: "Palestra - X WTCC"
    },
    {
        index: 47,
        src: "/imagens-galeria/32.jpg",
        descricao: "Mesa Redonda - X WTCC",
        alt: "Mesa Redonda - X WTCC"
    },
    {
        index: 48,
        src: "/imagens-galeria/33.jpeg",
        descricao: "Minicurso de Pandas - X WTCC",
        alt: "Minicurso de Pandas - X WTCC"
    },
    {
        index: 49,
        src: "/imagens-galeria/34.jpeg",
        descricao: "Minicurso de Pré-Cálculo - X WTCC",
        alt: "Minicurso de Pré-Cálculo - X WTCC"
    },
    {
        index: 50,
        src: "/imagens-galeria/52.jpg",
        descricao: "Ministrantes com Professoras - X WTCC",
        alt: "Ministrantes com Professoras - X WTCC"
    },
    {
        index: 51,
        src: "/imagens-galeria/53.jpg",
        descricao: "Participantes da Mesa Rendonda com Professoras - X WTCC",
        alt: "Participantes da Mesa Rendonda com Professoras - X WTCC"
    },
    {
        index: 52,
        src: "/imagens-galeria/54.jpg",
        descricao: "Minicurso de Gamemaker Studio 2 - X WTCC",
        alt: "Minicurso de Gamemaker Studio 2 - X WTCC"
    },
    {
        index: 53,
        src: "/imagens-galeria/55.jpg",
        descricao: "Minicurso de Linux - X WTCC",
        alt: "Minicurso de Linux - X WTCC"
    },
    {
        index: 54,
        src: "/imagens-galeria/56.jpg",
        descricao: "Minicurso de Pandas - X WTCC",
        alt: "Minicurso de Pandas - X WTCC"
    },
    {
        index: 55,
        src: "/imagens-galeria/57.jpg",
        descricao: "Minicurso de React - X WTCC",
        alt: "Minicurso de React - X WTCC"
    },
    {
        index: 56,
        src: "/imagens-galeria/58.jpg",
        descricao: "Minicurso de Robótica - X WTCC",
        alt: "Minicurso de Robótica - X WTCC"
    },
    {
        index: 57,
        src: "/imagens-galeria/59.jpg",
        descricao: "Vencedores do Hackathon - X WTCC",
        alt: "Vencedores do Hackathon - X WTCC"
    },
    {
        index: 58,
        src: "/imagens-galeria/60.jpg",
        descricao: "Participantes do Hackathon - X WTCC",
        alt: "Participantes do Hackathon - X WTCC"
    },
    {
        index: 59,
        src: "/imagens-galeria/61.jpg",
        descricao: "Participantes do Hackathon - X WTCC",
        alt: "Participantes do Hackathon - X WTCC"
    },
    {
        index: 60,
        src: "/imagens-galeria/62.jpg",
        descricao: "Organização do Hackathon - X WTCC",
        alt: "Organização do Hackathon - X WTCC"
    },
    {
        index: 61,
        src: "/imagens-galeria/63.jpg",
        descricao: "Maratona de Programação - X WTCC",
        alt: "Maratona de Programação - X WTCC"
    },
    {
        index: 62,
        src: "/imagens-galeria/64.jpg",
        descricao: "Maratona de Programação - X WTCC",
        alt: "Maratona de Programação - X WTCC"
    },
    {
        index: 63,
        src: "/imagens-galeria/65.jpg",
        descricao: "Vencedores da Maratona de Programação - X WTCC",
        alt: "Vencedores da Maratona de Programação - X WTCC"
    },
    {
        index: 64,
        src: "/imagens-galeria/66.jpg",
        descricao: "Vencedores da Maratona de Programação - X WTCC",
        alt: "Vencedores da Maratona de Programação - X WTCC"
    },
    {
        index: 65,
        src: "/imagens-galeria/67.jpg",
        descricao: "Participantes da Maratona de Programação - X WTCC",
        alt: "Participantes da Maratona de Programação - X WTCC"
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
        nome: "Massas Nordeste",
        alt: "Massas Nordeste",
        imagem: "/imagens-patrocinadores/massasNordeste.png",
        link: "https://www.instagram.com/massasnordesteoficial/"
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
        nome: "Casa Dos Pneus",
        alt: "Casa Dos Pneus",
        imagem: "/imagens-patrocinadores/casaDosPneus.png",
        link: "https://casadospneusmossoro.com.br/"
    },
    {
        index: 10,
        nome: "smar",
        alt: "smar",
        imagem: "/imagens-patrocinadores/smar.png",
        link: "https://www.smar.com.br/pt"
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
        content: "Para participar, se é necessário formar um grupo com 3 alunos, sem restrições de período! Ambas a premiação e a competição serão no dia 25/04, das 8:00 às 11:00, no Lab 4 do prédio do LCC. Não é necessário saber alguma linguagem de programação específica, espera-se que o grupo decida usar de uma linguagem das mais conhecidas (ex. java, c++).",
        address: "/"
    }
];

export { terminalFiles, minicursos, palestra, FAQuestions, cronograma, imagens, patrocinadores }