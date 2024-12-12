"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "../ui/button";

const testimonials = [
  {
    quote: "DHI Design transformed our hotel lobby into a stunning space that perfectly captures our brand essence.",
    author: "Sarah Johnson",
    role: "Hotel Operations Director",
    company: "Luxury Hotels Group"
  },
  {
    quote: "The attention to detail and innovative design solutions exceeded our expectations.",
    author: "Michael Chen",
    role: "CEO",
    company: "Urban Living Co"
  },
  {
    quote: "Working with DHI Design was a seamless experience from start to finish.",
    author: "Emma Thompson",
    role: "Property Director",
    company: "Elite Residences"
  }
];

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="relative bg-black/20 rounded-2xl p-8 md:p-12">
      <Quote className="text-emerald-400 w-12 h-12 mb-6" />
      <div className="max-w-3xl">
        <p className="text-2xl font-light text-white mb-8">
          {testimonials[currentIndex].quote}
        </p>
        <div>
          <div className="text-lg text-white mb-1">
            {testimonials[currentIndex].author}
          </div>
          <div className="text-white/60">
            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={previous}
          className="text-white hover:text-white/80"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="text-white hover:text-white/80"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}