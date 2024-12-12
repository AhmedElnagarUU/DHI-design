"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types/project";
import { motion } from "framer-motion";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "group relative aspect-square overflow-hidden rounded-2xl",
            project.size
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-sm text-emerald-400 mb-2">{project.category}</div>
              <h3 className="text-xl text-white font-light mb-2">{project.title}</h3>
              <p className="text-white/60 text-sm">{project.description}</p>
              <div className="flex items-center space-x-4 mt-4 text-sm text-white/60">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}