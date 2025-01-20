import { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters } from "./search/SearchFilters";
import { SearchResultItem } from "./search/SearchResultItem";
import { mockResults } from "@/data/mockResults";
import type { SearchResult } from "@/types/search";

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [strainFilter, setStrainFilter] = useState<string>("all");

  const handleSearch = (search: string) => {
    setValue(search);
    if (!search.trim()) {
      setResults([]);
      return;
    }
    
    const filtered = mockResults.filter((result) =>
      result.name.toLowerCase().includes(search.toLowerCase()) ||
      result.strain.toLowerCase().includes(search.toLowerCase()) ||
      result.vendor.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  };

  const applyFilters = (price: string, location: string, strain: string) => {
    let filtered = [...mockResults];

    if (price !== "all") {
      filtered = filtered.filter((item) => {
        if (price === "under20") return item.price < 20;
        if (price === "20to30") return item.price >= 20 && item.price <= 30;
        if (price === "over30") return item.price > 30;
        return true;
      });
    }

    if (location !== "all") {
      filtered = filtered.filter((item) => item.vendor.location === location);
    }

    if (strain !== "all") {
      filtered = filtered.filter((item) => item.strain === strain);
    }

    setResults(filtered);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 min-w-0">
            <Command className="rounded-lg border shadow-md">
              <CommandInput
                placeholder="Search by strain, vendor, or product name..."
                value={value}
                onValueChange={handleSearch}
                className="h-12"
              />
              <CommandList>
                <ScrollArea className="h-[300px] sm:h-[400px]">
                  <CommandEmpty>No results found.</CommandEmpty>
                  {results.length > 0 && (
                    <CommandGroup heading="Available Products">
                      {results.map((result) => (
                        <SearchResultItem
                          key={result.id}
                          result={result}
                          onSelect={(value) => {
                            setValue(value);
                            setOpen(false);
                          }}
                        />
                      ))}
                    </CommandGroup>
                  )}
                </ScrollArea>
              </CommandList>
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
                  setPriceFilter(value);
                  applyFilters(value, locationFilter, strainFilter);
                }}
                onLocationChange={(value) => {
                  setLocationFilter(value);
                  applyFilters(priceFilter, value, strainFilter);
                }}
                onStrainChange={(value) => {
                  setStrainFilter(value);
                  applyFilters(priceFilter, locationFilter, value);
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