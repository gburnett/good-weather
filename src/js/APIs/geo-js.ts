export default async function getLocation(): Promise<any> {
  const url: string = `https://get.geojs.io/v1/ip/geo.json`;

  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch {
    throw new Error(
      "Can't detect your location. Please choose the desired location manually."
    );
  }
}
