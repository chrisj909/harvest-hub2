import { useParams } from "react-router-dom";
import { blogData } from "@/data/blogData";
import { Button } from "@/components/ui/button";

export const DealPage = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === Number(id));

  if (!post) {
    return <div>Deal not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
          <div className="bg-accent rounded-lg p-8 my-8">
            <h2 className="text-2xl font-semibold mb-4">Deal Details</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold">Valid Until</h3>
                <p className="text-muted-foreground">December 31, 2024</p>
              </div>
              <div>
                <h3 className="font-semibold">Terms and Conditions</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>One coupon per customer</li>
                  <li>Cannot be combined with other offers</li>
                  <li>Valid in-store and online</li>
                  <li>Subject to availability</li>
                </ul>
              </div>
            </div>
            <Button className="w-full text-lg py-6">Claim Deal</Button>
          </div>
        </div>
      </div>
    </div>
  );
};