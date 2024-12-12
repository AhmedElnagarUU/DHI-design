import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md mt-20 py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">DHI Design</h3>
            <p className="text-white/60 leading-relaxed">
              Transforming spaces into extraordinary environments that inspire and delight.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/services" className="text-white/60 hover:text-white transition-colors">Services</Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Contact</h4>
            <div className="text-white/60 space-y-3">
              <p>123 Design Street</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>info@dhidesign.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
          <p>© 2024 DHI Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}