export function Stats() {
  const stats = [
    { value: "255+", label: "Projects Completed" },
    { value: "180+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Design Awards" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-emerald-800 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}