import { DateTimeType } from '../types/types';

export default function (
  time: string,
  timezone: string,
  type: DateTimeType
): string {
  const date: number = Date.parse(time);

  let options: Intl.DateTimeFormatOptions = {};

  if (type === 'long') {
    options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: timezone
    };
  } else if (type === 'short') {
    options = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  const timeNow: string = new Intl.DateTimeFormat('en-GB', options).format(
    date
  );
  return timeNow;
}
