'use client';

import React, { useState, useEffect } from 'react';
import { useChangeDate } from '@/lib/context/store';

const Hydration = () => {
    useEffect(() => {
        useChangeDate.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;