'use client';

import React from 'react';
import { useBearStore } from '@/lib/store';

const Hydration = () => {
    React.useEffect(() => {
        useBearStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;