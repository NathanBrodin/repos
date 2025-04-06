import { MinimalRepository } from "@/api/types";
import { useAppSelector } from "@/lib/hooks";
import { ForksIcon, LawIcon, StarIcon } from "./icons";
import { Skeleton } from "./ui/skeleton";

export function Repo({
  name,
  description,
  topics,
  language,
  stargazers_count,
  forks_count,
  license,
  updated_at,
}: MinimalRepository) {
  const username = useAppSelector((state) => state.repos.username);

  // Format the updated_at date
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return `Updated on ${date.toLocaleDateString("en-US", options)}`;
  }

  return (
    <li className="flex flex-col border-b py-6 w-full gap-2">
      <div className="flex gap-2 h-min items-center">
        <a
          href={`https://github.com/${username}/${name}`}
          target="_blank"
          className="text-primary text-xl font-semibold hover:underline w-fit"
        >
          {name}
        </a>
        <span className="px-[6px] py-0.5 border rounded-lg text-muted-foreground text-xs font-medium">
          Public
        </span>
      </div>
      <div className="text-sm text-muted-foreground">{description}</div>
      <div className="flex flex-wrap gap-2">
        {topics?.map((topic) => (
          <a
            href={`https://github.com/topics/${topic}`}
            target="_blank"
            className="text-primary hover:text-white bg-primary-foreground hover:bg-primary px-3 py-1 rounded-lg text-xs"
          >
            {topic}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-2">
        {language && (
          <div className="text-muted-foreground flex gap-1 items-center">
            <div className="size-3 border rounded-full bg-primary" />
            <span className="text-xs">{language}</span>
          </div>
        )}
        {stargazers_count !== 0 && (
          <div className="text-muted-foreground flex gap-1">
            <StarIcon />
            <span className="text-xs">{stargazers_count}</span>
          </div>
        )}
        {forks_count !== 0 && (
          <div className="text-muted-foreground flex gap-1">
            <ForksIcon />
            <span className="text-xs">{forks_count}</span>
          </div>
        )}
        {license?.name && (
          <div className="text-muted-foreground flex gap-1">
            <LawIcon />
            <span className="text-xs">{license.name}</span>
          </div>
        )}
        {updated_at && (
          <div className="text-muted-foreground flex gap-1">
            <span className="text-xs">{formatDate(updated_at)}</span>
          </div>
        )}
      </div>
    </li>
  );
}

export function LoadingRepo() {
  return (
    <li className="flex flex-col border-b py-6 w-full gap-2">
      <Skeleton className="text-primary text-xl font-semibold hover:underline w-32 h-6" />
      <Skeleton className="text-sm text-muted-foreground w-96 h-4" />{" "}
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4]?.map((topic) => (
          <Skeleton
            key={topic}
            className="text-primary hover:text-white bg-primary-foreground hover:bg-primary w-12 h-5 px-3 py-1 rounded-lg text-xs"
          />
        ))}
      </div>
    </li>
  );
}
