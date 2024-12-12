import { PageHeader } from "@/components/shared/PageHeader";
import { BlogGrid } from "@/components/Blog/BlogGrid";
import { BlogCategories } from "@/components/Blog/BlogCategories";

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Design Blog"
        description="Insights, trends, and inspiration from the world of luxury interior design."
      />
      <div className="container mx-auto px-8 py-20">
        <BlogCategories />
        <BlogGrid />
      </div>
    </main>
  );
}