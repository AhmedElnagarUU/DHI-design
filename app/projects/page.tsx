"use client";

import { useState } from "react";
import { ProjectsHero } from "@/components/Projects/ProjectsHero";
import { ProjectGrid } from "@/components/Projects/ProjectGrid";
import { ProjectCategories } from "@/components/Projects/ProjectCategories";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use reduce to manually create a unique array of categories
  const categories = ["All", ...projects.reduce((acc, project) => {
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
