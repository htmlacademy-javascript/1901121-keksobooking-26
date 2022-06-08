// Результат: целое число из диапазона "от...до"

const getRandomNumber = (min, max) => {
  if (min >= 0 && max > min) {
    const randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  if (max < min) {
    const randomNumber = Math.round(Math.random() * (min - max)) + max;
    return randomNumber;
  }
  const randomNumber = min;
  return randomNumber;
 };

getRandomNumber(16, 12);


// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getGeoCoordinates = (min, max, amount) => {
  if (min >= 0 && max > min) {
    const geoNumber = Math.random() * (max - min) + min;
    const geoNumberResult = geoNumber.toFixed(amount);
    return geoNumberResult;
  }
  if (max < min) {
    const geoNumber = Math.round(Math.random() * (min - max)) + max;
    const geoNumberResult = geoNumber.toFixed(amount);
    return geoNumberResult;
  }

  const geoNumber = min;
  const geoNumberResult = geoNumber.toFixed(amount);
  return geoNumberResult;

};

getGeoCoordinates(1.2, 1.8, 5);
