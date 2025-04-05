import { MinimalRepository } from "@/api/types";
import { useAppSelector } from "@/lib/hooks";

export function Repo({ name, description }: MinimalRepository) {
  const username = useAppSelector((state) => state.repos.username);

  return (
    <ul className="flex flex-col border-b py-6 ">
      <a
        href={`https://github.com/${username}/${name}`}
        className="text-primary text-xl font-semibold hover:underline"
      >
        {name}
      </a>
      <div className="text-sm text-muted-foreground">{description}</div>
    </ul>
  );
}
