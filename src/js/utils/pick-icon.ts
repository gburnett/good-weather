export default function (weatherStatus: string): string {
  switch (weatherStatus) {
    case 'Clear sky':
      return 'sunny';
    case 'Mainly clear':
      return 'mainly-clear';
    case 'Partly cloudy':
      return 'partly-cloudy';
    case 'Overcast':
      return 'overcast';
    case 'Fog':
      return 'fog';
    case 'Drizzle':
      return 'drizzle';
    case 'Rain':
      return 'rain';
    case 'Showers':
      return 'showers';
    case 'Thunderstorm':
      return 'thunderstorm';
    case 'Freezing rain':
      return 'freezing-rain';
    case 'Snowfall':
    case 'Snow showers':
      return 'snow';
    default:
      return "ERROR: Can't load weather icon";
  }
}
