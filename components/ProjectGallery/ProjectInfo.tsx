export function ProjectInfo() {
  return (
    <div className="text-white py-12">
      <h2 className="text-4xl font-light mb-6">Our Latest Projects</h2>
      <p className="text-white/80 max-w-2xl mb-8">
        Discover our portfolio of meticulously crafted interiors, where each space tells a unique story. 
        From contemporary urban apartments to luxurious country homes, we transform spaces into 
        extraordinary environments that inspire and delight.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
        <Stat label="Projects" value="255+" />
        <Stat label="Happy Clients" value="180+" />
        <Stat label="Years Experience" value="15+" />
        <Stat label="Design Awards" value="50+" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl font-light text-emerald-400 mb-2">{value}</div>
      <div className="text-white/60">{label}</div>
    </div>
  );
}