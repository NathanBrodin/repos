import { MinimalRepository } from "@/api/types";
import { useAppSelector } from "@/lib/hooks";

export function Repo({ name, description }: MinimalRepository) {
  const username = useAppSelector((state) => state.repos.username);

  return (
    <li className="flex flex-col border-b py-6 w-full ">
      <a
        href={`https://github.com/${username}/${name}`}
        className="text-primary text-xl font-semibold hover:underline w-fit"
      >
        {name}
      </a>
      <div className="text-sm text-muted-foreground">{description}</div>
    </li>
  );
}
