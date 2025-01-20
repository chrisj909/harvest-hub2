import { CommandInput } from "@/components/ui/command";

interface SearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const SearchInput = ({ value, onValueChange }: SearchInputProps) => {
  return (
    <CommandInput
      placeholder="Search by strain, vendor, or product name..."
      value={value}
      onValueChange={onValueChange}
      className="h-12"
    />
  );
};