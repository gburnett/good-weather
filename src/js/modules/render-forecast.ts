import getTime from 'utils/datetime';
import getWeatherStatus from 'utils/weather-status';

import { OpenmeteoResponse } from 'types/types';

export default function (data: OpenmeteoResponse): void {
  const currentHour: string = data.current_weather.time;
  const forecastPoints: number = 8;

  const tableBody: HTMLElement | null = document.querySelector(
    '[data-forecast-table-body]'
  );

  let step: number = 0;
  let currentIndex: number | null = null;

  // Find index of current hour
  data.hourly.time.forEach((point: string, index: number) => {
    if (point === currentHour) {
      currentIndex = index;
    }
  });

  // Clear previous data if any
  if (tableBody?.innerHTML) {
    tableBody.innerHTML = '';
  }

  for (let i = 0; i < forecastPoints; i++) {
    step += 2;

    const newTableRow = document.createElement('tr') as HTMLTableRowElement;
    newTableRow.className = 'weather-card__forecast-table-row';
    newTableRow.innerHTML = `
      <td class="weather-card__forecast-table-col">
        ${getTime('short', data.hourly.time[currentIndex! + step])}
      </td>
      <td class="weather-card__forecast-table-col">
        ${data.hourly.temperature_2m[currentIndex! + step]}°C
      </td>
      <td class="weather-card__forecast-table-col">
        ${getWeatherStatus(data.hourly.weathercode[currentIndex! + step])}
      </td>
    `;

    tableBody?.appendChild(newTableRow);
  }
}
