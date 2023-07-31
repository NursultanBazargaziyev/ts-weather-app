export type WeatherParams = {
  lat: number;
  lon: number;
  metrics: string;
};

export interface WeatherProps {
  weather: WeatherType;
  setMetrics: (value: string | ((prevVar: string) => string)) => void;
}

export type WeatherType = {
  temp: number;
  feelsLike: number;
  name: string;
  weatherMain: string;
  weatherDescription: string;
  weatherIconId: string;
};
