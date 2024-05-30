'use client';

import React from 'react';
import Link from 'next/link';
import { HiCursorClick } from 'react-icons/hi';
import { FaMapLocationDot } from 'react-icons/fa6';

const Map = () => {
    return (
        <>
            <iframe className="w-full h-full" src="https://www.google.com/maps/d/u/1/embed?mid=1RKBjmg501-bxiRTayGpzF-5STwfSQcU&ehbc=2E312F&noprof=1"></iframe>
        </>
    );
};

const MapArea = () => {
    return (
        <div className="col-span-12 lg:grid lg:grid-cols-6 lg:gap-10 flex flex-col lg:mx-24 pt-10 lg:pt-16" id="mapa">
            <div className="col-start-2 col-span-2 flex flex-col gap-2 mb-6 lg:pb-0">
                <div className="flex lg:justify-end justify-center gap-2 mt-4">
                    <FaMapLocationDot size={30} className="mt-[0.15rem]" />
                    <h1 className="text-3xl">Onde será o evento?</h1>
                </div>
                <p className="text-justify indent-4">Veja no mapa a seguir onde ocorrerá o evento, assista aos minicursos nos Laboratórios do do prédio LCC, a palestra e abertura do evento no Auditório da PROEC.</p>
                <p className="text-justify indent-4">Descubra onde ocorerrá cada parte do WTCC na página <Link href="/cronograma"><span className="px-1 italic">Cronograma<HiCursorClick className="inline-flex ml-[0.2rem] mb-[0.5rem]" size={10} /></span></Link>.</p>
            </div>
            <div className="col-span-3 w-full h-[45vh]">
                <Map />
            </div>
        </div>
    );
};

export default MapArea;