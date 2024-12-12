"use client";

import { Button } from "../ui/button";

export function AssetCategories() {
  const categories = [
    "All",
    "Furniture",
    "Lighting",
    "Decor",
    "Textiles",
    "Art"
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}