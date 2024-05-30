import React from 'react';
import { Popover } from 'antd';

const Button = () => {
    return (
        <div className="m-2 mt-12 lg:mt-0 flex justify-center">
            <Popover content={<p className="text-center">Inscrições abrem em breve!</p>} trigger="hover" className="hidden md:block">
                <button
                    className="font-bold text-white bg-green-600 rounded-2xl px-4 py-2 text-2xl cursor-not-allowed"
                    disabled
                    onClick={() => window.location.href = ""}>
                    INSCREVA-SE!
                </button>
            </Popover>
            <button
                className="md:hidden font-bold text-white bg-red-500 rounded-2xl px-4 py-2 text-lg cursor-not-allowed"
                disabled
                onClick={() => window.location.href = ""}>
                INSCRIÇÕES AINDA NÃO ABERTAS
            </button>
        </div>
    );
};

export default Button;