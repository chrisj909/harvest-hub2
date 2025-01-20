export interface Vendor {
  name: string;
  location: string;
  rating: number;
}

export interface SearchResult {
  id: string;
  name: string;
  price: number;
  vendor: Vendor;
  strain: string;
  thcPercentage: string;
  cbdPercentage: string;
  inStock: boolean;
}