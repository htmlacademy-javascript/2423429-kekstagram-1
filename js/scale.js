export function scalePicture (){
  const STEP = 25;
  const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
  const buttonScaleBigger = document.querySelector('.scale__control--bigger');
  const scaleControl = document.querySelector('.scale__control--value');
  const imgUploadPreview = document.querySelector('.img-upload__preview img');
  let thisScale = parseInt(scaleControl.value, 10);
  //напишите код который позволит пользователю редактировать масштаб изображения
  const clickSmaller = () => {
    buttonScaleBigger.disabled = false;
    thisScale -= STEP;
    scaleControl.value = thisScale;
    scaleControl.value = `${thisScale}%`;
    if(thisScale === 25){
      buttonScaleSmaller.disabled = true;
    } else {
      buttonScaleSmaller.disabled = false;
    }
    imgUploadPreview.style.transform = `scale(${thisScale / 100})`;
  };
  buttonScaleSmaller.addEventListener('click', clickSmaller);

  const clickBigger = () => {
    buttonScaleSmaller.disabled = false;
    thisScale += STEP;
    scaleControl.value = thisScale;
    scaleControl.value = `${thisScale}%`;
    if (thisScale === 100) {
      buttonScaleBigger.disabled = true;
    } else {
      buttonScaleBigger.disabled = false;
    }
    imgUploadPreview.style.transform = `scale(${thisScale / 100})`;
  };
  buttonScaleBigger.addEventListener('click', clickBigger);
}
