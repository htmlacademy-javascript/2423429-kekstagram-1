import {STEP, MIN_SCALE, MAX_SCALE, SCALE_DEVIDER} from './const.js';
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
let thisScale = parseInt(scaleControl.value, 10);
const makeScaleClickHandler = (flag) => function () {
  if (flag) {
    thisScale -= STEP;
  } else {
    thisScale += STEP;
  }
  if (thisScale === MAX_SCALE) {
    buttonScaleBigger.disabled = true;
  } else if(thisScale === MIN_SCALE) {
    buttonScaleSmaller.disabled = true;
  } else {
    buttonScaleSmaller.disabled = false;
    buttonScaleBigger.disabled = false;
  }
  scaleControl.value = `${thisScale}%`;
  imgUploadPreview.style.transform = `scale(${thisScale / SCALE_DEVIDER})`;
};

export function scalePicture () {
  buttonScaleSmaller.addEventListener('click', makeScaleClickHandler(true));
  buttonScaleBigger.addEventListener('click', makeScaleClickHandler(false));
}

export const resetScale = () => {
  thisScale = MAX_SCALE;
  scaleControl.value = '100%';
  buttonScaleBigger.disabled = true;
  buttonScaleSmaller.disabled = false;
  imgUploadPreview.style.transform = 'scale(1)';

};
