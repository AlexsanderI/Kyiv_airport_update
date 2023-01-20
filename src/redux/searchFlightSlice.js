import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchFlight: '',
};

export const searchFlightSlice = createSlice({
  name: 'searchFlight',
  initialState,
  reducers: {
    setSearchFlight: (state, action) => {
      state.searchFlight = action.payload;
    },
  },
});

export const { setSearchFlight } = searchFlightSlice.actions;
export default searchFlightSlice.reducer;
