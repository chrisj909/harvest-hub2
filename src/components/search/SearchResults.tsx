import { CommandList, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchResultItem } from "./SearchResultItem";
import type { SearchResult } from "@/types/search";

interface SearchResultsProps {
  results: SearchResult[];
  onSelect: (value: string) => void;
  visible?: boolean;
}

export const SearchResults = ({ results, onSelect, visible = true }: SearchResultsProps) => {
  if (!visible) {
    return null;
  }

  return (
    <CommandList>
      <ScrollArea className="h-[300px] sm:h-[400px]">
        {!Array.isArray(results) || results.length === 0 ? (
          <CommandEmpty>No results found.</CommandEmpty>
        ) : (
          <CommandGroup heading="Available Products">
            {results.map((result) => (
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