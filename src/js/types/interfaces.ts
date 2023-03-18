interface Location {
  city: string | null;
  country: string | null;
}

interface NominatimResponse {
  address: object;
  lat: string;
  lon: string;
}

export { Location, NominatimResponse };
