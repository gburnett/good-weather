export default function (element: HTMLElement | null): void {
  if (element?.innerHTML) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = '';
  }
}
