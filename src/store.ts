import { configureStore } from "@reduxjs/toolkit/react";
import { githubApi } from "./api/github";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { reposSlice } from "./features/repos";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    repos: reposSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
