import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const blogData: BlogPost[] = [
  // Farms
  {
    id: 1,
    title: "Green Valley Hemp Farm",
    description: "Sustainable farming practices in the heart of California",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Farms"
  },
  {
    id: 2,
    title: "Mountain View Organics",
    description: "High-altitude hemp cultivation",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    category: "Farms"
  },
  {
    id: 3,
    title: "Sunrise Hemp Co",
    description: "Family-owned since 1995",
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    category: "Farms"
  },
  {
    id: 4,
    title: "Valley View Farms",
    description: "Organic hemp cultivation",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    category: "Farms"
  },
  {
    id: 5,
    title: "Highland Hemp",
    description: "Premium mountain-grown hemp",
    imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    category: "Farms"
  },
  // Products
  {
    id: 6,
    title: "Premium CBD Oil",
    description: "Full-spectrum hemp extract",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Products"
  },
  {
    id: 7,
    title: "Hemp Pre-Rolls",
    description: "Hand-crafted with care",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Products"
  },
  {
    id: 8,
    title: "CBD Gummies",
    description: "Delicious and effective",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Products"
  },
  {
    id: 9,
    title: "Hemp Topicals",
    description: "Soothing relief",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Products"
  },
  {
    id: 10,
    title: "CBD Tinctures",
    description: "Pure and potent",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Products"
  },
  // Vendors
  {
    id: 11,
    title: "Green Life Dispensary",
    description: "Your local hemp experts",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Vendors"
  },
  {
    id: 12,
    title: "Hemp Haven",
    description: "Quality products, knowledgeable staff",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    category: "Vendors"
  },
  {
    id: 13,
    title: "Natural Wellness Co",
    description: "Holistic hemp solutions",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Vendors"
  },
  {
    id: 14,
    title: "CBD Marketplace",
    description: "One-stop hemp shop",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    category: "Vendors"
  },
  {
    id: 15,
    title: "Hemp Emporium",
    description: "Premium product selection",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Vendors"
  },
  // Deals
  {
    id: 16,
    title: "Summer Sale",
    description: "20% off all CBD products",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Deals"
  },
  {
    id: 17,
    title: "Bundle & Save",
    description: "Buy 2 get 1 free",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    category: "Deals"
  },
  {
    id: 18,
    title: "First Time Buyer",
    description: "15% off your first purchase",
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    category: "Deals"
  },
  {
    id: 19,
    title: "Clearance",
    description: "Up to 50% off select items",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    category: "Deals"
  },
  {
    id: 20,
    title: "Loyalty Rewards",
    description: "Earn points on every purchase",
    imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    category: "Deals"
  },
  // Articles
  {
    id: 21,
    title: "Benefits of CBD",
    description: "Understanding hemp wellness",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Articles"
  },
  {
    id: 22,
    title: "Hemp Farming Guide",
    description: "From seed to harvest",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Articles"
  },
  {
    id: 23,
    title: "CBD Myths Debunked",
    description: "Facts vs Fiction",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Articles"
  },
  {
    id: 24,
    title: "Cooking with Hemp",
    description: "Recipes and tips",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Articles"
  },
  {
    id: 25,
    title: "Industry News",
    description: "Latest hemp developments",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Articles"
  },
];

const CategorySection = ({ category }: { category: string }) => {
  const posts = blogData.filter(post => post.category === category);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-serif font-bold mb-6">{category}</h2>
      <Carousel className="w-full max-w-screen-xl mx-auto">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground">{post.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export const BlogSection = () => {
  const categories = ["Farms", "Products", "Vendors", "Deals", "Articles"];

  return (
    <section className="container mx-auto px-4">
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </section>
  );
};