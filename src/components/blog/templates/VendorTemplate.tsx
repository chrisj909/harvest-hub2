import { BlogPost } from "@/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VendorTemplateProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const VendorTemplate = ({ post, isOpen, onClose }: VendorTemplateProps) => {
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-muted-foreground">Mon-Sat: 9AM-8PM</p>
                <p className="text-muted-foreground">Sun: 10AM-6PM</p>
              </div>
              <div>
                <h3 className="font-semibold">Contact</h3>
                <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                <p className="text-muted-foreground">Email: info@vendor.com</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};