import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SearchResult } from '@/types/search';
import { useSearchFilters } from '@/components/search/SearchFilterLogic';

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  results: SearchResult[];
  priceFilter: string;
  locationFilter: string;
  strainFilter: string;
  setPriceFilter: (value: string) => void;
  setLocationFilter: (value: string) => void;
  setStrainFilter: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [strainFilter, setStrainFilter] = useState<string>('all');
  
  const { filterResults } = useSearchFilters();

  useEffect(() => {
    const filtered = filterResults(searchValue, priceFilter, locationFilter, strainFilter);
    setResults(Array.isArray(filtered) ? filtered : []);
  }, [searchValue, priceFilter, locationFilter, strainFilter]);

  const value = {
    searchValue,
    setSearchValue,
    results,
    priceFilter,
    locationFilter,
    strainFilter,
    setPriceFilter,
    setLocationFilter,
    setStrainFilter,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}