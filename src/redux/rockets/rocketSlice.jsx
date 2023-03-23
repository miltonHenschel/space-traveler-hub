import { createSlice } from "@reduxjs/toolkit";
import { fetchRocketsInformation } from "./rocketAction";

const initialState = [];
export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    reserveRocket: (state, action) =>
      state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      }),
  },
  extraReducers: {
    [fetchRocketsInformation.fulfilled]: (state, action) => action.payload,
  },
});

export const { reserveRocket } = rocketSlice.actions;
export const { getReserved } = (state) => state.rocket.reserved;
export default rocketSlice.reducer;
