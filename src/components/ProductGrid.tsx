import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { mockResults } from "@/data/mockResults";

// In a real implementation, this would fetch from vendor APIs
const fetchProducts = async () => {
  // Simulating API call with mock data
  return mockResults;
};

export const ProductGrid = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-lg" />
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading products</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/placeholder.svg"
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <span className="font-bold text-lg">${product.price}</span>
              </div>
              <CardDescription>
                <div className="flex gap-2 flex-wrap mt-2">
                  <Badge variant="secondary">{product.strain}</Badge>
                  <Badge variant="outline">CBD: {product.cbdPercentage}</Badge>
                  <Badge variant="outline">THC: {product.thcPercentage}</Badge>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{product.vendor.name}</span>
                  <span>Rating: {product.vendor.rating}/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <Button variant="outline">
                    Compare Prices
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};