// import { User } from "firebase/auth";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// User state logic

export type AppUser = {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  // Add any other fields you need
};

type userState = {
  user: AppUser | null;
  loading: boolean;
};

const initialState: userState = {
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    signOut: () => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const { setUser, setLoading, signOut } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = (state: { user: userState }) => state.user.user;
