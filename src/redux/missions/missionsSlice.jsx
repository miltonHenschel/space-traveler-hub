import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionsItems: [],
  isLoading: true,
};
const defaultURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionsFromAPI = createAsyncThunk(
  'missions/fetchMissionsFromAPI',
  async () => {
    const request = await axios.get(defaultURL);
    const response = await request.data;
    return response;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions(state, action) {
      const newState = state.missionsItems.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return { ...state, missionsItems: newState };
    },
    leaveMissions(state, action) {
      const newState = state.missionsItems.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, missionsItems: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsFromAPI.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchMissionsFromAPI.fulfilled, (state, action) => ({
        ...state,
        missionsItems: Object.entries(action.payload).map((item) => {
          const mission = { ...item[1] };
          return mission;
        }),
        isLoading: false,
      }));
    // .addCase(fetchMissionsFromAPI.rejected, (state) => ({
    //   ...state,
    // }))
    // .addCase(joinMissions.fulfilled, (state) => ({
    //   ...state,
    // }));
  },
});

export const { joinMissions, leaveMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
