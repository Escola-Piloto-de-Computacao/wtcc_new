import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';

const ExtraInfoCard = () => {
    return (
        <div className="md:hidden flex gap-1">
            <BsInfoCircle size={20} />
            <p className="text-start text-sm">Clique no minicurso para mais informações!</p>
        </div>
    );
};

export default ExtraInfoCard;