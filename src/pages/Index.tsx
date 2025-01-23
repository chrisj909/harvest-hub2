import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import SearchBox from "@/components/SearchBox";
import { ProductGrid } from "@/components/ProductGrid";
import { useEffect, useState } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}>
        <Header />
      </div>
      
      <div className={`min-h-screen flex flex-col items-center justify-center transition-opacity duration-300 ${
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        <div className="container mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-up">
            Find Your Perfect Hemp Product
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Compare prices and discover premium hemp flower from trusted local farms and vendors
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <SearchBox />
          </div>
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div className="pt-16">
          <ProductGrid />
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};

export default Index;