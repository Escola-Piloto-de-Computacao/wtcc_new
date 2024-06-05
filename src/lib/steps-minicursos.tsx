import Link from 'next/link';

import { Step } from './definitions';

import { HiCursorClick } from 'react-icons/hi';

export const steps: Step[] = [
    {
        index: 0,
        title: "Achando os minicursos disponíveis",
        image: "/imagens-inscrever-se/minicursos/img1.png",
        imageDesc: "Dentro do site do SIGAA",
        content: (
            <div className="h-full flex flex-col justify-between items-start">
                <p>Para inscrever-se nos minicursos que ocorrerão na parte da tarde, clique nesse botão na aba do evento!</p>
                <div className="mt-7 md:mt-0 xs:max-md:w-full self-end">
                    <Link href="/inscrever-se" legacyBehavior passHref>
                        <span className="italic cursor-pointer">Ainda não me inscrevi no evento!<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span>
                    </Link>
                </div>
            </div>
        )
    },
    {
        index: 1,
        title: "Inscrevendo-se no minicurso",
        image: "/imagens-inscrever-se/minicursos/img2.png",
        imageDesc: "Selecionando o minicurso",
        content: (
            <div className="h-full flex flex-col justify-between gap-3">
                <div>
                    <p>Escolha seu minicurso e inscreva-se! Fique atento a data do minicurso.</p>
                    <p>As datas, horários e localização oficial dos minicursos estão todas na página de <Link href="/eventos/minicursos" legacyBehavior passHref><span className="italic cursor-pointer">minicursos<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span></Link>!</p>
                </div>
                <div className="flex">
                    <div className="bg-yellow-200 ml-auto px-2 rounded-md">
                        <Link href="/faq" legacyBehavior passHref>
                            <span className="italic cursor-pointer">Ainda tenho dúvidas!<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
];