import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="bg-[#04081D] text-white mt-12 lg:mt-36">
            <div className="flex flex-col col-span-2 lg:grid lg:grid-cols-6 py-12 h-full mx-10 pb-14 items-center">
                <div className="lg:col-span-2 hidden lg:flex h-40 pt-3">
                    <a href="https://escolapilotodecomputacao.com.br" target="_blank">
                        <img src="logom1.svg" alt="" />
                    </a>
                </div>
                <div className="lg:col-span-2 flex flex-col text-white justify-center gap-5 pb-14 lg:pb-0">
                    <h3 className="text-center text-xl lg:mr-14 pt-4 lg:pt-0">Contato</h3>
                    <div className="lg:ml-14">
                        <div className="flex items-center gap-2">
                            <HiOutlineMail size={30} />
                            <p className="w-1/2 no-underline hover:underline text-blue-500" ><a href={`mailto:escolapilotodecomputacao@gmail.com`}>escolapilotodecomputacao@gmail.com</a></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsInstagram size={30} />
                            <a href="https://www.instagram.com/epc_ufersa/#" className="w-1/2 h-6 ml-6 no-underline hover:underline text-blue-500">@epc_ufersa</a>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 flex items-center flex-col justify-center gap-2">
                    <h3 className="text-xl">Localização</h3>
                    <img src="/localizacao.svg" alt="" />
                    <p className="ml-7">Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró RN | CEP: 59.625-900, +55 84 3317-8200 CNPJ: 24.529.265/0001-40</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;