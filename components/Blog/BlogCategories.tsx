"use client";

import { Button } from "../ui/button";

export function BlogCategories() {
  const categories = [
    "All",
    "Design Trends",
    "Sustainability",
    "Color Theory",
    "Space Planning",
    "Lighting"
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