import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
  keyword: string;
  keywordChange: (category: string) => void;
}

export default function SearchBar({ keyword, keywordChange }: Props) {
  return (
    <div className="flex h-10 max-w-screen-sm items-center rounded-md border border-gray-600 bg-[#1e1e20] pl-3 text-sm ring-offset-emerald-300 focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 sm:max-w-md">
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search title or tag"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="border-none text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
    </div>
  );
}
