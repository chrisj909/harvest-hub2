import { Header } from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import { BlogSection } from "@/components/BlogSection";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const searchSuggestions = [
  "Indoor CBD Flower",
  "Organic Hemp",
  "Pre-Rolls",
  "Local Farms"
];

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
  };

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
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary animate-fade-up tracking-tight">
              Harvest Hub
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif font-bold animate-fade-up text-foreground/90" style={{ animationDelay: "0.1s" }}>
              Find Your Perfect Hemp Product
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Compare prices and discover premium hemp flower from trusted local farms and vendors
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <SearchBox initialValue={searchValue} />
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {searchSuggestions.map((suggestion, index) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  className="bg-accent/50 hover:bg-accent text-foreground/80 hover:text-foreground"
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div className="pt-20">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Index;