import React from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Maratona() {
    return (
        <div className="pb-8 mx-0 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col xl:flex-row gap-6 justify-center">
            <div className="order-last xl:order-1">
                <h1 className="text-4xl font-bold text-center">Maratona de Programação</h1>
                <Tabs defaultValue='Preparação' className="mt-4">
                    <TabsList className="flex gap-4">
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