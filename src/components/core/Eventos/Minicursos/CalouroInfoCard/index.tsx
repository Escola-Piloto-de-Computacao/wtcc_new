import React from 'react';
import { cn } from '@/lib/utils';
import { BsInfoCircle } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';

interface CalouroInfoCardProps { className?: string }
const CalouroInfoCard: React.FC<CalouroInfoCardProps> = ({ className }) => {
    return (
        <div className={cn("absolute z-20 right-0 mr-10 mt-3 flex gap-1", className)}>
            <BsInfoCircle size={20} />
            <p>Estou entrando no curso agora!</p>
            <div className="pt-[0.15rem]">
                <HiCursorClick size={15} />
            </div>
        </div>
    );
};

export default CalouroInfoCard;