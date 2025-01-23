import { useParams } from "react-router-dom";
import { blogData } from "@/data/blogData";

export const FarmPage = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === Number(id));

  if (!post) {
    return <div>Farm not found</div>;
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-accent rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Farm Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">California, USA</p>
                </div>
                <div>
                  <h3 className="font-semibold">Specialties</h3>
                  <p className="text-muted-foreground">Organic Hemp, CBD Products</p>
                </div>
                <div>
                  <h3 className="font-semibold">Founded</h3>
                  <p className="text-muted-foreground">1995</p>
                </div>
              </div>
            </div>
            <div className="bg-accent rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Growing Practices</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Organic cultivation methods</li>
                <li>Sustainable water management</li>
                <li>Natural pest control</li>
                <li>Soil conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};