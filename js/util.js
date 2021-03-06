// Результат: целое число из диапазона "от...до"
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return getRandomNumber(Math.abs(min), Math.abs(max));
  }
  if (max === min) {
    return min;
  }
  if (max < min) {
    return getRandomNumber(max, min);
  }
  return Math.round(Math.random() * (min - max)) + max;
};

// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getGeoCoordinates = (min, max, amount) => {
  if (min < 0 || max < 0) {
    return getGeoCoordinates(Math.abs(min), Math.abs(max), amount);
  }
  if (max < min) {
    return getGeoCoordinates(max, min, amount);
  }
  if (max === min) {
    return parseFloat(min.toFixed(amount));
  }
  const geoNumber = Math.random() * (max - min) + min;
  return geoNumber.toFixed(amount);
};

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];
const getRandomPart = (items) => {
  const lastIndex = items.length - 1;
  const valueA = getRandomNumber(0, lastIndex);
  const valueB = getRandomNumber(0, lastIndex);
  return items.slice(Math.min(valueA, valueB), Math.max(valueA, valueB));
};

export {getRandomNumber, getGeoCoordinates, getRandomElement, getRandomPart};
