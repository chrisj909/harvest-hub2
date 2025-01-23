import { BlogPost } from "@/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DealTemplateProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const DealTemplate = ({ post, isOpen, onClose }: DealTemplateProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-video relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">{post.description}</p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Deal Details</h3>
              <p className="text-muted-foreground">Valid until: December 31, 2024</p>
              <p className="text-muted-foreground">Terms and conditions apply</p>
            </div>
            <Button className="w-full">Claim Deal</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};