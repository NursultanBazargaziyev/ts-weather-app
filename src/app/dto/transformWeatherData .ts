import { WeatherType } from "src/typings/WeatherType";

interface RawWeatherDataType {
  main: {
    temp: number;
    feels_like: number;
  };
  name: string;
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

export const transformWeatherData = (
  data: RawWeatherDataType
): WeatherType | null => {
  if (!data || !data.main || !data.weather || data.weather.length === 0) {
    return null;
  }

  return {
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    name: data.name,
    weatherMain: data.weather[0].main,
    weatherDescription: data.weather[0].description,
    weatherIconId: data.weather[0].icon,
  };
};
