import { CategorySection } from "./CategorySection";

const mockPosts = {
  farms: [
    {
      id: "1",
      title: "Green Mountain Hemp Farm",
      image: "/photo-1501854140801-50d01698950b",
      category: "Farms",
      excerpt: "Sustainable farming practices in the heart of Vermont's Green Mountains.",
    },
    // ... Add more farm posts
  ],
  products: [
    {
      id: "2",
      title: "New Premium CBD Tincture Line",
      image: "/photo-1465146344425-f00d5f5c8f07",
      category: "Products",
      excerpt: "Introducing our new line of full-spectrum CBD tinctures.",
    },
    // ... Add more product posts
  ],
  vendors: [
    {
      id: "3",
      title: "Featured Vendor: Mountain Rose Herbs",
      image: "/photo-1472396961693-142e6e269027",
      category: "Vendors",
      excerpt: "Meet our trusted partner specializing in organic hemp products.",
    },
    // ... Add more vendor posts
  ],
  deals: [
    {
      id: "4",
      title: "Summer Sale: 30% Off CBD Bundles",
      image: "/photo-1482938289607-e9573fc25ebb",
      category: "Deals",
      excerpt: "Limited time offer on our most popular CBD product bundles.",
    },
    // ... Add more deal posts
  ],
  articles: [
    {
      id: "5",
      title: "The Benefits of Hemp-Derived CBD",
      image: "/photo-1582562124811-c09040d0a901",
      category: "Articles",
      excerpt: "Understanding the therapeutic potential of CBD and its applications.",
    },
    // ... Add more article posts
  ],
};

export const BlogSection = () => {
  return (
    <div className="container mx-auto px-4">
      <CategorySection title="Featured Farms" posts={mockPosts.farms} />
      <CategorySection title="New Products" posts={mockPosts.products} />
      <CategorySection title="Trusted Vendors" posts={mockPosts.vendors} />
      <CategorySection title="Current Deals" posts={mockPosts.deals} />
      <CategorySection title="Latest Articles" posts={mockPosts.articles} />
    </div>
  );
};