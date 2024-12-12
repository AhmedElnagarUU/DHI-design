import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
        alt="Luxury interior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Space Into Art
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          We create bespoke interior designs that reflect your personality and elevate your lifestyle. Experience luxury redefined.
        </p>
        <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
          Explore Our Work
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}