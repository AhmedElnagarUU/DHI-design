import Image from "next/image";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      alt: "Modern living room"
    },
    {
      src: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
      alt: "Contemporary bedroom"
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      alt: "Luxury kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      alt: "Elegant bathroom"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}