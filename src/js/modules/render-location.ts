export default function (city: string, country: string): void {
  const element: HTMLParagraphElement | null = document.querySelector(
    '.weather-card__location'
  );

  element!.textContent = `${city}, ${country}`;
}
