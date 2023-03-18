interface Location {
  city: string | null;
  country: string | null;
}

interface NominatimResponse {
  address: object;
  lat: string;
  lon: string;
}

interface OpenmeteoResponse {
  current_weather: object;
  daily: object;
  hourly: object;
  timezone: string;
}

interface WorldtimeResponse {
  datetime: string;
}

interface CountryList {
  [key: string]: string;
}

export {
  Location,
  NominatimResponse,
  OpenmeteoResponse,
  WorldtimeResponse,
  CountryList
};
