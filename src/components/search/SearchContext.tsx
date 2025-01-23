import React, { createContext, useContext, useState, useEffect } from 'react';
import { SearchResult } from '@/types/search';
import { useSearchFilters } from './SearchFilterLogic';

interface SearchContextType {
  value: string;
  results: SearchResult[];
  setValue: (value: string) => void;
  setResults: (results: SearchResult[]) => void;
  handleSearch: (search: string) => void;
  handleSelect: (selectedValue: string) => void;
  priceFilter: string;
  locationFilter: string;
  strainFilter: string;
  handleFilterChange: (price: string, location: string, strain: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children, initialValue = "" }: { children: React.ReactNode, initialValue?: string }) => {
  const [value, setValue] = useState(initialValue);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [strainFilter, setStrainFilter] = useState<string>("all");

  const { filterResults } = useSearchFilters();

  // Effect to handle search when value changes
  useEffect(() => {
    if (value.trim()) {
      const filtered = filterResults(value, priceFilter, locationFilter, strainFilter);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [value, priceFilter, locationFilter, strainFilter]);

  const handleSearch = (search: string) => {
    setValue(search);
  };

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
    setResults([]);
  };

  const handleFilterChange = (price: string, location: string, strain: string) => {
    setPriceFilter(price);
    setLocationFilter(location);
    setStrainFilter(strain);
  };

  return (
    <SearchContext.Provider value={{
      value,
      results,
      setValue,
      setResults,
      handleSearch,
      handleSelect,
      priceFilter,
      locationFilter,
      strainFilter,
      handleFilterChange
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};