import getTime from 'utils/datetime';
import getWeatherStatus from 'utils/weather-status';
import getWindDirection from 'utils/get-wind-direction';

import { OpenmeteoResponse, ElementsSelector } from 'types/types';

export default function (data: OpenmeteoResponse): void {
  const ELEMENTS: ElementsSelector = {
    currentTemperature: document.querySelector('[data-current-temperature]'),
    currentWeather: document.querySelector('[data-current-weather]'),
    realFeel: document.querySelector('[data-real-feel]'),
    wind: document.querySelector('[data-wind]'),
    pressure: document.querySelector('[data-pressure]'),
    humidity: document.querySelector('[data-humidity]'),
    sunrise: document.querySelector('[data-sunrise]'),
    sunset: document.querySelector('[sunset]')
  };

  const currentTimeSpamp = data.current_weather.time;
  const currentTimeStampIndex = data.hourly.time.indexOf(currentTimeSpamp);

  const weatherData = {
    weatherStatus: getWeatherStatus(data.current_weather.weathercode),
    temperature: data?.hourly.temperature_2m[currentTimeStampIndex],
    realFeel: data.hourly.apparent_temperature[currentTimeStampIndex],
    windDirection: getWindDirection(data.current_weather.winddirection),
    windSpeed: data.hourly.windspeed_10m[currentTimeStampIndex],
    pressure: data.hourly.pressure_msl[currentTimeStampIndex],
    humidity: data.hourly.relativehumidity_2m[currentTimeStampIndex],
    sunrise: getTime('short', data.daily.sunrise[0]),
    sunset: getTime('short', data.daily.sunset[0])
  };

  ELEMENTS.currentTemperature!.textContent = `${weatherData.temperature}°C`;
  ELEMENTS.currentWeather!.textContent = `${weatherData.weatherStatus}`;
  ELEMENTS.realFeel!.textContent = `${weatherData.realFeel}°C`;
  ELEMENTS.wind!.textContent = `${weatherData.windDirection}, ${weatherData.windSpeed} km/h`;
  ELEMENTS.pressure!.textContent = `${weatherData.pressure} hPa`;
  ELEMENTS.humidity!.textContent = `${weatherData.humidity}%`;
  ELEMENTS.sunrise!.textContent = `${weatherData.sunrise}`;
  ELEMENTS.sunset!.textContent = `${weatherData.sunset}`;
}