import React from 'react';

import Link from 'next/link';
import { Popover } from 'antd';

const Button = () => {
    return (
        <div className="m-2 mt-12 lg:mt-0 flex justify-center">
            <Link href="/inscrever-se" legacyBehavior passHref>
                <button className="font-bold text-white bg-green-600 rounded-2xl px-4 py-2 text-2xl cursor-pointer">
                    INSCREVA-SE!
                </button>
            </Link>
        </div>
    );
};

export default Button;