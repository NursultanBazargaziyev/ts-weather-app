import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const WeatherInfo: FC<{
  temp: number;
  unit: string;
  weatherMain: string;
  iconUrl: string;
  weatherDescription: string;
}> = ({ temp, unit, weatherMain, iconUrl, weatherDescription }) => (
  <Box sx={weatherWrapperStyle}>
    <Typography>
      {temp}
      {unit}
      <br />
      {weatherMain}
    </Typography>
    <Box sx={weatherImgStyle} component="img" src={iconUrl} alt={weatherMain} />
    <Typography sx={weatherItemStyle}>{weatherDescription}</Typography>
  </Box>
);

const weatherWrapperStyle = {
  width: "100%",
  height: "50%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
};

const weatherImgStyle = {
  width: { sm: "80px", md: "100px" },
};

const weatherItemStyle = {
  flexBasis: "100%",
};

export default WeatherInfo;
