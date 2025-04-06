import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Sorts = undefined | "last-updated" | "name" | "stars";

type ReposState = {
  username: string;
  filters: {
    name: string | undefined;
  };
  sorts: Sorts;
};

const initialState: ReposState = {
  username: "",
  filters: {
    name: undefined,
  },
  sorts: undefined,
};

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.filters.name = action.payload;
    },
    setSorting: (state, action: PayloadAction<Sorts>) => {
      state.sorts = action.payload;
    },
  },
});

export const { setUsername, setNameFilter, setSorting } = reposSlice.actions;
export default reposSlice.reducer;
