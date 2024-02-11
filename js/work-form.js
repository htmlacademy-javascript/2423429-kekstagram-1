
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
  const hashtagString = value;
  const hashtagArray = hashtagString.split(' ');
  const testHashtag = function () {

    function hasDuplicates() {
      const valuesSoFar = Object.create(null);
      console.log(valuesSoFar,'сейчас в объекте');
      for (let i = 0; i < hashtagArray.length; i++) {
        const thisHashtag = hashtagArray[i];
        if (thisHashtag in valuesSoFar) {
          return console.log(false, 'повторяется');
        }
        valuesSoFar[thisHashtag] = true;
      }
      return console.log(true, 'не повторяется');
    }
    hasDuplicates(hashtagArray);
    console.log('количество хэштегов' , hashtagArray.length);
  };
  testHashtag(hashtagArray);

  if (hashtagArray.length > 7){
    return console.log(false, 'больше 7 элементов');
  }

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

