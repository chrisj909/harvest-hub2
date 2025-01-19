import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-up">
            Fresh From Farm to Your Table
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Connect with local farmers and get fresh, organic produce delivered straight to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg">Browse Products</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};