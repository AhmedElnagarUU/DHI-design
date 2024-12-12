import { Check } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-emerald-700/30 flex items-center justify-center mr-4">
          <Check className="w-6 h-6 text-emerald-400" />
        </div>
        <span className="text-emerald-400 text-sm">{number}</span>
      </div>
      <h3 className="text-xl font-light mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}