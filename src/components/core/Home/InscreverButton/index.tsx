import React from 'react';

import Link from 'next/link';
import { Popover } from 'antd';

const Button = () => {
    return (
        <div className="m-2 mt-12 lg:mt-0 flex justify-center">
            <Link href="/inscrever-se" legacyBehavior passHref>
                <button className="font-bold text-white bg-purple-900 rounded-2xl px-8 py-4 text-[20px] lg:text-2xl -mr-10 lg:mr-0 cursor-pointer">
                    INSCREVA-SE!
                </button>
            </Link>
        </div>
    );
};

export default Button;