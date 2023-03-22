import { GeoJSResponse } from 'types/types';

export default async function (): Promise<GeoJSResponse> {
  const url: string = `https://get.geojs.io/v1/ip/geo.json`;

  try {
    const request = await fetch(url);
    const response: GeoJSResponse = await request.json();
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
    // return null;
  }
}
