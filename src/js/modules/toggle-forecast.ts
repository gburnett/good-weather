import { ElementsSelector } from 'types/types';

export default function (): void {
  const ELEMENTS: ElementsSelector = {
    forecastParent: document.querySelector('[data-forecast]'),
    forecastHeader: document.querySelector('[data-forecast-header]'),
    forecastCaption: document.querySelector('[data-forecast-caption]'),
    forecastBody: document.querySelector('[data-forecast-body]')
  };

  const activeClass = 'weather-card__forecast--active';
  const defaultCaption = 'Show forecast';
  const activeCaption = 'Hide forecast';

  ELEMENTS.forecastHeader?.addEventListener('click', () => {
    ELEMENTS.forecastParent?.classList.toggle(activeClass);

    if (ELEMENTS.forecastBody?.style.maxHeight) {
      ELEMENTS.forecastBody!.style.maxHeight = '';
      ELEMENTS.forecastCaption!.textContent = defaultCaption;
    } else {
      ELEMENTS.forecastBody!.style.maxHeight = `${
        ELEMENTS.forecastBody!.scrollHeight
      }px`;
      ELEMENTS.forecastCaption!.textContent = activeCaption;
    }
  });
}
