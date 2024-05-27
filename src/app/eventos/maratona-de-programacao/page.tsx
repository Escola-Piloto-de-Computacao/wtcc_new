import React from 'react';

import Image from 'next/image';
import MyTerminal from '@/components/core/Eventos/MyTerminal';
import { BsInfoCircle } from 'react-icons/bs';

export default function Maratona() {
    return (
        <div className="pb-16 lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:grid xl:grid-cols-12 gap-8 justify-center">
            <div className="order-last xl:order-1 col-span-7 flex flex-col gap-8">
                <h1 className="text-4xl text-center font-mono">Maratona de Programação</h1>
                <div className="flex flex-col gap-2 h-full">
                    <div className="w-full overflow-hidden">
                        <MyTerminal />
                    </div>
                    <div className="flex gap-1">
                        <BsInfoCircle size={15} />
                        <p className="text-xs text-center">Clique na janela do terminal e digite <span className="font-fira bg-[#212121] text-white px-[0.2rem] rounded-sm">help</span></p>
                    </div>
                </div>
            </div>
            <div className="hidden xl:flex w-[28vw] order-1 xl:order-last col-span-5 place-content-center justify-content-end">
                <Image
                    src="/maratona.png"
                    alt="Maratona de Programação"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};