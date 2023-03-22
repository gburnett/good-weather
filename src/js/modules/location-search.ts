import debounce from 'lodash.debounce';

import { LocalStorageData } from 'types/types';

import clearHTML from 'utils/clear-html';
import { saveLocation } from 'utils/local-storage';
import openmeteo from '../APIs/openmeteo';
import worldtime from '../APIs/worldtime';
import nominatim from '../APIs/nominatim';

import renderCurrentWeather from './render-current-weather';
import renderForecast from './render-forecast';
import renderLocation from './render-location';
import renderCurrentDatetime from './render-current-datetime';

export default function (): void {
  const searchForm: HTMLFormElement | null =
    document.querySelector('[data-search]');

  const searchResultsParent: HTMLDivElement | null = document.querySelector(
    '[data-search-results]'
  );

  const searchInput: HTMLInputElement | null = document.querySelector(
    '[data-search-input]'
  );

  const searchResultsList: HTMLUListElement | null = document.querySelector(
    '[data-search-results-list]'
  );

  // Using lodash debounce to avoid spamming the API with requests
  const handleSearch = debounce(() => {
    const query: string | undefined = searchInput?.value;

    if (query) {
      nominatim(query)
        .then((data) => {
          clearHTML(searchResultsList);
          searchResultsParent!.style.display = 'block';

          data.forEach((item) => {
            /*
              The location name property in item.address object can have different names depending on location's type. So it's accessed via index rather than property name
            */
            const itemKeys: string[] = Object.keys(item.address);

            const li = document.createElement('li') as HTMLLIElement;
            li.className = 'searchbar__results-item';
            li.innerHTML = `${item.display_name}`;
            li.setAttribute('data-place-name', item.address[itemKeys[0]]);
            li.setAttribute('data-place-country', item.address.country);
            li.setAttribute('data-place-lon', item.lon);
            li.setAttribute('data-place-lat', item.lat);

            searchResultsList?.appendChild(li);
          });

          if (searchResultsParent) {
            searchResultsParent.style.display = 'block';
          }
        })
        .catch((error) => {
          clearHTML(searchResultsList);

          const message = document.createElement('li') as HTMLLIElement;
          message.className = 'searchbar__results-message';
          message.textContent = error.message;
          searchResultsList?.appendChild(message);
        });

      // Abort search if query is empty
    } else if (!query && searchResultsParent) {
      searchResultsParent.style.display = 'none';
    }
  }, 300);

  /*
   * Events
   */
  searchInput?.addEventListener('keyup', handleSearch);

  // Choose location
  searchResultsList?.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('searchbar__results-item')) return;

    const location: LocalStorageData = {
      city: target.getAttribute('data-place-name')!,
      country: target.getAttribute('data-place-country')!,
      lon: target.getAttribute('data-place-lon')!,
      lat: target.getAttribute('data-place-lat')!
    };

    saveLocation(location);

    renderLocation(location.city, location.country);

    openmeteo(location.lat, location.lon)
      .then((data) => {
        renderCurrentWeather(data);
        return data;
      })
      .then((data) => {
        renderForecast(data);
        return data;
      })
      .then((data) => {
        return worldtime(data.timezone);
      })
      .then((data) => {
        renderCurrentDatetime(data.datetime, data.timezone);
      })
      .catch((error) => {
        // TODO Show error message
        console.log(error);
      });
  });

  // Close search result when clicked anywhere
  document.addEventListener('click', (e: Event) => {
    if (
      !searchForm?.contains(e.target as HTMLElement) &&
      searchResultsParent &&
      searchResultsParent?.style.display !== 'none'
    ) {
      clearHTML(searchResultsList);
      searchResultsParent.style.display = 'none';
    }
  });

  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
