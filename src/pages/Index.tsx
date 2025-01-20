import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import SearchBox from "@/components/SearchBox";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SearchBox />
        <ProductGrid />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;