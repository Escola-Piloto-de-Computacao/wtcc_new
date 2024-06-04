import React, { useState } from 'react';

import { Minicurso } from '@/lib/definitions';

import { Button } from '@/components/ui/button';

import Palestrantes from '@/components/core/Eventos/Minicursos/ModalContent/Palestrante';

import { Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

interface ModalContentProps { minicourse: Minicurso; };
const ModalContent: React.FC<ModalContentProps> = ({ minicourse }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    function handleModalOpen(open: boolean) {
        setModalOpen(open);
    }

    return (
        <div className="w-full sm:grid sm:grid-cols-12 flex flex-col mb-3">
            <div className="sm:col-span-7 flex flex-col gap-4 sm:mr-8">
                <h1 className="text-3xl font-semibold">{minicourse.title}</h1>
                <p className="ml-2 text-base tracking-wide text-justify hyphens-auto">{minicourse.description}</p>
            </div>
            <div className="hidden sm:block sm:col-span-5 mt-10">
                {minicourse.alternatePicture ? (
                    <Image src={minicourse.alternatePicture} alt={minicourse.title} width={600} height={400} quality={80} loading='lazy' className="rounded-md object-cover" />
                ) : (
                    <Image src={minicourse.picture} alt={minicourse.title} width={600} height={400} quality={80} loading='lazy' className="rounded-md object-cover" />
                )}
            </div>
            <div className="sm:col-span-12 mt-4 sm:mt-7">
                {minicourse.prerequesites && minicourse.prerequesites.length > 0 ? (
                    <>
                        <h3 className="text-lg font-semibold">Pré-requisitos:</h3>
                        <ul className="list-disc">
                            {minicourse.prerequesites.map((prerequisite, index) => (
                                <li key={index} className="ml-8 text-base tracking-wide">{prerequisite}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h3 className="text-lg font-semibold text-center sm:text-left pb-6">Não há pré-requisitos</h3>
                )}
            </div>
            <div className="sm:col-span-12 w-full sm:grid sm:grid-cols-12 flex justify-center">
                <Button
                    variant="default"
                    size="lg"
                    className="text-center sm:col-start-9 sm:col-span-3 bg-sky-400 hover:bg-sky-500 px-12 sm:px-0 text-lg cursor-pointer"
                    onClick={() => handleModalOpen(true)}
                >
                    Inscrever-se
                </Button>
                <Modal
                    centered
                    open={modalOpen}
                    footer={null}
                    onCancel={() => setModalOpen(false)}
                    width={350}
                    className=""
                >
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-lg md:text-xl">Você já se inscreveu no evento?</h2>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link href="/inscrever-se/minicursos" legacyBehavior passHref className="w-8 md:w-20">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="text-center bg-sky-400 hover:bg-sky-500 px-12 sm:px-2 text-lg cursor-pointer">
                                    Sim
                                </Button>
                            </Link>
                            <Link href="/inscrever-se" legacyBehavior passHref>
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="text-center bg-sky-400 hover:bg-sky-500 px-12 sm:px-2 text-lg cursor-pointer">
                                    Não
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="sm:col-span-12 mb-3 mt-5 sm:mx-3">
                <div className="border-t border-gray-300 my-6"></div>
                <Palestrantes palestrantes={minicourse.palestrantes} />
            </div >
        </div >
    );
};

export default ModalContent;