import { Search } from "lucide-react";
import { useState } from "react";

type SearchUserProps = {
  onSearch: (username: string) => void;
  isLoading: boolean;
};

export function SearchUser({ onSearch, isLoading }: SearchUserProps) {
  const [username, setUsername] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border rounded-md px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          placeholder="Search for github users"
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </form>
  );
}
