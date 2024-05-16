import React from 'react';
import { Minicurso } from '@/lib/definitions';

interface ModalContentProps {
    minicourse: Minicurso;
};
const ModalContent: React.FC<ModalContentProps> = ({ minicourse }) => {
    return (
        <div className="w-full flex gap-10">
            <div>
                <h1 className="text-3xl font-semibold">{minicourse.title}</h1>
                <p>{minicourse.description}</p>
            </div>
            <div>
                <img src={minicourse.picture} alt={minicourse.title} className="w-60 h-60" />
            </div>
        </div>
    );
};

export { ModalContent };