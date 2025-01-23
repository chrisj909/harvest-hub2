import { useParams } from "react-router-dom";
import { blogData } from "@/data/blogData";
import { Button } from "@/components/ui/button";

export const ProductPage = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === Number(id));

  if (!post) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square relative mb-6">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square relative">
                  <img
                    src={post.imageUrl}
                    alt={`${post.title} view ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>
            <p className="text-xl mb-6">{post.description}</p>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Price</h2>
                <p className="text-3xl font-bold text-primary">$29.99</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Details</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full spectrum CBD</li>
                  <li>Lab tested</li>
                  <li>Organic ingredients</li>
                  <li>THC-free option available</li>
                </ul>
              </div>
              <Button className="w-full text-lg py-6">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};