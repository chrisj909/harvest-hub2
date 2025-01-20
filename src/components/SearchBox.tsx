import React, { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: string;
  name: string;
  price: number;
  vendor: {
    name: string;
    location: string;
    rating: number;
  };
  strain: string;
  thcPercentage: string;
  cbdPercentage: string;
  inStock: boolean;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    name: "Premium Indoor Hemp Flower",
    price: 29.99,
    vendor: {
      name: "Green Mountain Hemp",
      location: "Vermont",
      rating: 4.8
    },
    strain: "Sour Space Candy",
    thcPercentage: "0.2%",
    cbdPercentage: "18%",
    inStock: true
  },
  {
    id: "2",
    name: "Organic Outdoor Hemp Flower",
    price: 19.99,
    vendor: {
      name: "Carolina Hemp Farms",
      location: "North Carolina",
      rating: 4.6
    },
    strain: "Lifter",
    thcPercentage: "0.3%",
    cbdPercentage: "16%",
    inStock: true
  },
  {
    id: "3",
    name: "Small Batch Hemp Flower",
    price: 34.99,
    vendor: {
      name: "Oregon Hemp Collective",
      location: "Oregon",
      rating: 4.9
    },
    strain: "Hawaiian Haze",
    thcPercentage: "0.1%",
    cbdPercentage: "20%",
    inStock: false
  }
];

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>(mockResults);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [strainFilter, setStrainFilter] = useState<string>("all");

  const handleSearch = (search: string) => {
    setValue(search);
    // Filter results based on search term
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
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="relative">
        <div className="flex gap-2">
          <div className="flex-1">
            <Command className="rounded-lg border shadow-md">
              <CommandInput
                placeholder="Search by strain, vendor, or product name..."
                value={value}
                onValueChange={handleSearch}
                className="h-12"
              />
              {value && (
                <CommandList>
                  <ScrollArea className="h-[400px]">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Available Products">
                      {results.map((result) => (
                        <CommandItem
                          key={result.id}
                          value={result.name}
                          onSelect={(value) => {
                            setValue(value);
                            setOpen(false);
                          }}
                          className="flex flex-col items-start gap-1 py-4"
                        >
                          <div className="flex justify-between w-full">
                            <span className="font-medium">{result.name}</span>
                            <span className="font-bold">${result.price}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Badge variant="secondary">{result.strain}</Badge>
                            <Badge variant="outline">CBD: {result.cbdPercentage}</Badge>
                            <Badge variant="outline">THC: {result.thcPercentage}</Badge>
                          </div>
                          <div className="flex justify-between w-full text-sm text-muted-foreground">
                            <span>{result.vendor.name} • {result.vendor.location}</span>
                            <span>Rating: {result.vendor.rating}/5</span>
                          </div>
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
                      applyFilters(value, locationFilter, strainFilter);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under20">Under $20</SelectItem>
                      <SelectItem value="20to30">$20 - $30</SelectItem>
                      <SelectItem value="over30">Over $30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <Select
                    value={locationFilter}
                    onValueChange={(value) => {
                      setLocationFilter(value);
                      applyFilters(priceFilter, value, strainFilter);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Vermont">Vermont</SelectItem>
                      <SelectItem value="Oregon">Oregon</SelectItem>
                      <SelectItem value="North Carolina">North Carolina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Strain</h4>
                  <Select
                    value={strainFilter}
                    onValueChange={(value) => {
                      setStrainFilter(value);
                      applyFilters(priceFilter, locationFilter, value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select strain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Strains</SelectItem>
                      <SelectItem value="Sour Space Candy">Sour Space Candy</SelectItem>
                      <SelectItem value="Lifter">Lifter</SelectItem>
                      <SelectItem value="Hawaiian Haze">Hawaiian Haze</SelectItem>
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