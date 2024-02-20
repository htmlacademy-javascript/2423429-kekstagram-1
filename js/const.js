const COMMENTS_BATCH_LENGTH = 5;

const STEP = 25;// TODO: вынести в CONST.JS
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEVIDER = 100;
const EFFECTS = [ //TODO: вынести в CONST.JS
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },

];

const SERVER_ADDRESS = 'https://28.javascript.htmlacademy.pro/kekstagram/data';


export {COMMENTS_BATCH_LENGTH, EFFECTS, SERVER_ADDRESS, STEP, MIN_SCALE, MAX_SCALE, SCALE_DEVIDER};
