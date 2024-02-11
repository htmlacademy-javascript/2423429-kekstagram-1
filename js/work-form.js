const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const orderForm = document.querySelector('.img-upload__overlay');
const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__form',
  errorClass: 'pristin_error',
  successClass: 'pristin_success',
  errorTextParent: 'img-upload__wrapper',
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
