
const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

const orderForm = document.querySelector('.img-upload__form');


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
  console.log(HASHTAG_VALID_REGEX.test(value));
  // if (value === hashtag){
  //   return true;
  // }
  // return false;
  if (value.length && value[0] === value[0].toUpperCase()){
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
