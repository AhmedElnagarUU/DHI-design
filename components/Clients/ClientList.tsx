
const clients = [
  {
    name: "Luxury Hotels Group",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    industry: "Hospitality"
  },
  {
    name: "Urban Living Co",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    industry: "Real Estate"
  },
  {
    name: "Elite Residences",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    industry: "Property Development"
  },
  {
    name: "Modern Retail",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    industry: "Retail"
  }
];

export function ClientList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {clients.map((client, index) => (
        <div key={index} className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-white/5 rounded-xl" />
          </div>
          <h3 className="text-lg font-light text-white mb-1">{client.name}</h3>
          <p className="text-sm text-white/60">{client.industry}</p>
        </div>
      ))}
    </div>
  );
}