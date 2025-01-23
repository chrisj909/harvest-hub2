import type { SearchResult } from "@/types/search";
import { mockResults } from "@/data/mockResults";

export const useSearchFilters = () => {
  const filterResults = (
    search: string,
    priceFilter: string,
    locationFilter: string,
    strainFilter: string
  ): SearchResult[] => {
    // Early return for empty search
    if (!search?.trim()) {
      return [];
    }

    try {
      let filtered = mockResults.filter(
        (result) =>
          result?.name?.toLowerCase().includes(search.toLowerCase()) ||
          result?.strain?.toLowerCase().includes(search.toLowerCase()) ||
          result?.vendor?.name?.toLowerCase().includes(search.toLowerCase())
      );

      if (priceFilter !== "all") {
        filtered = filtered.filter((item) => {
          if (!item?.price) return false;
          if (priceFilter === "under20") return item.price < 20;
          if (priceFilter === "20to30") return item.price >= 20 && item.price <= 30;
          if (priceFilter === "over30") return item.price > 30;
          return true;
        });
      }

      if (locationFilter !== "all") {
        filtered = filtered.filter((item) => item?.vendor?.location === locationFilter);
      }

      if (strainFilter !== "all") {
        filtered = filtered.filter((item) => item?.strain === strainFilter);
      }

      return filtered;
    } catch (error) {
      console.error('Error in filterResults:', error);
      return [];
    }
  };

  return { filterResults };
};