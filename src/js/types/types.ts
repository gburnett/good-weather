interface GenericObject {
  [key: string]: any;
}

interface Location {
  city: string | null;
  placeId: string | null;
}

interface NominatimResponse {
  address: GenericObject;
  display_name: string;
  place_id: number;
  lat: string;
  lon: string;
}

interface OpenmeteoResponse {
  current_weather: GenericObject;
  daily: GenericObject;
  hourly: GenericObject;
  timezone: string;
}

interface WorldtimeResponse {
  datetime: string;
  timezone: string;
}

interface GeoJSResponse {
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

interface ElementsSelector {
  [key: string]: HTMLElement | null;
}

interface CountryList {
  [key: string]: string;
}

interface LocalStorageData {
  city: string;
  country: string;
  lat: string;
  lon: string;
}

type DateTimeType = 'short' | 'long';

export {
  GenericObject,
  Location,
  NominatimResponse,
  OpenmeteoResponse,
  WorldtimeResponse,
  CountryList,
  DateTimeType,
  ElementsSelector,
  LocalStorageData,
  GeoJSResponse
};
