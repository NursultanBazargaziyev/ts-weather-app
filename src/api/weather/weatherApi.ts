import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherParams } from "src/typings/WeatherType";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon, metrics }: WeatherParams) => ({
        method: "GET",
        url: `/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=${metrics}`,
      }),
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApi;
