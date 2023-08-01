import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherFooter from "./WeatherFooter";

describe("WeatherFooter rendering", () => {
  test("should display the name, feels like temperature, and unit correctly", () => {
    const name = "London";
    const feelsLike = 15;
    const unit = "°C";

    render(<WeatherFooter name={name} feelsLike={feelsLike} unit={unit} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText(`Feels like: ${feelsLike}${unit}`)
    ).toBeInTheDocument();
  });

  test("should not display incorrect name, feels like temperature, or unit", () => {
    const name = "London";
    const feelsLike = 15;
    const unit = "°C";

    render(<WeatherFooter name={name} feelsLike={feelsLike} unit={unit} />);

    const wrongName = "Paris";
    const wrongFeelsLike = 20;
    const wrongUnit = "°F";

    expect(screen.queryByText(wrongName)).not.toBeInTheDocument();
    expect(
      screen.queryByText(`Feels like: ${wrongFeelsLike}${wrongUnit}`)
    ).not.toBeInTheDocument();
  });
});
