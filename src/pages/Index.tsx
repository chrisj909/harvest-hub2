import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import SearchBox from "@/components/SearchBox";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="py-8">
          <SearchBox />
        </div>
        <ProductGrid />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;