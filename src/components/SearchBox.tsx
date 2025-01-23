import { SearchProvider } from "./search/SearchContext";
import SearchContainer from "./search/SearchContainer";

interface SearchBoxProps {
  initialValue?: string;
}

const SearchBox = ({ initialValue = "" }: SearchBoxProps) => {
  return (
    <SearchProvider initialValue={initialValue}>
      <SearchContainer />
    </SearchProvider>
  );
};

export default SearchBox;