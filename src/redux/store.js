import { configureStore } from '@reduxjs/toolkit';
import flightDateReducer from './flightDateSlice';
import searchFlightReducer from './searchFlightSlice';
import { flightDateApi } from './flightDate.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    [flightDateApi.reducerPath]: flightDateApi.reducer,
    flightDate: flightDateReducer,
    searchFlight: searchFlightReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flightDateApi.middleware),
});

setupListeners(store.dispatch);
export default store;
