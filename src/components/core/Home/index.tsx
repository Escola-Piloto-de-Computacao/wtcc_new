'use client';

import React, { useEffect } from 'react';

import Patrocinadores from '@/components/core/Home/Patrocinadores';
import { Titles, Images } from '@/components/core/Home/Titles';
import MapArea from '@/components/core/Home/MapArea';

const MainArea = () => {

    useEffect(() => {
        if (window.location.hash === '#mapa') {
            const scrollMarkElement = document.getElementById('mapa');
            if (scrollMarkElement) {
                const offsetTop = scrollMarkElement.offsetTop;
                const offset = 210;
                window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <section className="lg:mt-3 lg:grid lg:grid-cols-12">
            <Titles />
            <Images />
            <MapArea />
            <Patrocinadores />
        </section>
    );
};

export default MainArea;