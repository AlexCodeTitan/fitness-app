import { combineReducers } from "redux";
import { userReducer } from "./userSlice";

const combinedReducer = combineReducers({
  user: userReducer,
});

export default combinedReducer;
