import { ElementsSelector } from 'types/types';

export default function (): void {
  const ELEMENTS: ElementsSelector = {
    parent: document.querySelector('[data-forecast]'),
    toggle: document.querySelector('[data-forecast-header-wrapper]'),
    caption: document.querySelector('[data-forecast-caption]'),
    body: document.querySelector('[data-forecast-body]')
  };

  const activeClass = 'weather-card__forecast--active';
  const defaultCaption = 'Show forecast';
  const activeCaption = 'Hide forecast';

  ELEMENTS.toggle?.addEventListener('click', () => {
    ELEMENTS.parent?.classList.toggle(activeClass);

    if (ELEMENTS.body?.style.maxHeight) {
      ELEMENTS.body!.style.maxHeight = '';
      ELEMENTS.caption!.textContent = defaultCaption;
    } else {
      ELEMENTS.body!.style.maxHeight = `${ELEMENTS.body!.scrollHeight}px`;
      ELEMENTS.caption!.textContent = activeCaption;
    }
  });
}
