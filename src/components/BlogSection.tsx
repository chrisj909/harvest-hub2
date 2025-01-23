import { blogData } from "@/data/blogData";
import { CategoryCarousel } from "./blog/CategoryCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const BlogSection = () => {
  const categories = ["Farms", "Products", "Vendors", "Deals", "Articles"];

  return (
    <section className="container mx-auto px-4">
      {categories.map((category) => (
        <CategoryCarousel
          key={category}
          category={category}
          posts={blogData.filter(post => post.category === category)}
        />
      ))}
    </section>
  );
};