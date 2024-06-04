import { cn } from '@/lib/utils';

import Image from 'next/image';

import { Projeto } from '@/lib/definitions';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode; }) => {
    return (
        <div
            className={cn(
                "w-full grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({ className, projeto }: { className?: string; projeto: Projeto }) => {
    return (
        <div
            className={cn(
                "h-full row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-slate-200 dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {projeto.image && <Image src={projeto.image} alt={projeto.title} width={300} height={200} quality={100} className="rounded-xl mx-auto" />}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {projeto.icon}
                <div className="font-sans font-medium dark:text-neutral-200 mb-2">
                    {projeto.title}
                </div>
                <div className="font-sans font-normal text-xs dark:text-neutral-300">
                    {projeto.description}
                </div>
            </div>
        </div>
    );
};