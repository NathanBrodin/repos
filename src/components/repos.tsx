import { GetReposByUsernameResponse } from "@/api/types";
import { Repo } from "./repo";
import { useAppSelector } from "@/lib/hooks";

type ReposProps = {
  repos?: GetReposByUsernameResponse;
};

export function Repos({ repos }: ReposProps) {
  const filterByName = useAppSelector((state) => state.repos.filters.name);

  // Filter repos based on filterByName (if it exists)
  const filteredRepos = repos?.filter((repo) =>
    filterByName
      ? repo.name.toLowerCase().includes(filterByName.toLowerCase())
      : true,
  );

  return (
    <ul> {filteredRepos?.map((repo) => <Repo key={repo.id} {...repo} />)}</ul>
  );
}
