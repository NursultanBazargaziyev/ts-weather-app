import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { WeatherFooterProps } from "src/typings/WeatherType";

const WeatherFooter: FC<WeatherFooterProps> = ({ name, feelsLike, unit }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <Typography>{name}</Typography>
    <Typography>
      Feels like: {feelsLike}
      {unit}
    </Typography>
  </Box>
);

export default WeatherFooter;
