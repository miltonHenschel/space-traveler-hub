import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missionsItems: [],
  isLoading: false,
};

export const fetchMissionsFromAPI = createAsyncThunk(
  'missions/fetchMissionsFromAPI',
  async () => {},
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissionsFromAPI, () => ({}));
  },
});

export default missionsSlice.reducer;
