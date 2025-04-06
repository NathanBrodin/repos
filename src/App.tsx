import { useLazyGetReposByUsernameQuery } from "./api/github";
import { GithubIcon, Repository, RepositoryIcon } from "./components/icons";
import { Repo } from "./components/repo";
import { SearchUser } from "./components/search-user";
import { useAppSelector } from "./lib/hooks";

function App() {
  const username = useAppSelector((state) => state.repos.username);
  const [fetchRepos, { data, error, isLoading }] =
    useLazyGetReposByUsernameQuery();

  function handleSearch(username: string) {
    fetchRepos(username);
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <header className="w-full p-4 pb-2 bg-[#02040a]  flex justify-between">
        <div className="flex gap-4 items-center">
          <GithubIcon />
          <span className="font-semibold text-sm">
            {username === "" ? "User" : username}
          </span>
        </div>
        <SearchUser onSearch={handleSearch} isLoading={isLoading} />
      </header>
      <nav className="border-b bg-[#02040a] px-4">
        <div className="flex items-center gap-2 p-2 border-b border-[#f78166] w-min">
          <RepositoryIcon className="text-muted-foreground" />
          <span className="font-semibold text-sm">Repositories</span>
          <span className="bg-muted  rounded-md px-[6px] text-xs font-medium">
            {data?.length ?? 0}
          </span>
        </div>
      </nav>
      <main className="max-w-6xl px-8 flex flex-col self-center mb-16">
        <div>
          <div>Filters</div>
          <li>{data?.map((repo) => <Repo key={repo.id} {...repo} />)}</li>
        </div>
      </main>
    </div>
  );
}

export default App;
