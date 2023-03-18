import { OpenmeteoResponse } from '../types/interfaces';

export default async function (
  lat: number,
  lng: number
): Promise<OpenmeteoResponse> {
  const url: URL = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', lat.toString());
  url.searchParams.set('longitude', lng.toString());
  url.searchParams.set(
    'hourly',
    'temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,pressure_msl,windspeed_10m'
  );
  url.searchParams.set('daily', 'weathercode,sunrise,sunset');
  url.searchParams.set('current_weather', 'true');
  url.searchParams.set('timezone', 'auto');

  try {
    const request = await fetch(url);

    const response = await request.json();

    if (response.error) {
      throw new Error('Can\t load the weather at the moment. Try again later');
    }

    return response;
  } catch {
    throw new Error('Something went wrong... Please try again later.');
  }
}
