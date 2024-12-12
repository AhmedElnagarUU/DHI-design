import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/ProjectGallery/GalleryGrid";
import { ProjectInfo } from "@/components/ProjectGallery/ProjectInfo";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-8">
        <section className="py-20">
          <ProjectInfo />
          <GalleryGrid />
        </section>
        
        <section className="py-20">
          <Process />
        </section>
      </div>
    </main>
  );
}