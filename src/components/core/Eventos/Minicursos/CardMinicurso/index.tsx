import React from 'react';
import { Tag } from '@/components/ui/tag';
import { Minicurso } from '@/lib/definitions';
import LogoPicker from '@/components/core/Eventos/Minicursos/CardMinicurso/LogoPicker';
import { MinicourseCard, MinicourseCardSubtitle, MinicourseCardHeader, MinicourseCardTitle, MinicourseCardImage } from '@/components/ui/minicourse-card';
import { cn } from '@/lib/utils';

interface CardMinicursoProps { minicurso: Minicurso; onOpenModal: (modalNum: number) => void; className?: string };
const CardMinicurso: React.FC<CardMinicursoProps> = ({ minicurso, onOpenModal, className }) => {

    const handleClick = () => {
        onOpenModal(minicurso.index);
    };

    return (
        <div className={cn("col-span-1", className)} onClick={handleClick}>
            <MinicourseCard>
                <MinicourseCardHeader>
                    <div className="flex justify-between">
                        <div className="flex flex-row flex-wrap gap-2">
                            {minicurso.tags?.map((tag) => (
                                <div className="flex gap-1" key={tag.index}>
                                    <Tag className={`flex gap-1 px-2 ${tag.color}`}>
                                        <LogoPicker label={tag.name} />
                                        {tag.name}
                                    </Tag>
                                </div>
                            ))}
                        </div>
                        {/*<HiCursorClick />*/}
                        <p className="text-sm font-mono">{minicurso.localizacao}</p>
                    </div>
                </MinicourseCardHeader>
                <MinicourseCardImage src={minicurso.picture} alt={minicurso.title} />
                <MinicourseCardTitle>
                    {minicurso.title}
                </MinicourseCardTitle>
                <MinicourseCardSubtitle>
                    {minicurso.alternateTitle}
                </MinicourseCardSubtitle>
            </MinicourseCard>
        </div>
    );
};

export default CardMinicurso;