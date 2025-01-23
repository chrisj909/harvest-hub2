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
  
  // Guard against empty search
  if (!searchValue.trim()) {
    return null;
  }

  // Ensure results is always an array
  const safeResults = Array.isArray(results) ? results : [];
  
  return (
    <CommandList>
      <ScrollArea className="h-[300px] sm:h-[400px]">
        {safeResults.length === 0 && searchValue.trim() !== "" && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
        {safeResults.length > 0 && (
          <CommandGroup heading="Available Products">
            {safeResults.map((result) => (
              <SearchResultItem
                key={result?.id || Math.random()}
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