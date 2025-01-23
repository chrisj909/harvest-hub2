import type { SearchResult } from "@/types/search";
import { mockResults } from "@/data/mockResults";

export const useSearchFilters = () => {
  const filterResults = (
    search: string,
    priceFilter: string,
    locationFilter: string,
    strainFilter: string
  ) => {
    if (!search?.trim()) {
      return [];
    }

    const searchTerms = search.toLowerCase().split(' ');
    
    // First filter by search terms
    let filtered = mockResults.filter((result) => {
      return searchTerms.some(term => 
        result.name.toLowerCase().includes(term) ||
        result.strain.toLowerCase().includes(term) ||
        result.vendor.name.toLowerCase().includes(term)
      );
    });

    // Apply price filter
    if (priceFilter !== "all") {
      filtered = filtered.filter((item) => {
        switch (priceFilter) {
          case "under20":
            return item.price < 20;
          case "20to30":
            return item.price >= 20 && item.price <= 30;
          case "over30":
            return item.price > 30;
          default:
            return true;
        }
      });
    }

    // Apply location filter
    if (locationFilter !== "all") {
      filtered = filtered.filter(
        (item) => item.vendor.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    // Apply strain filter
    if (strainFilter !== "all") {
      filtered = filtered.filter(
        (item) => item.strain.toLowerCase() === strainFilter.toLowerCase()
      );
    }

    return filtered;
  };

  return { filterResults };
};