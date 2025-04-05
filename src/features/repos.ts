import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReposState = {
  username: string;
  filters: {
    name: string | undefined;
  };
};

const initialState: ReposState = {
  username: "",
  filters: {
    name: undefined,
  },
};

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = reposSlice.actions;
export default reposSlice.reducer;
