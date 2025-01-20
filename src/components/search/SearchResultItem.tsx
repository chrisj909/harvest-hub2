import { Badge } from "@/components/ui/badge";
import { CommandItem } from "@/components/ui/command";
import type { SearchResult } from "@/types/search";

interface SearchResultItemProps {
  result: SearchResult;
  onSelect: (value: string) => void;
}

export const SearchResultItem = ({ result, onSelect }: SearchResultItemProps) => {
  return (
    <CommandItem
      key={result.id}
      value={result.name}
      onSelect={onSelect}
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
  );
};