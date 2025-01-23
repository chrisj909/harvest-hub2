import type { SearchResult } from "@/types/search";
import { mockResults } from "@/data/mockResults";

export const useSearchFilters = () => {
  const filterResults = (
    search: string,
    priceFilter: string,
    locationFilter: string,
    strainFilter: string
  ) => {
    // If search is empty, return empty array
    if (!search.trim()) {
      return [];
    }

    console.log('Filtering with:', { search, priceFilter, locationFilter, strainFilter });
    console.log('Available mock results:', mockResults);

    // First filter by search term
    let filtered = mockResults.filter((result) => {
      const searchLower = search.toLowerCase();
      return (
        result.name.toLowerCase().includes(searchLower) ||
        result.strain.toLowerCase().includes(searchLower) ||
        result.vendor.name.toLowerCase().includes(searchLower)
      );
    });

    console.log('After search filter:', filtered);

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

    console.log('Final filtered results:', filtered);
    return filtered;
  };

  return { filterResults };
};