export function PageHeader({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) {
  return (
    <div className="relative py-32 bg-black/40">
      <div className="container mx-auto px-8 pt-20">
        <h1 className="text-5xl font-light mb-6 text-white">{title}</h1>
        <p className="text-xl text-white/80 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}