import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters } from "./search/SearchFilters";
import { SearchInput } from "./search/SearchInput";
import { SearchResults } from "./search/SearchResults";
import { useSearch } from "@/context/SearchContext";
import ErrorBoundary from "./ErrorBoundary";

interface SearchBoxProps {
  initialValue?: string;
}

const SearchBox = ({ initialValue = "" }: SearchBoxProps) => {
  const [open, setOpen] = useState(false);
  const {
    searchValue,
    setSearchValue,
    results,
    priceFilter,
    locationFilter,
    strainFilter,
    setPriceFilter,
    setLocationFilter,
    setStrainFilter,
  } = useSearch();

  const handleSearch = (search: string) => {
    setSearchValue(search);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 min-w-0">
            <ErrorBoundary>
              <Command className="rounded-lg border shadow-md">
                <SearchInput 
                  value={searchValue} 
                  onValueChange={handleSearch}
                />
                <SearchResults 
                  results={results}
                  onSelect={(selectedValue) => {
                    setSearchValue(selectedValue);
                    setOpen(false);
                  }}
                />
              </Command>
            </ErrorBoundary>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-12 w-12 shrink-0">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] sm:w-[320px] lg:w-[380px]">
              <SearchFilters
                priceFilter={priceFilter}
                locationFilter={locationFilter}
                strainFilter={strainFilter}
                onPriceChange={setPriceFilter}
                onLocationChange={setLocationFilter}
                onStrainChange={setStrainFilter}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;