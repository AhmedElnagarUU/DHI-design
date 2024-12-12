import Image from "next/image";
import { Button } from "../ui/button";

const assets = [
  {
    id: "1",
    name: "Modern Velvet Sofa",
    category: "Furniture",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
  },
  {
    id: "2",
    name: "Pendant Light Fixture",
    category: "Lighting",
    price: "$899",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
  },
  {
    id: "3",
    name: "Marble Coffee Table",
    category: "Furniture",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
  },
  {
    id: "4",
    name: "Decorative Vase Set",
    category: "Decor",
    price: "$299",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
  }
];

export function AssetGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {assets.map((asset) => (
        <div key={asset.id} className="group">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-light text-white">{asset.name}</h3>
            <span className="text-emerald-400">{asset.price}</span>
          </div>
          <p className="text-white/60 mb-4">{asset.category}</p>
          <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
}