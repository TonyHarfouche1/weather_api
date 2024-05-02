import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateManchesterWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateGlasgowWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateLondonTemperatureForecast = (): { dayOne: number, dayTwo: number, dayThree: number } => {
  // Generate random temperature forecast for three days
  const temperatureForecast = {
    dayOne: faker.number.int({ min: -5, max: 25 }),
    dayTwo: faker.number.int({ min: -5, max: 25 }),
    dayThree: faker.number.int({ min: -5, max: 25 }),
  };

  // Return temperature forecast
  return temperatureForecast;
};

import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 * "/:city",
 * validateCityName,
 * getWeatherData
 * );
 */
export const validateCityName = param("city")
  .isString()
  .isIn(["london", "dublin", "manchester", "glasgow", "london/temperature-forecast"])
  .withMessage("City name must be either london, dublin, manchester, glasgow, or london/temperature-forecast");