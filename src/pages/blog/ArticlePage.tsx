import { useParams } from "react-router-dom";
import { blogData } from "@/data/blogData";

export const ArticlePage = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === Number(id));

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6">{post.title}</h1>
        <div className="aspect-video relative mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">{post.description}</p>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-semibold">Key Points</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Understanding the benefits of CBD</li>
              <li>Different types of hemp products</li>
              <li>How to choose the right product</li>
              <li>Safety and legal considerations</li>
            </ul>
            <p className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};