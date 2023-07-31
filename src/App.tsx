import { FC, useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Weather from "src/components/Weather/Weather";
import { useGetCurrentWeatherQuery } from "src/api/weather/weatherApi";
import { WeatherType } from "src/typings/WeatherType";
import theme from "src/components/theme/apptheme";
import { transformWeatherData } from "src/app/dto/transformWeatherData ";

const App: FC = () => {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [metrics, setMetrics] = useState<string>("metric");

  const { data, isLoading, isError } = useGetCurrentWeatherQuery({
    lat: lat,
    lon: lon,
    metrics: metrics,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        () => {
          setLat(52.2297);
          setLon(21.0122);
          console.log("Something wrong");
        }
      );
    }

    if (data) {
      const transformedData = transformWeatherData(data);
      if (transformedData?.weatherDescription) {
        transformedData.weatherDescription =
          transformedData.weatherDescription.charAt(0).toUpperCase() +
          transformedData.weatherDescription.slice(1);
      }
      setWeather(transformedData);
      console.log(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={appStyle}>
        <Box sx={cardWrapperStyle}>
          {weather && <Weather weather={weather} setMetrics={setMetrics} />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const cardWrapperStyle = {
  width: "100%",
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const appStyle = {
  width: "100%",
  height: "100vh",
  position: "relative",
  backgroundColor: "rgba(0,0,0,0.4)",
  "&:before": {
    content: `''`,
    background: `url('https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_1280.jpg') no-repeat center center/cover`,
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
};

export default App;
