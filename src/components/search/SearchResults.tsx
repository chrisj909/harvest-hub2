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
  
  // Don't render anything if there's no search value
  if (!searchValue?.trim()) {
    return null;
  }

  return (
    <CommandList>
      <ScrollArea className="h-[300px] sm:h-[400px]">
        {results.length === 0 ? (
          <CommandEmpty>No results found.</CommandEmpty>
        ) : (
          <CommandGroup heading="Available Products">
            {results.map((result) => (
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