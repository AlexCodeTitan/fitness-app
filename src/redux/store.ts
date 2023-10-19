import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loadStateFromLocalStorage } from "../utils/loadUserFromLocalStorage";

const preloadedState = {
  user: {
    user: loadStateFromLocalStorage(),
    loading: false,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
