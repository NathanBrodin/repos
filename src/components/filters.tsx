import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Input } from "./ui/input";
import { setNameFilter } from "@/features/repos";

export function Filters({ disabled }: { disabled?: boolean }) {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.repos.filters.name);

  return (
    <div className="py-4 border-b">
      <Input
        value={name}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        placeholder="Find a repository..."
        disabled={disabled}
      />
    </div>
  );
}
