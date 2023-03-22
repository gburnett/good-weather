import Toastify from 'toastify-js';

export default function (message: string): void {
  Toastify({
    text: message,
    duration: 7000,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true
  }).showToast();
}
