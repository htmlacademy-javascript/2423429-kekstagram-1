
//импортирую постоянные переменные из data.js
import {MIN_LIKES, MAX_LIKES,CANVAS_SIZE, COMMENTS, RANDOM_NAMES} from './data.js';
// Файл для генератора ленты

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

export {similarPost};
