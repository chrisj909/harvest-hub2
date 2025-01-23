import { BlogPost } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
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
  );
};