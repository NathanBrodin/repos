import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Input } from "./ui/input";
import { setNameFilter, setSorting, Sorts } from "@/features/repos";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Filters({ disabled }: { disabled?: boolean }) {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.repos.filters.name);

  const sort = useAppSelector((state) => state.repos.sorts);

  return (
    <div className="py-4 border-b flex gap-2">
      <Input
        value={name}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        placeholder="Find a repository..."
        disabled={disabled}
      />
      <Select
        onValueChange={(e) => dispatch(setSorting(e as Sorts))}
        defaultValue={sort}
      >
        <SelectTrigger className="border px-4 py-1 rounded-md bg-muted text-sm font-medium">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup>
            <SelectLabel>Select Order</SelectLabel>
            <SelectItem value="last-updated">Last Updated</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="stars">Stars</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
