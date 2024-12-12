import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-light text-emerald-400 mb-6">404</h1>
        <h2 className="text-3xl font-light text-white mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}