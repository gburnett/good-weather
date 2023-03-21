import { Location } from 'types/types';

function checkLocalStorage(): boolean {
  if (!localStorage.getItem('city') && !localStorage.getItem('place_id')) {
    return false;
  }
  return true;
}

function saveLocation(city: string, placeId: string): void {
  localStorage.setItem('city', city);
  localStorage.setItem('place_id', placeId);
}

function getSavedLocation(): Location {
  const localStorageExists: boolean = checkLocalStorage();

  if (!localStorageExists) {
    throw new Error('No location saved in local storage');
  }

  const city: string | null = localStorage.getItem('city');
  const placeId: string | null = localStorage.getItem('place_id');
  return { city, placeId };
}

export { checkLocalStorage, saveLocation, getSavedLocation };
