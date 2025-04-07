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
            }
        ],
        description: "Neste minicurso será ofertado aprendizado acerca da ferramenta Figma para criação de interfaces web e mobile. Iremos aprender a como utilizar a ferramenta, as boas práticas de uso, criação de telas de baixa e alta fidelidade, construir a interface de um site de streaming e a utilização da ferramenta no mercado de trabalho.",
        palestrantes: [
            {
                // TODO Mudar tudo
                name: "Vinicius Salviano de Macedo",
                bio: "",
                social: {
                    
                },
                picture: ""
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
                bio: "",
                social: {
                },
                picture: ""
            },
            {
                //TODO Mudar tudo
                name: "Breno Klywer Olegario de Moura",
                bio: "",
                social: {
                },
                picture: ""
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
                name: "jogos",
                color: "bg-purple-300",
                index: 0
            }
        ],
        prerequesites: [
            "Conhecimento básico em programação"
        ],
        description: "Neste mini curso daremos o pontapé inicial para o mundo dos jogos digitais com a Godot Engine, o motor de jogos open source mais poderoso do mercado. Abordaremos a interface, programação e conceitos de projeto como Orientação a Objetos e Composição de maneira prática, onde o aluno fará o desenvolvimento guiado do mini game Endless Runner “Filó: The Great Escapade” com o intuito de gerar familiaridade para que o mesmo possa usar tais conhecimentos para seus próprios jogos.",
        palestrantes: [
            {
                // TODO Mudar tudo
                name: "João Lucas Galdino Duarte",
                bio: "",
                social: {
                },
                picture: ""
            },
            {
                // TODO Mudar tudo
                name: "Wesley Felipe Xavier Rocha",
                bio: "",
                social: {
                },
                picture: ""
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
                //TODO Mudar tudo
                name: "Paulo Henrique Lopes Silva",
                bio: "",
                social: {
                },
                picture: "/imagens-minicursos/viniciusGabriel.jpg"
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