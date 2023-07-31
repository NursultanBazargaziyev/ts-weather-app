import React, { FC, useState } from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import { WeatherProps } from "src/typings/WeatherType";
import { UNITS, UnitKeys } from "src/constants";
import WeatherInfo from "./WeatherInfo";
import WeatherFooter from "./WeatherFooter";
import WeatherUnitSelector from "./WeatherUnitSelector";

const Weather: FC<WeatherProps> = ({ weather, setMetrics }) => {
  const [selectedUnit, setSelectedUnit] = useState<UnitKeys>("metric");
  const [unit, setUnit] = useState<string>(UNITS[selectedUnit]);

  const {
    temp,
    feelsLike,
    name,
    weatherMain,
    weatherDescription,
    weatherIconId,
  } = { ...weather };
  const iconUrl = `http://openweathermap.org/img/w/${weatherIconId}.png`;

  const handleMetricChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as UnitKeys;
    setSelectedUnit(selectedValue);
    setUnit(UNITS[selectedValue]);
    setMetrics(selectedValue);
  };

  return (
    <Box sx={weatherStyle}>
      <WeatherInfo
        {...{ temp, unit, weatherMain, iconUrl, weatherDescription }}
      />
      <WeatherUnitSelector {...{ selectedUnit, handleMetricChange }} />
      <WeatherFooter {...{ name, feelsLike, unit }} />
    </Box>
  );
};

const weatherStyle = {
  width: { xs: "200px", sm: "300px", md: "400px" },
  height: "450px",
  backgroundColor: "rgba(150, 150, 150, 0.5)",
  borderRadius: "5%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

export default Weather;
