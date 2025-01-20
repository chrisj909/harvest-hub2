import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters } from "./search/SearchFilters";
import { SearchInput } from "./search/SearchInput";
import { SearchResults } from "./search/SearchResults";
import { useSearchFilters } from "./search/SearchFilterLogic";
import type { SearchResult } from "@/types/search";

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [strainFilter, setStrainFilter] = useState<string>("all");

  const { filterResults } = useSearchFilters();

  const handleSearch = (search: string) => {
    setValue(search);
    const filtered = filterResults(search, priceFilter, locationFilter, strainFilter);
    setResults(filtered);
  };

  const handleFilterChange = (price: string, location: string, strain: string) => {
    setPriceFilter(price);
    setLocationFilter(location);
    setStrainFilter(strain);
    const filtered = filterResults(value, price, location, strain);
    setResults(filtered);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 min-w-0">
            <Command className="rounded-lg border shadow-md">
              <SearchInput value={value} onValueChange={handleSearch} />
              <SearchResults results={results} onSelect={(value) => {
                setValue(value);
                setOpen(false);
              }} />
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

export default SearchBox;