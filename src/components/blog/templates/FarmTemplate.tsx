import { BlogPost } from "@/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FarmTemplateProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const FarmTemplate = ({ post, isOpen, onClose }: FarmTemplateProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="aspect-video relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">{post.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">California, USA</p>
              </div>
              <div>
                <h3 className="font-semibold">Specialties</h3>
                <p className="text-muted-foreground">Organic Hemp, CBD Products</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};