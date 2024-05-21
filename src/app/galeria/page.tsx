"use client";

import { useState } from "react";
import { imagens } from "@/lib/data";
import { Pagination, Image } from 'antd';

export default function Galeria() {

    const getPicturesSize = () => {
        if (window.innerWidth < 768) {
            return [150, 100];
        }
        else if (window.innerWidth < 1100) {
            return [175, 116];
        }
        else {
            return [350, 240];
        }
    };
    const picturesSize = getPicturesSize();

    const [key, setKey] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    // calculate the images for the current page
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = imagens.slice(indexOfFirstImage, indexOfLastImage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setKey(prevKey => prevKey + 1);
    };

    // calculate the number of empty divs required
    const emptyDivsCount = imagesPerPage - currentImages.length;

    return (
        <div className="h-[97vh] flex flex-col items-center gap-3">
            <h1 className="text-center text-4xl mb-8">Galeria</h1>
            <div className="mb-2">
                <Pagination
                    defaultCurrent={1}
                    total={imagens.length}
                    pageSize={imagesPerPage}
                    onChange={handlePageChange}
                />
            </div>
            <div className="grid grid-cols-12 gap-8 sm:mx-36">
                <Image.PreviewGroup>
                    {currentImages.map((image) => (
                        <div key={image.index} className="col-span-6 md:col-span-4">
                            <Image
                                width={picturesSize[0]}
                                height={picturesSize[1]}
                                key={image.index + key}
                                src={image.src}
                                alt="Imagem de eventos passados"
                                className="rounded-lg image-fade-in"
                            />
                            <p className=" text-center text-xs sm:text-sm">{image.descricao}</p>
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
        </div>
    );
};