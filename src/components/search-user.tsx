import { setUsername } from "@/features/repos";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Search } from "lucide-react";
import { useState } from "react";

type SearchUserProps = {
  onSearch: (username: string) => void;
  isLoading: boolean;
};

export function SearchUser({ onSearch, isLoading }: SearchUserProps) {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setUsername(user));
    setUser("");
    onSearch(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border rounded-md pl-2 pr-4 p-[5px]">
        <Search className="mr-2 size-4 shrink-0 opacity-50" />
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          disabled={isLoading}
          placeholder="Search for github users"
          className="flex h-6 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </form>
  );
}
