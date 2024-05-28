"use client";

import { useState } from "react";
import { imagens } from "@/lib/data";
import { Pagination, Image } from 'antd';
import { useMediaQuery } from 'react-responsive';

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

    return (
        <div className="mb-20 flex flex-col items-center gap-3">
            <h1 className="text-center text-4xl">Galeria</h1>
            <div className="mb-2">
                <Pagination
                    defaultCurrent={1}
                    total={imagens.length}
                    pageSize={imagesPerPage}
                    onChange={handlePageChange}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-5 px-0 lg:px-12 justify-center">
                <Image.PreviewGroup>
                    {currentImages.map((image) => (
                        <div key={image.index} className="">
                            <Image
                                width={isSmallScreen ? 300 : 350}
                                height={isSmallScreen ? 200 : 250}
                                key={image.index + key}
                                src={image.src}
                                alt="Imagem de eventos passados"
                                className="rounded-lg image-fade-in"
                                loading="eager"
                            />
                            <p className="text-center text-xs sm:text-sm">{image.descricao}</p>
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
        </div>
    );
};