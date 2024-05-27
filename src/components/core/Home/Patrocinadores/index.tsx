'use client';

import React, { useEffect, useState } from 'react';
import { patrocinadores } from '@/lib/data';
import Image from 'next/image';

const TypeWriter = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setKey(prevKey => prevKey + 1);
        }, 8000); // 8 seconds

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <h2 key={key} className="text-left ml-3 my-2 relative w-[max-content] font-mono text-2xl lg:text-3xl before:absolute before:inset-0 before:animate-typewriter before:bg-gray-400 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">Patrocinadores</h2>
    );
};

const Patrocinadores = () => {
    return (
        <div className="mt-28 md:mt-36 mb-16 col-span-12 flex flex-col mx-10 lg:mx-20 bg-gray-400 p-2 pb-6 rounded-lg">
            <TypeWriter />
            <div className="flex flex-wrap">
                {patrocinadores.map((patrocinador) => (
                    <div key={patrocinador.index} className="flex justify-center items-center w-1/2 lg:w-1/5">
                        <Image
                            src={patrocinador.imagem}
                            alt={patrocinador.alt}
                            width={200}
                            height={200}
                            className="w-3/4 h-auto cursor-pointer"
                            loading="lazy"
                            onClick={() => window.open(patrocinador.link, '_blank')}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patrocinadores;