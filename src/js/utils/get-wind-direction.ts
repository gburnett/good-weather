export default function (degree: number): string {
  switch (true) {
    case degree >= 0 && degree <= 19:
      return 'N';
    case degree >= 20 && degree <= 39:
      return 'N/NE';
    case degree >= 40 && degree <= 59:
      return 'NE';
    case degree >= 60 && degree <= 79:
      return 'E/NE';
    case degree >= 80 && degree <= 109:
      return 'E';
    case degree >= 110 && degree <= 129:
      return 'E/SE';
    case degree >= 130 && degree <= 149:
      return 'SE';
    case degree >= 150 && degree <= 169:
      return 'S/SE';
    case degree >= 170 && degree <= 199:
      return 'S';
    case degree >= 200 && degree <= 219:
      return 'S/SW';
    case degree >= 220 && degree <= 239:
      return 'SW';
    case degree >= 240 && degree <= 259:
      return 'W/SW';
    case degree >= 260 && degree <= 289:
      return 'W';
    case degree >= 290 && degree <= 309:
      return 'W/NW';
    case degree >= 310 && degree <= 329:
      return 'NW';
    case degree >= 330 && degree <= 349:
      return 'N/NW';
    case degree >= 350 && degree <= 360:
      return 'N';
    default:
      return 'ERROR: Incorrect wind direction';
  }
}
