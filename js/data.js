import {getRandomNumber, getGeoCoordinates, getRandomElement, getRandomPart} from './util.js';

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

// getRandomOffers(10);
export {getRandomOffers};
