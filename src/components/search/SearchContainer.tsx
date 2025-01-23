import { Command } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters } from "./SearchFilters";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { useSearch } from "./SearchContext";

const SearchContainer = () => {
  const { 
    value, 
    results, 
    handleSearch, 
    handleSelect,
    priceFilter,
    locationFilter,
    strainFilter,
    handleFilterChange 
  } = useSearch();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 min-w-0">
            <Command className="rounded-lg border shadow-md">
              <SearchInput value={value} onValueChange={handleSearch} />
              <SearchResults 
                results={results} 
                onSelect={handleSelect}
              />
            </Command>
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
                onPriceChange={(value) => {
                  handleFilterChange(value, locationFilter, strainFilter);
                }}
                onLocationChange={(value) => {
                  handleFilterChange(priceFilter, value, strainFilter);
                }}
                onStrainChange={(value) => {
                  handleFilterChange(priceFilter, locationFilter, value);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;