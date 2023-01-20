import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  flightDate: moment(new Date()).format('DD-MM-YYYY'),
};

export const flightDateSlice = createSlice({
  name: 'flightDate',
  initialState,
  reducers: {
    setFlightDate: (state, action) => {
      state.flightDate = action.payload;
    },
  },
});

export const { setFlightDate } = flightDateSlice.actions;
export default flightDateSlice.reducer;
