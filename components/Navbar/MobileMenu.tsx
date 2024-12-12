"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 mx-8 p-6 bg-black/95 backdrop-blur-md rounded-xl border border-white/10">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Projects</Link>
            <Link href="/assets" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Assets</Link>
            <Link href="/clients" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Our Clients</Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}