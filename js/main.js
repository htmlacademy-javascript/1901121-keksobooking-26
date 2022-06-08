// Результат: целое число из диапазона "от...до"

const sayHi = (message) => {
  console.log(`Результат: ${message}`);
}

const getRandomNumber = (min, max) => {
  if (min >= 0 & max > min) {
    let randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  if (max <= min) {
    return 'Неверный диапазон';
  }
}

sayHi(getRandomNumber(12, 18));


// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getGeoCoordinates = (min, max, amount) => {
  if (min >= 0 & max > min) {
    let geoNumber = Math.random() * (max - min) + min;
    geoNumber_result = geoNumber.toFixed(amount);
    return geoNumber_result;
  }
  if (max <= min) {
    return 'Неверный диапазон';
  }
}

sayHi(getGeoCoordinates(1.2, 1.8, 6));
