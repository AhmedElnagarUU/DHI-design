import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DHI Design - Luxury Interior Design',
  description: 'Transform your space with DHI Design - Leading luxury interior design studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#050A0F]`}>
        <div className="fixed inset-0 z-0">
          {/* Background patterns */}
          {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_2px,transparent_2px),linear-gradient(to_bottom,#ffffff_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" /> */}
          
          {/* Furniture outlines with increased visibility */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/80 rounded-lg transform -rotate-12 opacity-40" />
          <div className="absolute top-1/3 right-1/4 w-48 h-24 border-2 border-white/80 rounded-lg transform rotate-6 opacity-40" />
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-white/80 rounded-full transform opacity-40" />
          <div className="absolute top-2/3 right-1/3 w-36 h-36 border-2 border-white/80 rounded-lg transform -rotate-45 opacity-40" />
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}