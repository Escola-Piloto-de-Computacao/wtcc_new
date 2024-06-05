import { Step } from './definitions';
import Link from 'next/link';

import { HiCursorClick } from 'react-icons/hi';

export const steps: Step[] = [
    {
        index: 0,
        title: "Achando o evento pelo SIGAA",
        image: "/imagens-inscrever-se/img1.jpg",
        imageDesc: "Dentro do site do SIGAA",
        content: (
            <p>Para se inscrever, acesse o site do <a href="https://sigaa.ufersa.edu.br/sigaa/portais/discente/discente.jsf">SIGAA</a>, e faça login na sua conta. Em seguida vá até a aba de Extensão &gt; Inscrição Online em Ações de Extensão.</p>
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
            <p>Na página de inscrição, clique em &quot;Inscrições abertas&quot; e escolha o WTCC.</p>
        )
    },
    {
        index: 3,
        title: "Escolhendo o evento",
        image: "/imagens-inscrever-se/img5.jpg",
        imageDesc: "Na página do WTCC",
        content: (
            <p>Na página de eventos, escolha o WTCC para se inscrever.</p>
        )
    },
    {
        index: 4,
        title: "Enviando seus dados",
        image: "/imagens-inscrever-se/img6.jpg",
        imageDesc: "Dentro do evento",
        content: (
            <div>
                <p>Após escolher o evento do WTCC, crie um arquivo .txt com as informações solicitadas (seu nome, período atual e curso) para enviar e ter sua inscrição aprovada.</p>
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
            <div className="h-full flex flex-col justify-between items-start">
                <p>Inscrição feita! Em breve a mesma será aprovada pelos organizadores do evento!</p>
                <div className="mt-7 md:mt-0 xs:max-md:w-full self-end">
                    <div className="flex">
                        <div className="bg-yellow-200 ml-auto px-2 rounded-md">
                            <Link href="/faq" legacyBehavior passHref>
                                <span className="italic cursor-pointer">Ainda tenho dúvidas!<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span>
                            </Link>
                        </div>
                    </div>
                    <Link href="/inscrever-se/minicursos" legacyBehavior passHref>
                        <span className="italic cursor-pointer">Como me inscrevo nos minicursos?<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span>
                    </Link>
                </div>
            </div>
        )
    }
];