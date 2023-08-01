import "@testing-library/jest-dom/extend-expect";
import App from "./App";
const { render, screen } = require("@testing-library/react");
const { weatherApi } = require("./api/weather/weatherApi");

jest.mock("src/api/weather/weatherApi");

describe("<App/>", () => {
  let data;
  let transformedData;
  beforeAll(() => {
    data = {
      coord: {
        lon: 10.99,
        lat: 44.34,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      base: "stations",
      main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
      },
      visibility: 10000,
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      rain: {
        "1h": 3.16,
      },
      clouds: {
        all: 100,
      },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: "IT",
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 7200,
      id: 3163858,
      name: "Zocca",
      cod: 200,
    };
    transformedData = {
      temp: 298.48,
      feelsLike: 298.74,
      name: "Zocca",
      weatherMain: "Rain",
      weatherDescription: "Moderate rain",
      weatherIconId: "10d",
    };
  });

  test("renders loading state", () => {
    weatherApi.useGetCurrentWeatherQuery.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    weatherApi.useGetCurrentWeatherQuery.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });
    render(<App />);

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  test("renders weather data successfully", async () => {
    weatherApi.useGetCurrentWeatherQuery.mockReturnValue({
      data: data,
      isLoading: false,
      isError: false,
    });

    render(<App />);
    expect(screen.getByText(transformedData.name)).toBeInTheDocument();
  });

  test("does not render incorrect weather data", () => {
    const wrongData = {
      coord: { lon: 123.45, lat: 67.89 },
      weather: [],
      base: "stations",
      main: {
        temp: 100.0,
        feels_like: 100.0,
        temp_min: 100.0,
        temp_max: 100.0,
        pressure: 1000,
        humidity: 0,
        sea_level: 1000,
        grnd_level: 1000,
      },
      visibility: 0,
      wind: {
        speed: 10.0,
        deg: 180,
        gust: 10.0,
      },
      clouds: {
        all: 0,
      },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: "WRONG",
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 0,
      id: 1234567,
      name: "Wrong City",
      cod: 400,
    };

    weatherApi.useGetCurrentWeatherQuery.mockReturnValue({
      data: wrongData,
      isLoading: false,
      isError: false,
    });

    render(<App />);

    expect(screen.queryByText(wrongData.name)).not.toBeInTheDocument();
    expect(screen.queryByText("Temp: 100.00")).not.toBeInTheDocument();
    expect(screen.queryByText("Feels like: 100.00")).not.toBeInTheDocument();
    expect(screen.queryByText("WRONG")).not.toBeInTheDocument();
  });
});
