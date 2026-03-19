import { Minicurso, Palestrante, Palestra, Faq, Atividade, Imagem, Patrocinador, TerminalFile } from '@/lib/definitions';
import { Linkedin } from 'lucide-react';

const minicursos: Minicurso[] = [
    {
        index: 0,
        title: "Introdução ao desenvolvimento de jogos com a Godot 4",
        alternateTitle: "Criando Jogos na Godot Engine 4: Um Guia Para Iniciantes",
        picture: "/imagens-minicursos/godot.png",
        alternatePicture: "/imagens-minicursos/godot2.jpg",
        date: "18/03",
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
        description: "O objetivo deste minicurso é apresentar Godot Engine 4, mostrando suas vantagens, fluxo de trabalho, organização e outros detalhes a partir do criação de um protótipo de \"Filó: The great Escapade!\", um endless runner horizontal baseado no dino chrome. Ao final do minicurso os ouvintes desenvolverão noções de desenvolvimento e lógica para jogos 2D com o motor, sendo incentivado a procurar conhecer as demais facetas que o projeto tem a oferecer.",
        palestrantes: [
            {
                name: "João Lucas Galdino Duarte",
                bio: "Sênior Lego Scratch, desenvolvendo jogos e pra sempre preso entre paginas de documentação ou ando meio desligado.",
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
        localizacao: "Lab 7"
    },
    {
        index: 1,
        title: "Introdução a Design System: Conceitos e Implementações",
        alternateTitle: "Design System: Conceitos e Implementações",
        picture: "/imagens-minicursos/design-system.png", //alterar
        alternatePicture: "/imagens-minicursos/design-system.png",
        date: "18/03",
        tags: [
            {
                name: "front-end",
                color: "bg-indigo-300",
                index: 1
            },
        ],
        prerequesites: [
            "Conhecimento básico em front-end ou design"
        ],
        description: "Esse minicurso busca trazer informações sobre o que é um design system, como criar um design do zero e boas práticas construtivas.",
        palestrantes: [
            {
                name: "Vinícius Salviano",
                bio: "Cientista da computação pela UFERSA e UI/UX Designer na Solarz, atuo na construção de produtos digitais e na melhoria de produtos existentes, além de construção e manutenção de Design systems",
                social: 
                {
                    linkedin: "https://www.linkedin.com/in/vinicius-salvimacedo"
                },

                picture: "/imagens-minicursos/vinicius.jpeg" 
            },
        ],
        localizacao: "Lab 6"
    },
    {
        index: 2,
        title: "Criação de apps com Flutter",
        alternateTitle: "Criação de apps com Flutter",
        picture: "/imagens-minicursos/apps-flutter.png",
        alternatePicture: "/imagens-minicursos/apps-flutter.png",
        date: "18/03",
        tags: [
            {
                name: "framework",
                color: "bg-pink-300",
                index: 0
            },
            {
                name: "mobile",
                color: "bg-orange-300",
                index: 0
            },
        ],
        description: "O objetivo deste minicurso é capacitar os participantes a compreender os fundamentos do desenvolvimento de aplicativos móveis utilizando o framework Flutter, explorando sua estrutura, principais widgets e o funcionamento da construção de interfaces multiplataforma. Ao final, os alunos serão capazes de desenvolver aplicações básicas, entendendo como processar dados e estruturar aplicações modernas para Android e iOS a partir de uma única base de código.",
        prerequesites: [
            "Conhcecimento dos conceitos básicos do framework"
        ],
        palestrantes: [
            {
                name: "Arthur Peixoto",
                bio: "Ex-Jogador amador de fortnite, 2x semi finalista do interclasse da escola, desenvolvedor junior aprendiz de programação e loucamente apaixonado",
                social: {
                    instagram: "https://www.instagram.com/nickolas_emanuel_/",
                    linkedin: "https://www.linkedin.com/in/n%C3%ADckolas-emanuel-02924b223/"
                },
                picture: "/imagens-minicursos/arthurPeixoto.jpg"
            },
            {
                name: "Nickolas Emanuel",
                bio: "Desenvolvedor Front-end Multiplataforma.",
                social: {
                    
                },
                picture: "/imagens-minicursos/nikolasEmanuel.jpg"
            }
        ],
        localizacao: "Lab 2"
    },
    {
        index: 3,
        title: "Introdução a testes automatizados com Cypress",
        alternateTitle: "Introdução a testes automatizados com Cypress",
        picture: "/imagens-minicursos/cypress.png",
        alternatePicture: "/imagens-minicursos/cypress.png",
        date: "19/03",
        tags: [
            {
                name: "ferramenta",
                color: "bg-green-300",
                index: 0
            },

            {
                name: "automação",
                color: "bg-yellow-300",
                index: 0
            }
        ],
        description: "Apresentar os fundamentos de testes automatizados utilizando o Cypress, capacitando os participantes a configurar o ambiente, escrever e executar testes end-to-end para aplicações web, além de compreender boas práticas para garantir qualidade e confiabilidade no desenvolvimento de software.",
        prerequesites: [
            "Conhecimentos básicos em programação"
        ],
        palestrantes: [
            {
                name: "Paulo Henrique Pereira",
                bio: "Quality Assurance & Analista de Dados. Atuação com garantia e controle de qualidade de software em times ágeis.",
                social: {
                    github: "https://github.com/devphpaulo",
                    linkedin: "https://www.linkedin.com/in/devphpaulo/"
                },
                picture: "/imagens-minicursos/ph-pereira.jpeg"
            },
            {
                name: "Brenno Kevyn",
                bio: "Quality Assurance & Cientista da Computação. Atuação em engenharia de software, sistemas distribuídos e qualidade.",
                social: {
                    github: "https://github.com/BrennoKM",
                    linkedin: "https://www.linkedin.com/in/brenno-kevyn/"
                   
                },
                picture: "/imagens-minicursos/brenno-kevyn.jpeg" 
            }
        ],
        localizacao: "Lab 3"
    },
    {
        index: 4,
        title: "Introdução a API REST: Conceitos e Prática",
        alternateTitle: "Introdução a API REST: Conceitos e Prática",
        picture: "/imagens-minicursos/rest.png",
        alternatePicture: "/imagens-minicursos/rest.png",
        date: "19/03",
        tags: [
            {
                name: "back-end",
                color: "bg-red-300",
                index: 0
            },
        ],
        description: "O objetivo deste minicurso é capacitar o aluno a entender como funciona a comunicação entre sistemas modernos através do estilo arquitetural REST. Os participantes aprenderão os fundamentos do protocolo HTTP (verbos e status codes), a estrutura de dados JSON e como projetar endpoints eficientes, aplicando conceitos de POO para organizar a lógica do backend.",
        prerequesites: [
            "Conhecimentos básicos em Programação Orientada a Objetos (POO).",
        ],
        palestrantes: [
            {
                name: "Breno Klywer",
                bio: "Desenvolvedor Java e graduando em Ciência da Computação pela UFERSA. Focado em backend e em simplificar o que parece complexo no desenvolvimento de software.",
                social: {
                    github:"https://github.com/Brenokly"
                },
                picture: "/imagens-minicursos/breno-klywer.jpeg" 
            },
            {
                name: "Rivaldo Freitas",
                bio: "Desenvolvedor Full Stack e graduando em Ciência e Tecnologia na UFERSA, com interesse em Engenharia da Computação e desenvolvimento de software. Trabalho programando em diversas linguagens, atualmente com foco em Java, a linguagem que carrega o símbolo do que eu mais gosto: café.",
                social: {
                    github: "https://github.com/rivaldodev",
                    linkedin: "https://linkedin.com/in/lrivsl"
                },
                picture: "/imagens-minicursos/rivaldo.jpeg"
            },
        ],
        localizacao: "Lab 7"
    },
    {
        index: 5,
        title: "Introdução ao desenvolvimento de agentes de IA com python e langchain",
        alternateTitle: "Introdução ao desenvolvimento de agentes de IA com python e langchain",
        picture: "/imagens-minicursos/ia-agente.png",
        alternatePicture: "/imagens-minicursos/ia-agente.png",
        date: "19/03",
        tags: [
            {
                name: "linguagem",
                color: "bg-green-300",
                index: 0
            },
            
        ],
        description: "Este minicurso prático foca na arquitetura básica de agentes de IA utilizando Python e LangChain. O conteúdo aborda a integração de Modelos de Linguagem (LLMs) com recursos externos, demonstrando como uma aplicação pode ir além da simples geração de texto para tomar decisões e executar ações. Serão detalhados conceitos essenciais de engenharia de prompts, estruturação de cadeias lógicas (chains), fornecimento de ferramentas simples (tool calling básico) e a implementação de memória de curto prazo no contexto da conversa. O objetivo é construir, passo a passo, um projeto real de um agente funcional, desmistificando o funcionamento interno das IAs modernas e capacitando o aluno a criar seus primeiros sistemas autônomos de forma estruturada.",
        prerequesites: [
            "Python Intermediário",
        ],
        palestrantes: [
            {
                name: "Pablo Lucas",
                bio: "Estudante de Ciência da Computação • Dev na Dunnas Tecnologia. Transformando café em código e bugs em aprendizado",
                social: {
                    github: "https://github.com/Pablosxz"
                   
                },
                picture: "/imagens-minicursos/pablo.jpeg" 
            },
            {
                name: "Thiago Coelho",
                bio: "Desenvolvedor Fullstack graduando em Ciência da Computação.",
                social: {
                    github: "https://github.com/thiagocoelhoo",
                    linkedin: "https://www.linkedin.com/in/thiago-coelho-2234b11ba/"
                   
                },
                picture: "/imagens-minicursos/thiago.jpeg"
            }
        ],
        localizacao: "Lab 4"
    },
    {
        index: 6,
        title: "Introdução a QA",
        alternateTitle: "Introdução a QA",
        picture: "/imagens-minicursos/qa.png",
        alternatePicture: "/imagens-minicursos/qa.png",
        date: "18/03",
        
        description: "Apresentar os fundamentos da qualidade de software, desde a atuação do QA em uma equipe ágil, criação de processos e técnicas de teste. Os estudantes serão capazes de entender as histórias, criar cenários de teste claros e realizar a priorização dos mesmos, como também realizar um bug report.",
        prerequesites: [
            "Metodologias Ágeis (Scrum/Kanban)"
        ],
        palestrantes: [
            {
                name: "Paulo Henrique Pereira",
                bio: "Quality Assurance & Analista de Dados. Atuação com garantia e controle de qualidade de software em times ágeis.",
                social: {
                    github: "https://github.com/devphpaulo",
                    linkedin: "https://www.linkedin.com/in/devphpaulo/"
                },
                picture: "/imagens-minicursos/ph-pereira.jpeg"
            },
            {
                name: "Brenno Kevyn",
                bio: "Quality Assurance & Cientista da Computação. Atuação em engenharia de software, sistemas distribuídos e qualidade.",
                social: {
                    github: "https://github.com/BrennoKM",
                    linkedin: "https://www.linkedin.com/in/brenno-kevyn/"
                   
                },
                picture: "/imagens-minicursos/brenno-kevyn.jpeg" 
            }
        ],
        localizacao: "Lab 4"
    },
    {
        index: 7,
        title: "Introdução a Software Embarcado - Como piscar um LED da maneira difícil",
        alternateTitle: "Introdução a Software Embarcado - Como piscar um LED da maneira difícil",
        picture: "/imagens-minicursos/software-embarcados.png",
        alternatePicture: "/imagens-minicursos/software-embarcados.png",
        date: "19/03",
        tags: [
        ],
        description: "O minicurso visa ensinar os conceitos bases de software embarcado, como se dá o fluxo de um projeto embarcado, e apresentar de forma prática as principais ferramentas.",
        prerequesites: [
            "C/C++ básico",
        ],
        palestrantes: [
            {
                name: "Paulo Henrique Andrade",
                bio: "",
                social: {
                    github: "https://github.com/andrade-paulo",
                    linkedin: "https://www.linkedin.com/in/andrade-paulo/"
                },
                picture: "/imagens-minicursos/ph-andrade.jpeg" 
            }
        ],
        localizacao: "Lab 6"
    },
];

const palestranteSelecionado: Palestrante = {
    name: "Eduardo Guerra",
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
            answer: 'A abertura será localizada no Auditório da Reitoria.'
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
    //dia 01 -----------------------------------------------------------------------------------------------------------
    {
        index: 0,
        dia: 1,
        hora: "08:00 - 08:45",
        titulo: "Abertura Oficial do evento",
        descricao: "Abertura do evento com a equipe organizadora acadêmica, a coordenção do curso, chefia do departamento, coordenação da graduação e pós-graduação do departamento de computação.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 1,
        dia: 1,
        hora: "08:45 - 09:00",
        titulo: "Apresentação da Empresa Júnior de Computação",
        descricao: "Apresentação da empresa júnior de computação, a Lotus Tech.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 2,
        dia: 1,
        hora: "09:00 - 09:15",
        titulo: "Comunicado do Centro Acadêmico de Ciência da Computação",
        descricao: "Comunicado do Centro Acadêmico de Ciência da Computação",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 3,
        dia: 1,
        hora: "09:15 - 10:00",
        titulo: "Apresentação do programa de suporte da Google",
        descricao: "Product Google Experts: conheça o programa de suporte da Google",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 4,
        dia: 1,
        hora: "10:00 - 10:30",
        titulo: "Coffee break",
        descricao: "",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 5,
        dia: 1,
        hora: "10:30 - 11:30",
        titulo: "Palestra \"Do petróleo à informação: como a tecnologia impulsiona a indústria do óleo e gás\"",
        descricao: "A palestra apresentará uma visão geral sobre a aplicação de tecnologia e sistemas digitais na indústria do petróleo, abordando os principais desafios ao longo de toda a cadeia produtiva, desde a perfuração e produção até os processos de monitoramento e fiscalização. ",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 6,
        dia: 1,
        hora: "11:30 - 11:45",
        titulo: "Apresentação da equipe PegAzuls",
        descricao: "Apresentação da equipe PegAzuls.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 7,
        dia: 1,
        hora: "11:45 - 12:00",
        titulo: "Apresentação da Maratona de Programação",
        descricao: "Abertura das inscrições para a Maratona de Programação, detalhando o eventos.",
        localizacao: "Auditório da Reitoria",
        pageExists: true,
        page: "/eventos/maratona-de-programacao"
    },
    {
        index: 8,
        dia: 1,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },

    //dia 02 -----------------------------------------------------------------------------------------------------------
    {
        index: 9,
        dia: 2,
        hora: "08:00 - 09:00",
        titulo: "Apresentação do curso Ciência da computação",
        descricao: "Apresentação do curso Ciência da computação para visitantes",
        localizacao: "Reitoria"
    },
        {
        index: 10,
        dia: 2,
        hora: "09:00 - 12:00",
        titulo: "Mostra científica",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da graduação. ",
        localizacao: "Varanda da ASSECOM"
    },
    {
        index: 11,
        dia: 2,
        hora: "08:00 - 08:20",
        titulo: "SESSÃO TÉCNICA I: Análise de Redes de Ótimos Locais para Seleção de Metaheurísticas Baseadas na Topologia do Espaço de Busca.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 12,
        dia: 2,
        hora: "08:20 - 08:40",
        titulo: "SESSÃO TÉCNICA I: Uso de Meta-heurística e Simulação Baseada em Agentes na Proposição de Redes de Transporte Público Coletivo Urbano por Ônibus.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 13,
        dia: 2,
        hora: "08:40 - 09:00",
        titulo: "SESSÃO TÉCNICA I: Otimização do problema dos K-Servos utilizando uma implementação híbrida do Q-Learning.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },

    {
        index: 14,
        dia: 2,
        hora: "09:00 - 10:00",
        titulo: "Palestra \"Do Dado à Decisão: Pesquisa Operacional e Ciência de Dados nas Empresas\"",
        descricao: "Nesta palestra será discutido como a integração entre Ciência de Dados e Pesquisa Operacional permite construir soluções analíticas capazes de apoiar decisões estratégicas e operacionais em empresas.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 15,
        dia: 2,
        hora: "10:00 - 10:15",
        titulo: "Cofee Break",
        descricao: "",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 16,
        dia: 2,
        hora: "10:15 - 10:35",
        titulo: "SESSÃO TÉCNICA II: Proposta de framework para mitigar ataques adversariais em LLMs.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 17,
        dia: 2,
        hora: "10:35 - 10:55",
        titulo: "SESSÃO TÉCNICA II: Uso de Inteligência Artificial Generativa na Elicitação de Requisitos de Usabilidade: uma abordagem do método USARP.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 18,
        dia: 2,
        hora: "10:55 - 11:15",
        titulo: "SESSÃO TÉCNICA II: Processo de Revisão Sistemática da Literatura Apoiado por Inteligência Artificial.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 19,
        dia: 2,
        hora: "11:15 - 11:35",
        titulo: "SESSÃO TÉCNICA III: Sistema de Mapeamento do TDAH.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 20,
        dia: 2,
        hora: "11:35 - 11:55",
        titulo: "SESSÃO TÉCNICA III: Recursos Educacionais para o Ensino de Programação: mapeamento da literatura e das práticas docentes para a proposição de um repositório baseado em ontologia.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 21,
        dia: 2,
        hora: "11:55 - 12:15",
        titulo: "SESSÃO TÉCNICA III: Transformers.js para análise de sentimentos.",
        descricao: "Sessão técnica de apresentação de trabalhos ciêntíficos da pós-graduação.",
        localizacao: "LCC - sala multimídia"
    },
    {
        index: 22,
        dia: 2,
        hora: "14:00 - 18:00",
        titulo: "Minicursos",
        descricao: "Minicursos oferecidos por alunos e professores do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/minicursos"
    },

    //dia 03 -----------------------------------------------------------------------------------------------------------
    {
        index: 23,
        dia: 3,
        hora: "08:00 - 12:00",
        titulo: "Maratona de Programação",
        descricao: "Maratona de programação com alunos do curso de Ciência da Computação.",
        localizacao: "LCC",
        pageExists: true,
        page: "/eventos/maratona-de-programacao"
    },
   
    {
        index: 24,
        dia: 3,
        hora: "09:00 - 10:00",
        titulo: "Palestra \"Propriedade Intelectual\"",
        descricao: "Palestra sobre Propriedade Intelectual.",
        localizacao: "Auditório da Reitoria"
    },
    {
        index: 25,
        dia: 3,
        hora: "10:00 - 11:00",
        titulo: "Palestra \"Assistência estudantil na pós-graduação\"",
        descricao: "Palestra sobre assistência estudantil na pós-graduação.",
        localizacao: "Auditório da Reitoria"
    },
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
        index: 2,
        src: "/imagens-galeria/3.jpeg",
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
        nome: "UFERSA",
        alt: "Universidade Federal Rural do Semi-Árido",
        imagem: "/imagens-patrocinadores/ufersa.png",
        link: "https://ufersa.edu.br/"
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
        nome: "Proae",
        alt: "Proae",
        imagem: "/imagens-patrocinadores/proae.png",
        link: "https://proae.ufersa.edu.br/sobre-a-proae/"
    },
    {
        index: 3,
        nome: "CCEN",
        alt: "Centro de Ciências Exatas e da Natureza",
        imagem: "/imagens-patrocinadores/ccen.png",
        link: "https://ccen.ufersa.edu.br/"
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
        nome: "smar",
        alt: "smar",
        imagem: "/imagens-patrocinadores/smar.png",
        link: "https://www.smar.com.br/pt"
    },
    {
        index: 6,
        nome: "Idus",
        alt: "Idus, Inteligência Industrial",
        imagem: "/imagens-patrocinadores/idus.png",
        link: "https://idus.com.br"
    },
    {
        index: 7,
        nome: "EDC",
        alt: "EDC, Automação",
        imagem: "/imagens-patrocinadores/edc.png",
        link: "https://www.smar.com.br/pt"
    },
    {
        index: 8,
        nome: "Sales",
        alt: "Madereira Sales",
        imagem: "/imagens-patrocinadores/madereira-salles.png",
        link: "https://www.instagram.com/madeireirasales/"
    },
    {
        index: 9,
        nome: "Dunnastech",
        alt: "Dunnastech",
        imagem: "/imagens-patrocinadores/dunnas.png",
        link: "https://www.dunnastecnologia.com.br/index.html"
    },
    {
        index: 10,
        nome: "M.morena",
        alt: "M.morena",
        imagem: "/imagens-patrocinadores/morena.png",
        link: "https://www.instagram.com/mmorenabeachwear_"
    },
    {
        index: 11,
        nome: "Cacim",
        alt: "Cacim Laboratório",
        imagem: "/imagens-patrocinadores/cacim.png",
        link: "https://cacim.com.br"
    },
    {
        index: 12,
        nome: "La Passion",
        alt: "La Passion",
        imagem: "/imagens-patrocinadores/la-passion.png",
        link: "https://www.instagram.com/lapassionlingerie/"
    },
    {
        index: 13,
        nome: "Três corações",
        alt: "Três corações",
        imagem: "/imagens-patrocinadores/tres-coracoes.png",
        link: "https://https://www.cafe3coracoes.com.br/"
    }
    {
        index: 13,
        nome: "Três corações",
        alt: "Três corações",
        imagem: "/imagens-patrocinadores/3coracoes.png",
        link: "https://https://www.cafe3coracoes.com.br/"
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
        content: "Para participar, se é necessário formar um grupo com 3 alunos, sem restrições de período! Ambas a premiação e a competição serão no dia 24/04, das 8:00 às 12:00, no Lab 4 do prédio do LCC. Não é necessário saber alguma linguagem de programação específica, espera-se que o grupo decida usar de uma linguagem das mais conhecidas (ex. java, c++).",
        address: "/"
    }
    
];

export { terminalFiles, minicursos, palestra, FAQuestions, cronograma, imagens, patrocinadores }
