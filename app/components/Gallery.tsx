"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type ImagesGalleryProps = {
  acf: {
    galeria_imagenes: {
      imagen_1: {
        url: string;
      };
      imagen_2: {
        url: string;
      };
      imagen_3: {
        url: string;
      };
      imagen_4: {
        url: string;
      };
      imagen_5: {
        url: string;
      };
      imagen_6: {
        url: string;
      };
    };
  };
};

export default function Gallery({ acf }: ImagesGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="gallery">
        { 
        Object.values(acf.galeria_imagenes).map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg gallery-item`}>
            <Image
              src={image.url}
              alt={`Imagen ${index + 1} de la galería`}
              width="320"
              height="212"
              className="w-full h-auto object-cover cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setInitialSlide(index);
              }}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}>
          <div
            className="modal-gallery"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-50 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <button className="swiper-button-prev swiper-button-prev-gallery">
              <span>&#8592;</span>
            </button>
            <button className="swiper-button-next swiper-button-next-gallery">
              <span>&#8594;</span>
            </button>
            <Swiper
              watchOverflow={true}
              loop={false}
              initialSlide={initialSlide}
              navigation={{
                prevEl: ".swiper-button-prev-gallery",
                nextEl: ".swiper-button-next-gallery",
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}>
              {Object.values(acf.galeria_imagenes).map((image, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={image.url}
                      alt={`Imagen ${index + 1} de la galería`}
                      width="320"
                      height="212"
                      className="w-full h-160 object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
