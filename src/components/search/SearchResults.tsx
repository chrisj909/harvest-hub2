import { CommandList, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchResultItem } from "./SearchResultItem";
import type { SearchResult } from "@/types/search";
import { useSearch } from "@/context/SearchContext";

interface SearchResultsProps {
  results: SearchResult[];
  onSelect: (value: string) => void;
}

export const SearchResults = ({ results, onSelect }: SearchResultsProps) => {
  const { searchValue } = useSearch();
  const safeResults = Array.isArray(results) ? results : [];
  
  // Only render CommandList if there's a search value
  if (!searchValue.trim()) {
    return null;
  }
  
  return (
    <CommandList>
      <ScrollArea className="h-[300px] sm:h-[400px]">
        {safeResults.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
        {safeResults.length > 0 && (
          <CommandGroup heading="Available Products">
            {safeResults.map((result) => (
              <SearchResultItem
                key={result.id}
                result={result}
                onSelect={onSelect}
              />
            ))}
          </CommandGroup>
        )}
      </ScrollArea>
    </CommandList>
  );
};