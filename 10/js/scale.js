import {STEP, MIN_SCALE, MAX_SCALE, SCALE_DEVIDER} from './const.js';
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
let thisScale = parseInt(scaleControl.value, 10);
buttonScaleBigger.disabled = true;
const makeScaleClickHandler = (isNegative, scaleThreshold) => function () {
  buttonScaleBigger.disabled = false;
  if (isNegative) {
    thisScale -= STEP;
  } else {
    thisScale += STEP;
  }
  scaleControl.value = thisScale;
  scaleControl.value = `${thisScale}%`;
  if(thisScale === scaleThreshold){ //TODO: если отрабатывает полностью, блокирует кнопки, нужно подумать как обработать ситуацию когда покликал до минимума и до максимума
    this.disabled = true;
  } else {
    this.disabled = false;
  }
  if (thisScale === MIN_SCALE) {
    buttonScaleBigger.disabled = false;
  }
  if (thisScale === MAX_SCALE) {
    buttonScaleSmaller.disabled = false;
  }
  imgUploadPreview.style.transform = `scale(${thisScale / SCALE_DEVIDER})`;
};

export function scalePicture () {
  buttonScaleSmaller.addEventListener('click', makeScaleClickHandler(true, MIN_SCALE));
  buttonScaleBigger.addEventListener('click', makeScaleClickHandler(false, MAX_SCALE));
}

export const resetScale = () => {
  thisScale = MAX_SCALE;
  scaleControl.value = '100%';
  buttonScaleBigger.disabled = true;
  buttonScaleSmaller.disabled = false;
  imgUploadPreview.style.transform = 'scale(1)';

};
