import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}

export function GalleryGrid() {
  const images: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      alt: "Modern living room with green walls",
      className: "col-span-2 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      alt: "Luxury bedroom interior",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      alt: "Contemporary kitchen design",
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      alt: "Minimalist bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
      alt: "Elegant dining room",
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={cn(
            "relative aspect-square rounded-2xl overflow-hidden group",
            image.className
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}