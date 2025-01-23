import { BlogPost } from "@/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProductTemplateProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductTemplate = ({ post, isOpen, onClose }: ProductTemplateProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">{post.description}</p>
            <div className="space-y-2">
              <h3 className="font-semibold">Price</h3>
              <p className="text-2xl font-bold">$29.99</p>
            </div>
            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};