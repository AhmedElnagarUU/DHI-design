"use client";

import { useState } from "react";
import { ProjectsHero } from "@/components/Projects/ProjectsHero";
import { ProjectGrid } from "@/components/Projects/ProjectGrid";
import { ProjectCategories } from "@/components/Projects/ProjectCategories";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Explicitly define the type of accumulator as string[]
  const categories = ["All", ...projects.reduce<string[]>((acc, project) => {
    if (!acc.includes(project.category)) {
      acc.push(project.category);
    }
    return acc;
  }, [])];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main>
      <ProjectsHero />
      <div className="container mx-auto px-8 py-20">
        <ProjectCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  );
}
