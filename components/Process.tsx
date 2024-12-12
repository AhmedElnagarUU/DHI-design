import { Check } from "lucide-react";

export function Process() {
  const steps = [
    {
      step: "Step 1",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your vision, requirements, and budget to create a perfect plan."
    },
    {
      step: "Step 2",
      title: "Design Development",
      description: "Our team creates detailed design concepts and 3D visualizations for your approval."
    },
    {
      step: "Step 3",
      title: "Implementation",
      description: "We handle everything from procurement to installation, ensuring a seamless process."
    },
    {
      step: "Step 4",
      title: "Final Touches",
      description: "We perfect every detail to create your dream space exactly as envisioned."
    }
  ];

  return (
    <div className="bg-emerald-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Design Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center mr-3">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-emerald-400">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}