import React from 'react';

import Image from 'next/image';
import MyTerminal from '@/components/core/Eventos/MyTerminal';

export default function Maratona() {
    return (
        <div className="pb-24 lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:flex-row gap-6 justify-center">
            <div className="order-last xl:order-1 flex flex-col gap-8">
                <h1 className="text-4xl text-center font-mono">Maratona de Programação</h1>
                <MyTerminal />
            </div>
            <div className="ml-24 hidden xl:block order-1 xl:order-last w-[28vw]">
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