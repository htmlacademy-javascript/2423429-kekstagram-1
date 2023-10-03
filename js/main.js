const MIN_LIKES = 15;
const MAX_LIKES = 200;
const CANVAS_SIZE = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const RANDOM_NAMES = [
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

const makeIdGenerator = () =>{
  let countId = 0;

  return () => {
    countId += 1;
    return countId;
  };
};
const generateId = makeIdGenerator();

const generatePost = () => {
  const id = generateId();

  return {
    id,
    avatar: `photos/${id}.jpg`,
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(RANDOM_NAMES)
  };
};

const similarPost = Array.from({length: CANVAS_SIZE}, generatePost);
console.log(similarPost);
