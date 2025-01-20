import React, { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

interface SearchResult {
  id: string;
  name: string;
  price: number;
  vendor: string;
  location: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    name: "Organic Tomatoes",
    price: 4.99,
    vendor: "Green Farms",
    location: "Local"
  },
  {
    id: "2",
    name: "Fresh Basil",
    price: 2.99,
    vendor: "Herb Haven",
    location: "Regional"
  },
  // ... Add more mock results as needed
];

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>(mockResults);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");

  const handleSearch = (search: string) => {
    setValue(search);
    // Filter results based on search term
    const filtered = mockResults.filter((result) =>
      result.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  };

  const applyFilters = (price: string, location: string) => {
    let filtered = [...mockResults];

    if (price !== "all") {
      filtered = filtered.filter((item) => {
        if (price === "under5") return item.price < 5;
        if (price === "5to10") return item.price >= 5 && item.price <= 10;
        if (price === "over10") return item.price > 10;
        return true;
      });
    }

    if (location !== "all") {
      filtered = filtered.filter((item) => item.location === location);
    }

    setResults(filtered);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative">
        <div className="flex gap-2">
          <div className="flex-1">
            <Command className="rounded-lg border shadow-md">
              <CommandInput
                placeholder="Search products..."
                value={value}
                onValueChange={handleSearch}
                className="h-12"
              />
              {value && (
                <CommandList>
                  <ScrollArea className="h-[300px]">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {results.map((result) => (
                        <CommandItem
                          key={result.id}
                          value={result.name}
                          onSelect={(value) => {
                            setValue(value);
                            setOpen(false);
                          }}
                          className="flex justify-between"
                        >
                          <span>{result.name}</span>
                          <span className="text-sm text-muted-foreground">
                            ${result.price}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </ScrollArea>
                </CommandList>
              )}
            </Command>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Price Range</h4>
                  <Select
                    value={priceFilter}
                    onValueChange={(value) => {
                      setPriceFilter(value);
                      applyFilters(value, locationFilter);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under5">Under $5</SelectItem>
                      <SelectItem value="5to10">$5 - $10</SelectItem>
                      <SelectItem value="over10">Over $10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <Select
                    value={locationFilter}
                    onValueChange={(value) => {
                      setLocationFilter(value);
                      applyFilters(priceFilter, value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Local">Local</SelectItem>
                      <SelectItem value="Regional">Regional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;