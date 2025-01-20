import type { SearchResult } from "@/types/search";

export const mockResults: SearchResult[] = [
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