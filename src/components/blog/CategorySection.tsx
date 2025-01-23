import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlogCard } from "./BlogCard";

interface Post {
  id: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
}

interface CategorySectionProps {
  title: string;
  posts: Post[];
}

export const CategorySection = ({ title, posts }: CategorySectionProps) => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-serif font-bold mb-6">{title}</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {posts.map((post) => (
            <CarouselItem key={post.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <BlogCard
                title={post.title}
                image={post.image}
                category={post.category}
                excerpt={post.excerpt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};