import { Avatar } from 'antd';
import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { palestra } from '@/lib/data';

export default function Palestra() {
    return (
        <div className="h-[72vh] grid grid-cols-12 gap-10 mt-40">
            <div className="col-start-2 col-span-5 rounded-xl">
                <img src={palestra.img} alt={"Foto da palestra " + palestra.name} />
            </div>
            <div className="col-start-7 col-span-5 mt-4 ml-6 flex flex-row row-span-1 flex-wrap">
                <div className="">
                    <h2 className="text-3xl font-bold text-left font-poppings">{palestra.name}</h2>
                    <p className="mt-5 ml-6 text-justify">{palestra.description}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-left font-poppings">{palestra.speaker.name}</h3>
                    <div className="h-10 mt-5 ml-6 grid grid-cols-6 gap-2">
                        <div className="mt-1 mr-2">
                            {/* make the avatar image responsive */}
                            <Avatar
                                size={64}
                                icon={<AntDesignOutlined />}
                            >
                                <img src={palestra.img} alt={"Foto de " + palestra.speaker.name} />
                            </Avatar>
                        </div>
                        <p className="text-justify col-span-5">{palestra.speaker.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};