'use client';

import React, { useState, useEffect } from 'react';
import '@/app/galeria/transitions.css';

import { useMediaQuery } from 'react-responsive';
import { Pagination, Image } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { imagens } from '@/lib/data';

export default function Galeria() {

    const isSmallScreen = useMediaQuery({ maxWidth: 793 });

    const [key, setKey] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = isSmallScreen ? 4 : 6;

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = imagens.slice(indexOfFirstImage, indexOfLastImage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setKey(prevKey => prevKey + 1);
    };

    // Function to handle arrow key navigation
    const handleArrowKey = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(imagens.length / imagesPerPage)));
        } else if (event.key === 'ArrowLeft') {
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        }
    };

    // Add event listener for keyboard events when the component mounts
    useEffect(() => {
        window.addEventListener('keydown', handleArrowKey);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('keydown', handleArrowKey);
        };
    }, [imagesPerPage]); // Depend on imagesPerPage to adjust for screen size changes


    return (
        <div className="mb-20 flex flex-col items-center gap-3">
            <h1 className="text-center text-4xl">Galeria</h1>
            <div className="mb-2">
                <Pagination
                    current={currentPage}
                    defaultCurrent={1}
                    total={imagens.length}
                    pageSize={imagesPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-5 px-0 lg:px-16 justify-center">
                <Image.PreviewGroup>
                    <TransitionGroup component={null}>
                        {currentImages.map((image) => (
                            <CSSTransition
                                key={image.index}
                                timeout={1000}
                                classNames="item">
                                <div key={image.index}>
                                    <Image
                                        width={isSmallScreen ? 300 : 350}
                                        height={isSmallScreen ? 200 : 250}
                                        key={image.index + key + imagesPerPage}
                                        src={image.src}
                                        alt="Imagem de eventos passados"
                                        className="rounded-lg image-fade-in"
                                        loading="eager"
                                    />
                                    <p className="text-center text-xs sm:text-sm italic font-light">{image.descricao}</p>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </Image.PreviewGroup>
            </div>
        </div>
    );
};