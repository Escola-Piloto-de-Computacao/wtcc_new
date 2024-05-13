"use client";

import Link from "next/link";
import { useState } from "react";


interface HeaderItemProps {
    item: {
        title: string;
        ref: string;
        index: number;
    };
};

const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={item?.ref}>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        setHovered(!hovered);
                    }
                }}
                className="px-2 lg:px-6 py-2 lg:py-3 text-lg leading-[22px] md:px-3 text-blue-500 relative overflow-hidden"
            >
                {item?.title}
                <span
                    style={{
                        position: 'absolute',
                        height: '2px',
                        backgroundColor: '#90ee90',
                        width: hovered ? '100%' : '0',
                        right: hovered ? '0' : 'auto',
                        left: hovered ? 'auto' : '0',
                        bottom: '0',
                        transition: 'width 0.5s'
                    }}
                ></span>
            </button>
        </Link>
    );
};

export default HeaderItem;