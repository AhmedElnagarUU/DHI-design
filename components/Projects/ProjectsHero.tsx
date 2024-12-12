import Image from "next/image";

export function ProjectsHero() {
  return (
    <div className="relative h-[60vh] min-h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
        alt="Luxury interior project"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl font-light mb-6 text-white">Our Projects</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore our portfolio of meticulously crafted spaces, each telling its own unique story of luxury and design excellence.
          </p>
        </div>
      </div>
    </div>
  );
}