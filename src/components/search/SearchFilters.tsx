import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchFiltersProps {
  priceFilter: string;
  locationFilter: string;
  strainFilter: string;
  onPriceChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onStrainChange: (value: string) => void;
}

export const SearchFilters = ({
  priceFilter,
  locationFilter,
  strainFilter,
  onPriceChange,
  onLocationChange,
  onStrainChange,
}: SearchFiltersProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Price Range</h4>
        <Select value={priceFilter} onValueChange={onPriceChange}>
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
        <Select value={locationFilter} onValueChange={onLocationChange}>
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
        <Select value={strainFilter} onValueChange={onStrainChange}>
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
  );
};