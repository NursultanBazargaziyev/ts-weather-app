import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { UnitKeys } from "src/constants";

const WeatherUnitSelector: FC<{
  selectedUnit: UnitKeys;
  handleMetricChange: (event: SelectChangeEvent) => void;
}> = ({ selectedUnit, handleMetricChange }) => (
  <FormControl fullWidth>
    <InputLabel sx={{ color: "#fff" }} id="demo-simple-select-label">
      Unit
    </InputLabel>
    <Select
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: "transparent",
            "& .MuiMenuItem-root": {
              padding: 2,
            },
          },
        },
      }}
      label="Unit"
      value={selectedUnit}
      onChange={handleMetricChange}
    >
      <MenuItem value="metric">Celsius</MenuItem>
      <MenuItem value="standard">Kelvin</MenuItem>
      <MenuItem value="imperial">Fahrenheit</MenuItem>
    </Select>
  </FormControl>
);

export default WeatherUnitSelector;
