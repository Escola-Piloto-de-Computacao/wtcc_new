import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { palestra } from '@/lib/data';
import Image from 'next/image';

export default function Palestra() {
    return (
        <div className="mb-20 flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-9 lg:mt-36">
            <div className="md:col-start-1 lg:col-start-2 md:col-span-6 lg:col-span-5 rounded-xl">
                <Image
                    src={palestra.img}
                    alt={"Foto da palestra " + palestra.name}
                    width={500} height={600}
                    className="rounded-md h-[35vh] sm:h-[60vh] md:h-[75vh] w-full object-cover object-center"
                    loading='eager'
                />
            </div>
            <div className="md:col-start-7 md:col-span-6 lg:col-span-5 lg:mt-4 flex flex-col gap-8 lg:gap-12">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-base font-light">06/06 - 08:00</p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-left font-poppings mr-5 lg:mr-16">{palestra.name}</h2>
                    </div>
                    <div className="ml-2 flex flex-col gap-2 text-justify indent-5">
                        <p className="">{palestra.description}</p>
                        <p className="">{palestra.descriptionCont}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <BsPersonFill size={30} />
                        <h3 className="mt-[0.18rem] text-medium lg:text-xl font-bold text-left font-poppings">{palestra.speaker.name}</h3>
                    </div>
                    <div className="ml-2 indent-5">
                        <p className="text-justify mr-5 lg:mr-16">{palestra.speaker.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};