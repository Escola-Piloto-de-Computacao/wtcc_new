"use client";

import React from 'react';
import Image from 'next/image';
import {
    EmailShareButton,
    EmailIcon,
    InstagramIcon
} from 'next-share';

const Footer = () => {
    return (
        <footer className="bg-[#04081D] text-white mt-5">
            <div className="flex flex-col col-span-2 lg:grid lg:grid-cols-12 pt-3 lg:pt-12 h-full mx-10 pb-14 items-center md:gap-5 lg:gap-0">
                <div className="order-last lg:order-1 lg:col-span-3 hidden md:flex h-40 pt-0 lg:pt-3">
                    <a href="https://escolapilotodecomputacao.com.br" target="_blank">
                        <Image
                            src="/logom1.svg"
                            alt="Logo da EPC"
                            width={300}
                            height={200}
                            className="w-full h-full"
                        />
                    </a>
                </div>
                <div className="order-1 lg:col-start-6 lg:col-span-2 flex flex-col text-white justify-center gap-5 pb-10 lg:pb-0 pt-6 lg:pt-0">
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-6">
                        <h3 className="text-xl">Fale conosco!</h3>
                        <div className="flex items-center justify-center gap-12">
                            <EmailShareButton url="escolapilotodecomputacao@gmail.com" subject="Contato">
                                <EmailIcon size={60} round />
                            </EmailShareButton>
                            <a href="https://www.instagram.com/epc_ufersa/" target="_blank">
                                <InstagramIcon size={60} round />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="order-2 lg:order-last lg:col-start-10 lg:col-span-4 flex items-center flex-col justify-center gap-2">
                    <div className="flex gap-2">
                        <h3 className="text-xl">Localização</h3>
                        <Image
                            src="/localizacao.svg"
                            alt=""
                            width={12}
                            height={12}
                            className="w-8 h-8"
                        />
                    </div>
                    <p className="text-center">Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró RN | CEP: 59.625-900, +55 84 3317-8200 CNPJ: 24.529.265/0001-40</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;