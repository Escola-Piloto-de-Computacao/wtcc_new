"use client";

import { useState } from "react";
import { imagens } from "@/lib/data";
import { Pagination, Image } from 'antd';

export default function Galeria() {

    const [key, setKey] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = imagens.slice(indexOfFirstImage, indexOfLastImage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div className="mb-20 flex flex-col items-center gap-3">
            <h1 className="text-center text-4xl mb-8">Galeria</h1>
            <div className="flex flex-row flex-wrap gap-7 px-24 justify-center">
                <Image.PreviewGroup>
                    {currentImages.map((image) => (
                        <div key={image.index} className="col-span-6 md:col-span-4">
                            <Image
                                width={350}
                                height={250}
                                key={image.index + key}
                                src={image.src}
                                alt="Imagem de eventos passados"
                                className="rounded-lg image-fade-in"
                            />
                            <p className="text-center text-xs sm:text-sm">{image.descricao}</p>
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
            <div className="mt-2">
                <Pagination
                    defaultCurrent={1}
                    total={imagens.length}
                    pageSize={imagesPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};