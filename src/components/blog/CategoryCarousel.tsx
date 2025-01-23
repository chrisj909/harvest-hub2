import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryCarouselProps {
  category: string;
  posts: BlogPost[];
}

export const CategoryCarousel = ({ category, posts }: CategoryCarouselProps) => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-serif font-bold mb-6">{category}</h2>
      <Carousel className="w-full max-w-screen-xl mx-auto">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
              <BlogCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};