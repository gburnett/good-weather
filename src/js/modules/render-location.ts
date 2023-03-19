export default function (city: string, country: string): void {
  const element: HTMLParagraphElement | null = document.querySelector(
    '.weather-card__date'
  );

  element!.textContent = `${city}, ${country}`;
}
