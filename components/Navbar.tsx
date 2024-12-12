"use client";

import Link from "next/link";
import { MobileMenu } from "./Navbar/MobileMenu";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 mx-8">
      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/5">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-light tracking-wider text-white">
            DHI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
            <Link href="/assets" className="text-white/80 hover:text-white transition-colors">Assets</Link>
            <Link href="/clients" className="text-white/80 hover:text-white transition-colors">Our Clients</Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}