"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type ImagesGalleryProps = {
  images: ImageType[];
};

export default function Gallery({ images }: ImagesGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg gallery-item`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
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
        <div className="modal-overlay">
          <div className="modal-gallery">
            <button className="swiper-button-prev swiper-button-prev-gallery"><span>&#8592;</span></button>
            <button className="swiper-button-next swiper-button-next-gallery"><span>&#8594;</span></button>
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
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
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
