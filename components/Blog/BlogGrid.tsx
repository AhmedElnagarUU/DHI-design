import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "The Art of Minimalist Design in Modern Homes",
    excerpt: "Discover how minimalist design principles can transform your living space into a serene sanctuary.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    date: "March 15, 2024",
    category: "Design Trends"
  },
  {
    id: "2",
    title: "Sustainable Interior Design: A Guide to Eco-Friendly Living",
    excerpt: "Learn how to create beautiful, environmentally conscious spaces without compromising on style.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    date: "March 12, 2024",
    category: "Sustainability"
  },
  {
    id: "3",
    title: "Color Psychology in Interior Design",
    excerpt: "Understanding how different colors affect mood and behavior in your living spaces.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    date: "March 10, 2024",
    category: "Color Theory"
  }
];

export function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <article className="group">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center space-x-4 text-sm text-white/60 mb-2">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </span>
              <span>{post.category}</span>
            </div>
            <h3 className="text-xl font-light text-white mb-2 group-hover:text-emerald-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-white/60">{post.excerpt}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}