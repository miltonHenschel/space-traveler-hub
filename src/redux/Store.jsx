import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "../redux/rockets/rocketSlice";

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
