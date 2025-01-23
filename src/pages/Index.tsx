import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogSection } from "@/components/blog/BlogSection";
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
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <div
        className={`min-h-screen flex flex-col items-center justify-center transition-opacity duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Hero />
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Index;