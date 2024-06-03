'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { terminalFiles } from '@/lib/data';
import { uppV2 } from '@/lib/motion-variants';

const MaratonaText = () => {
    return (
        <motion.div initial="hidden" animate="visible" variants={uppV2} className="h-[55vh] text-justify">
            <p>{terminalFiles[0].content}</p>
        </motion.div>
    );
};

export default MaratonaText;