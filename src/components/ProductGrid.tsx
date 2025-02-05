import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchVendorProducts } from "@/services/vendorApi";
import { useCart } from "@/context/CartContext";

export const ProductGrid = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchVendorProducts,
  });
  const { addItem } = useCart();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
    return <div className="text-center text-red-500 p-4">Error loading products</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products?.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/placeholder.svg"
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader className="flex-grow">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                <span className="font-bold text-lg">${product.price}</span>
              </div>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{product.strain}</Badge>
                  <Badge variant="outline">CBD: {product.cbdPercentage}</Badge>
                  <Badge variant="outline">THC: {product.thcPercentage}</Badge>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="truncate">{product.vendor.name}</span>
                  <span>{product.vendor.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <Button 
                    variant="default"
                    onClick={() => addItem(product)}
                    disabled={!product.inStock}
                    className="w-full sm:w-auto mt-2 sm:mt-0"
                  >
                    Add to Cart
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