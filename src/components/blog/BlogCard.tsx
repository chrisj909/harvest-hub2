import { BlogPost } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { FarmTemplate } from "./templates/FarmTemplate";
import { ProductTemplate } from "./templates/ProductTemplate";
import { VendorTemplate } from "./templates/VendorTemplate";
import { DealTemplate } from "./templates/DealTemplate";
import { ArticleTemplate } from "./templates/ArticleTemplate";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderTemplate = () => {
    switch (post.category) {
      case "Farms":
        return <FarmTemplate post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
      case "Products":
        return <ProductTemplate post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
      case "Vendors":
        return <VendorTemplate post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
      case "Deals":
        return <DealTemplate post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
      case "Articles":
        return <ArticleTemplate post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="h-full cursor-pointer" onClick={() => setIsOpen(true)}>
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
      {renderTemplate()}
    </>
  );
};