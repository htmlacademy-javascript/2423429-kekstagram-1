
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const orderForm = document.querySelector('.img-upload__overlay');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__form',
  errorClass: 'error',
  successClass: 'success',
  errorTextParent: 'img-upload__wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(orderForm.querySelector('.text__hashtags'), (value) =>{

  //TODO: должен быть код, который проверяет валидацию хештега

  if (hashtag.test(value)){
    return true;
  }
  return false;
}, 'unValid');
//TODO: 140 символов для коментария лимит, или через html атрибуты или через валидатор по аналогии выше

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const editPhoto = document.querySelector('.img-upload__overlay');
const changePhoto = document.querySelector('.img-upload__input');

changePhoto.addEventListener('change', () =>{
  editPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');

});

const closeUploadButton = editPhoto.querySelector('.img-upload__cancel');

closeUploadButton.addEventListener('click', ()=>{
  editPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const uploadPicture = document.querySelector('.img-upload__preview img');
const Inputt = document.querySelector('.img-upload__start');
const setPicture = Inputt.querySelector('.img-upload__input').textContent;

