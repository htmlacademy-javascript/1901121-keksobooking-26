// Результат: целое число из диапазона "от...до"

const sayHi = (message) => {
  console.log(`Результат: ${message}`);
}

const getRandomNumber = (min, max) => {
  if (min >= 0 & max > min) {
    const randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  if (max < min) {
    const randomNumber = Math.round(Math.random() * (min - max)) + max;
    return randomNumber;
  }
  if (min = max) {
    const randomNumber = min;
    return randomNumber;
  }
}

sayHi(getRandomNumber(16, 12));


// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getGeoCoordinates = (min, max, amount) => {
  if (min >= 0 & max > min) {
    const geoNumber = Math.random() * (max - min) + min;
    geoNumber_result = geoNumber.toFixed(amount);
    return geoNumber_result;
  }
  if (max < min) {
    const geoNumber = Math.round(Math.random() * (min - max)) + max;
    geoNumber_result = geoNumber.toFixed(amount);
    return geoNumber_result;
  }
  if (min = max) {
    const geoNumber = min;
    geoNumber_result = geoNumber.toFixed(amount);
    return geoNumber_result;
  }
}

sayHi(getGeoCoordinates(1.2, 1.8, 5));
