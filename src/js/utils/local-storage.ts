import { Location } from '../types/interfaces';

function checkLocalStorage(): boolean {
  if (!localStorage.getItem('city') && !localStorage.getItem('country')) {
    return false;
  }
  return true;
}

function saveLocation(city: string, country: string): void {
  localStorage.setItem('city', city);
  localStorage.setItem('country', country);
}

function getSavedLocation(): Location {
  const localStorageExists: boolean = checkLocalStorage();

  if (!localStorageExists) {
    throw new Error('No location saved in local storage');
  }

  const city: string | null = localStorage.getItem('city');
  const country: string | null = localStorage.getItem('country');
  return { city, country };
}

export { checkLocalStorage, saveLocation, getSavedLocation };
