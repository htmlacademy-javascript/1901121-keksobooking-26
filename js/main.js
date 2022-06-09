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

getRandomNumber(16, 12);


// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getGeoCoordinates = (min, max, amount) => {
  if (min < 0 || max < 0) {
    return getGeoCoordinates(Math.abs(min), Math.abs(max), amount);
  }
  if (max < min) {
    return getGeoCoordinates(Math.abs(max), Math.abs(min), amount);
  }
  const geoNumber = Math.random() * (max - min) + min;
  const geoNumberResult = geoNumber.toFixed(amount);
  return parseFloat(geoNumberResult);
};

getGeoCoordinates(1.9, 1.8, 5);
