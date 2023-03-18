export default async function (city: string, country: string): Promise<any> {
  const url: URL = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('city', city);
  url.searchParams.set('country', country);
  url.searchParams.set('format', 'json&addressdetails=1');
  url.searchParams.set('limit', '1');
  url.searchParams.set('accept-languag', 'en-US');

  try {
    const request = await fetch(url);
    const response = await request.json();

    if (!response.length) {
      throw new Error("Can't find this location. Please try again.");
    } else if (!response[0].address.city) {
      throw new Error('Please provide a city');
    }

    return response;
  } catch {
    throw new Error('Something went wrong... Please try again later.');
  }
}
