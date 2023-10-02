//
//
// description, строка — описание фотографии. Описание придумайте самостоятельно.
//
//
//
//
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев
// к каждой фотографии вы определяете на своё усмотрение.Все комментарии генерируются случайным образом. Пример описания объекта
// с комментарием:
// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }


const CANVAS_SIZE = 25;
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// Создал массив сообщений для рандомного вывода
const RANDOM_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const RANDOM_NAME = [
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
let countId = 0;

const generateId = () =>{
  countId = countId + 1;
  return countId;
};

let countImg = 0;
const generateAvatar = () => {
  countImg = countImg + 1;
  return `photos/${ countImg }.jpg` ;
};

const createGallery = () => ({
  id: generateId(),
  avatar: generateAvatar(),
  likes: getRandomInteger(15, 200),
  message: getRandomArrayElement(RANDOM_MESSAGE),
  name: getRandomArrayElement(RANDOM_NAME)
});
const similarGallery = Array.from({length: CANVAS_SIZE}, createGallery);
console.log(similarGallery);
