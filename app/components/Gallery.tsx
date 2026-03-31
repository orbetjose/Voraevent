import Image from "next/image";

type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type ImagesGalleryProps = {
    images: ImageType[];
}

export default function Gallery({images}: ImagesGalleryProps) {
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
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
