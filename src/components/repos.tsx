import { GetReposByUsernameResponse } from "@/api/types";
import { LoadingRepo, Repo } from "./repo";
import { useAppSelector } from "@/lib/hooks";

type ReposProps = {
  repos?: GetReposByUsernameResponse;
};

export function Repos({ repos }: ReposProps) {
  const filterByName = useAppSelector((state) => state.repos.filters.name);
  const sort = useAppSelector((state) => state.repos.sorts);

  // Filter repos based on filterByName (if it exists)
  const filteredRepos = repos?.filter((repo) =>
    filterByName
      ? repo.name.toLowerCase().includes(filterByName.toLowerCase())
      : true,
  );

  // Sort repos based on selected sort option
  const sortedRepos = filteredRepos ? [...filteredRepos] : [];

  if (sort) {
    sortedRepos.sort((a, b) => {
      switch (sort) {
        case "name": {
          return a.name.localeCompare(b.name);
        }
        case "stars": {
          const starsA = a.stargazers_count || 0;
          const starsB = b.stargazers_count || 0;
          return starsB - starsA;
        }
        case "last-updated": {
          const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
          const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
          return dateB - dateA;
        }
        default: {
          return 0;
        }
      }
    });
  }

  return (
    <ul> {sortedRepos?.map((repo) => <Repo key={repo.id} {...repo} />)}</ul>
  );
}

export function LoadingRepos() {
  return (
    <ul>
      {" "}
      {[0, 1, 2].map((_, index) => (
        <LoadingRepo key={index} />
      ))}
    </ul>
  );
}
