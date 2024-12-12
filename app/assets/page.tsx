import { PageHeader } from "@/components/shared/PageHeader";
import { AssetGrid } from "@/components/Assets/AssetGrid";
import { AssetCategories } from "@/components/Assets/AssetCategories";

export default function AssetsPage() {
  return (
    <main>
      <PageHeader
        title="Design Assets"
        description="Explore our curated collection of furniture, decor, and materials for your next project."
      />
      <div className="container mx-auto px-8 py-20">
        <AssetCategories />
        <AssetGrid />
      </div>
    </main>
  );
}