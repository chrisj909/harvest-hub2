import { BlogPost } from "@/types/blog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ArticleTemplateProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleTemplate = ({ post, isOpen, onClose }: ArticleTemplateProps) => {
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
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">{post.description}</p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};