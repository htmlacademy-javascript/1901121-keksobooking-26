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

const offerData = {
  AMOUNT: 5,
  TITLE: 'Название предложения',
  PriceRange: {
    MIN: 1,
    MAX: 99999
  },
  TYPES: [
    'palace',
    'flat',
    'house',
    'boungalow',
    'hotel',
  ],
  RoomsRange: {
    MIN: 1,
    MAX: 99999
  },
  GuestsRange: {
    MIN: 1,
    MAX: 99999
  },
  CHECKINS: [
    '12:00',
    '13:00',
    '14:00',
  ],
  CHECKOUTS: [
    '12:00',
    '13:00',
    '14:00',
  ],
  FEATURES: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  DESCRIPTION: 'Описание помещения, номер:',
  PHOTOS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  LatRange: {
    MIN: 35.65,
    MAX: 35.7
  },
  LngRange: {
    MIN: 139.7,
    MAX: 139.8
  },
};

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];
const getRandomPart = (items) => {
  const lastIndex = items.length - 1;
  const valueA = getRandomNumber(0, lastIndex);
  const valueB = getRandomNumber(0, lastIndex);
  return items.slice(Math.min(valueA, valueB), Math.max(valueA, valueB));
};


const getRandomOffers = (length) => {
  const randomOffers = [];
  for (let i = 0; i < length; i++) {
    const index = i + 1;
    const location = {
      lat: getGeoCoordinates(offerData.LatRange.MIN, offerData.LatRange.MAX, offerData.AMOUNT),
      lng: getGeoCoordinates(offerData.LngRange.MIN, offerData.LngRange.MAX, offerData.AMOUNT)
    };
    randomOffers.push({
      author: {
        avatar: `img/avatars/user${index < 10 ? '0' : ''}${index}.png`
      },
      offer: {
        title: `${offerData.TITLE} ${index}`,
        address: `${location.lat}, ${location.lng}`,
        price: getRandomNumber(offerData.PriceRange.MIN, offerData.PriceRange.MAX),
        type: getRandomElement(offerData.TYPES),
        rooms: getRandomNumber(offerData.RoomsRange.MIN, offerData.RoomsRange.MAX),
        guests: getRandomNumber(offerData.GuestsRange.MIN, offerData.GuestsRange.MAX),
        checkin: getRandomElement(offerData.CHECKINS),
        checkout: getRandomElement(offerData.CHECKOUTS),
        features: getRandomPart(offerData.FEATURES),
        description: `${offerData.DESCRIPTION} ${index}`,
        photos: getRandomPart(offerData.PHOTOS)
      },
      location
    });
  }

  return randomOffers;
};

getRandomOffers(10);
