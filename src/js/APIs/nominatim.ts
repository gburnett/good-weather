import { NominatimResponse } from 'types/types';

export default async function (query: string): Promise<NominatimResponse[]> {
  const url: URL = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('city', query);
  url.searchParams.set('format', 'json');
  url.searchParams.set('addressdetails', '1');
  url.searchParams.set('accept-languag', 'en-US');

  try {
    const request = await fetch(url);
    const response = await request.json();

    if (!response.length) {
      throw new Error("Can't find this location. Please try again.");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
