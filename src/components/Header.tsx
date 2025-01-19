import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-primary">
              Harvest Hub
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a
                href="#products"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};