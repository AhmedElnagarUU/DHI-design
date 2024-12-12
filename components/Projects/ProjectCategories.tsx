"use client";

import { Button } from "../ui/button";

interface ProjectCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "ghost"}
          className={
            selectedCategory === category
              ? "bg-emerald-700 hover:bg-emerald-800 text-white"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}