import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Premium Hemp Flower",
    description: "Hand-trimmed, organic indoor-grown hemp flower",
    image: "/placeholder.svg",
  },
  {
    title: "CBD Tinctures",
    description: "Full-spectrum CBD oil for daily wellness",
    image: "/placeholder.svg",
  },
  {
    title: "Hemp Pre-Rolls",
    description: "Convenient, ready-to-enjoy hemp flower rolls",
    image: "/placeholder.svg",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-20" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};