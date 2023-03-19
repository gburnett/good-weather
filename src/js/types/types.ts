interface AnyObject {
  [key: string]: any;
}

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
  current_weather: AnyObject;
  daily: AnyObject;
  hourly: AnyObject;
  timezone: string;
}

interface WorldtimeResponse {
  datetime: string;
}

interface ElementsSelector {
  [key: string]: HTMLElement | null;
}

interface CountryList {
  [key: string]: string;
}

type DateTimeType = 'short' | 'long';

export {
  Location,
  NominatimResponse,
  OpenmeteoResponse,
  WorldtimeResponse,
  CountryList,
  DateTimeType,
  ElementsSelector
};
