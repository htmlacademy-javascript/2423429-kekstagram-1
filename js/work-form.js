import { scalePicture, resetScale, } from './scale.js';
import { setDefaultEffect } from './effects.js';
import { getIsStatusVisible, outPost } from './load.js';
const imgUpload = document.querySelector('.img-upload');
const editPhoto = imgUpload.querySelector('.img-upload__overlay');
const closeUploadButton = editPhoto.querySelector('.img-upload__cancel');
const changePhoto = imgUpload.querySelector('.img-upload__input');
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const orderForm = imgUpload.querySelector('.img-upload__overlay');
const valueHashTag = orderForm.querySelector('.text__hashtags');
const imageUploadForm = imgUpload.querySelector('.img-upload__form');
const fileChooser = imgUpload.querySelector('.img-upload__input');
const preview = imgUpload.querySelector('.img-upload__preview img');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'pristin_error',
  successClass: 'pristin_success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(orderForm.querySelector('.text__hashtags'), (value) =>{
  const hashtagString = value;
  const hashtagArray = hashtagString.split(' ').map((thisHashtag) => thisHashtag.toLowerCase());
  if (hashtagArray.length > 5){
    return false;
  }
  return true;
}, 'не больше 5 хэштегов');

pristine.addValidator(orderForm.querySelector('.text__hashtags'), (value) =>{
  const hashtagString = value;
  const hashtagArray = hashtagString.split(' ').map((thisHashtag) => thisHashtag.toLowerCase());
  const values = {};
  for (let i = 0; i < hashtagArray.length; i++) {
    const thisHashtag = hashtagArray[i];
    if (thisHashtag in values) {
      return false;
    }
    if(!hashtag.test(thisHashtag)){
      return false;
    }
    values[thisHashtag] = true;
  }
  return true;
}, 'хэштеги должны быть уникальными, начинаться с #, длинна не больше 20 символов');

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid || valueHashTag.value === '') {
    const formData = new FormData(evt.target);
    outPost(formData);
  }
};

changePhoto.addEventListener('change', () =>{
  editPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imageUploadForm.addEventListener('submit', handleFormSubmit);
});
const closeForm = ()=>{
  editPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadForm.removeEventListener('submit', handleFormSubmit);
  resetScale();
  setDefaultEffect();
};
closeUploadButton.addEventListener('click', closeForm);
document.addEventListener('keydown', (evt)=>{
  if(evt.key === 'Escape' && !getIsStatusVisible()) {
    closeForm();
  }
});
const setComment = document.querySelector('.text__description');

setComment.addEventListener('keydown', (evt)=>{
  if(evt.key === 'Escape') {
    setComment.blur();
    evt.stopPropagation();
  }
});
scalePicture();

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  preview.src = URL.createObjectURL(file);
});

