import getDateTime from 'utils/datetime';

export default function (time: string, timezone: string): void {
  const element: HTMLParagraphElement | null = document.querySelector(
    '.weather-card__date'
  );

  element!.textContent = getDateTime('long', time, timezone);
}
