import { Step } from './definitions';

export const steps: Step[] = [
    {
        index: 0,
        title: "Achando o evento pelo SIGAA",
        image: "/imagens-inscrever-se/img1.jpg",
        imageDesc: "Dentro do site do SIGAA",
        content: (
            <p>Para se inscrever, acesse o site do <a href="https://sigaa.ufersa.edu.br/sigaa/portais/discente/discente.jsf">SIGAA</a>, e faça login na sua conta. Em seguida vá até a aba de Extensão &gt; Inscrição Online em Ações de Extensão</p>
        )
    },
    {
        index: 1,
        title: "No site do GOV",
        image: "/imagens-inscrever-se/img2.jpg",
        imageDesc: "No site de login do .GOV",
        content: (
            <p>Faça login na sua conta GOV com seu CPF e senha.</p>
        )
    },
    {
        index: 2,
        title: "Se inscrevendo no evento",
        image: "/imagens-inscrever-se/img4.jpg",
        imageDesc: "Na página de inscrição",
        content: (
            <p>Na página de inscrição, clique em "Inscrições abertas" e escolha o WTCC</p>
        )
    },
    {
        index: 3,
        title: "Escolhendo o evento",
        image: "/imagens-inscrever-se/img5.jpg",
        imageDesc: "Na página do WTCC",
        content: (
            <p>Na página de eventos, escolha o WTCC para se inscrever</p>
        )
    },
    {
        index: 4,
        title: "Enviando seus dados",
        image: "/imagens-inscrever-se/img6.jpg",
        imageDesc: "Dentro do evento",
        content: (
            <div>
                <p>Após escolher o evento do WTCC, crie um arquivo .txt com as informações solicitadas para enviar e ter sua inscrição aprovada.</p>
                <p>É crucial que envie essas informações para que suas horas sejam contabilizadas!</p>
            </div>
        )
    },
    {
        index: 5,
        title: "Pronto!",
        image: "/imagens-inscrever-se/img7.jpg",
        imageDesc: "Após o envio dos dados",
        content: (
            <div className="flex flex-col gap-2">
                <p>Inscrição feita! Em breve a mesma será aprovada pelos organizadores</p>
            </div>
        )
    }
];