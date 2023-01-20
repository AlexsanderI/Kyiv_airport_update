import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flightDateApi = createApi({
  reducerPath: 'flightDate/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.iev.aero/api/flights/', //https://iev.aero/en/departures?date=16-01-2022
  }),
  endpoints: build => ({
    searchFlightDate: build.query({
      query: flyDay => `${flyDay}`,
    }),
  }),
});

export const { useSearchFlightDateQuery } = flightDateApi;
