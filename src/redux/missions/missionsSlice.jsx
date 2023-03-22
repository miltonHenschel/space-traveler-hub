import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionsItems: [],
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
  reducers: {},
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
      }))
      .addCase(fetchMissionsFromAPI.rejected, (state) => ({
        ...state,
      }));
  },
});

export default missionsSlice.reducer;
