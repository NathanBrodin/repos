import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetReposByUsernameResponse } from "./types";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getReposByUsername: builder.query<GetReposByUsernameResponse, string>({
      // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user--code-samples
      query: (username) => `users/${username}/repos`,
    }),
  }),
});

export const { useGetReposByUsernameQuery, useLazyGetReposByUsernameQuery } =
  githubApi;
