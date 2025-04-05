import { useLazyGetReposByUsernameQuery } from "./api/github";
import { SearchUser } from "./components/search-user";

function App() {
  const [fetchRepos, { data, error, isLoading }] =
    useLazyGetReposByUsernameQuery();

  function handleSearch(username: string) {
    fetchRepos(username);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <SearchUser onSearch={handleSearch} isLoading={isLoading} />
      {isLoading && <div>Loading...</div>}
      {error && <div>error: {JSON.stringify(error, null, 2)}</div>}
      {data?.map((repo) => <div key={repo.id}>{repo.name}</div>)}
    </div>
  );
}

export default App;
