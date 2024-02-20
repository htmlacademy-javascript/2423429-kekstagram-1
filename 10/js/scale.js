import {STEP, MIN_SCALE, MAX_SCALE, SCALE_DEVIDER} from './const.js';
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
let thisScale = parseInt(scaleControl.value, 10);

const makeScaleClickHandler = (isNegative, scaleThreshold) => function () {
  buttonScaleBigger.disabled = false;
  if (isNegative) {
    thisScale -= STEP;
  } else {
    thisScale += STEP;
  }
  scaleControl.value = thisScale;
  scaleControl.value = `${thisScale}%`;
  if(thisScale === scaleThreshold){
    this.disabled = true;
  } else {
    this.disabled = false;
  }
  imgUploadPreview.style.transform = `scale(${thisScale / SCALE_DEVIDER})`;
};

export function scalePicture () {
  buttonScaleSmaller.addEventListener('click', makeScaleClickHandler(true, MIN_SCALE));
  buttonScaleBigger.addEventListener('click', makeScaleClickHandler(false, MAX_SCALE));
}

export const resetScale = () => {
  buttonScaleBigger.disabled = true;
  buttonScaleSmaller.disabled = false;
  scaleControl.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';

};
