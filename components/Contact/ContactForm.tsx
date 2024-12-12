"use client";

import { Button } from "../ui/button";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 mb-2">First Name</label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2">Last Name</label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
            placeholder="Doe"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-white/80 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label className="block text-white/80 mb-2">Message</label>
        <textarea
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white h-32"
          placeholder="Tell us about your project..."
        />
      </div>
      
      <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6">
        Send Message
      </Button>
    </form>
  );
}