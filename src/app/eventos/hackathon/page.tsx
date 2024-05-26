import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Hackathon() {
    return (
        <div className="pb-24 lg:pb-[9.16rem] xl:pb-24 xl:h-[68vh] lg:mb-16 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:flex-row gap-6 justify-center">
            <div className="order-last xl:order-1">
                <h1 className="text-4xl text-center font-fira font-extralight">Hackathon</h1>
                <Tabs defaultValue='Preparação' className="mt-4">
                    <TabsList className="flex gap-4 font-fira">
                        <TabsTrigger value='Preparação'>Preparação</TabsTrigger>
                        <TabsTrigger value='Inscrição'>Inscrição</TabsTrigger>
                        <TabsTrigger value='Competição'>Competição</TabsTrigger>
                    </TabsList>
                    <TabsContent value='Preparação' className="mt-4">
                        <p>Preparação para a maratona de programação.</p>
                    </TabsContent>
                    <TabsContent value='Inscrição' className="mt-4">
                        <p>Inscrição para a maratona de programação.</p>
                    </TabsContent>
                    <TabsContent value='Competição' className="mt-4">
                        <p>Competição de maratona de programação.</p>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="hidden xl:block order-1 xl:order-last w-[28vw]">
                {/*change image*/}
                <Image
                    src="/hackaton.jpg"
                    alt="Hackathon"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};