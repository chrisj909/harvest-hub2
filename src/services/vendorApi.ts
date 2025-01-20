import type { SearchResult } from "@/types/search";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mockProducts: SearchResult[] = [
  {
    id: "1",
    name: "Premium Indoor Hemp Flower",
    price: 29.99,
    vendor: {
      name: "Green Mountain Hemp",
      location: "Vermont",
      rating: 4.8
    },
    strain: "Sour Space Candy",
    thcPercentage: "0.2%",
    cbdPercentage: "18%",
    inStock: true
  },
  {
    id: "2",
    name: "Organic Outdoor Hemp Flower",
    price: 19.99,
    vendor: {
      name: "Carolina Hemp Farms",
      location: "North Carolina",
      rating: 4.6
    },
    strain: "Lifter",
    thcPercentage: "0.3%",
    cbdPercentage: "16%",
    inStock: true
  },
  {
    id: "3",
    name: "Small Batch Hemp Flower",
    price: 34.99,
    vendor: {
      name: "Oregon Hemp Collective",
      location: "Oregon",
      rating: 4.9
    },
    strain: "Hawaiian Haze",
    thcPercentage: "0.1%",
    cbdPercentage: "20%",
    inStock: false
  }
];

export const fetchVendorProducts = async (): Promise<SearchResult[]> => {
  console.log('🔍 Fetching products from vendor API...');
  await delay(1000);
  console.log('📦 Products received:', mockProducts);
  return mockProducts;
};

export const searchProducts = async (query: string): Promise<SearchResult[]> => {
  console.log(`🔎 Searching for products with query: "${query}"`);
  await delay(500);
  
  const results = mockProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.strain.toLowerCase().includes(query.toLowerCase()) ||
    product.vendor.name.toLowerCase().includes(query.toLowerCase())
  );
  
  console.log('🎯 Search results:', results);
  return results;
};