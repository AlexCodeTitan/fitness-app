import { signIn as signInFirebase } from "./../firebase/auth";
import { User } from "firebase/auth";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk action for signIn
export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const user = await signInFirebase(
        credentials.email,
        credentials.password
      );
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// User state logic

type userState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: userState = {
  user: null,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export const userReducer = userSlice.reducer;
