import { Avatar } from 'antd';
import React from 'react';
import { BsPersonFill } from "react-icons/bs";
import { palestra } from '@/lib/data';
import Image from 'next/image';

export default function Palestra() {
    return (
        <div className="h-[79vh] grid grid-cols-12 gap-9 mt-40">
            <div className="col-start-2 col-span-5 rounded-xl">
                <Image
                    src={palestra.img}
                    alt={"Foto da palestra " + palestra.name}
                    width={500} height={500}
                    className="rounded-md h-[75vh] w-full object-cover" />
            </div>
            <div className="col-start-7 col-span-5 mt-4 flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-base font-light">06/06 - 08:00</p>
                        <h2 className="text-3xl font-bold text-left font-poppings mr-16">{palestra.name}</h2>
                    </div>
                    <div className="ml-2 flex flex-col gap-2 text-justify indent-5">
                        <p className="">{palestra.description}</p>
                        <p className="">{palestra.descriptionCont}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <BsPersonFill size={30} />
                        <h3 className="mt-[0.18rem] text-xl font-bold text-left font-poppings">{palestra.speaker.name}</h3>
                    </div>
                    <div className="ml-2 indent-5">
                        <p className="text-justify mr-28">{palestra.speaker.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};