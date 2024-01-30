
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

 const orderForm = document.querySelector('.form');
console.log(orderForm);

// const pristine = new Pristine(orderForm, {
//   classTo: 'form__item',
//   errorClass: 'form__item--invalid',
//   successClass: 'form__item--valid',
//   errorTextParent: 'form__item',
//   errorTextTag: 'span',
//   errorTextClass: 'form__error'
// });


// pristine.addValidator(orderForm.querySelector('##upload-file'));


// orderForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   pristine.validate();
// });


const editPhoto = document.querySelector('.img-upload__overlay');

editPhoto.classList.remove('hidden');
document.body.classList.add('modal-open');

const closeUploadButton = editPhoto.querySelector('.img-upload__cancel');

closeUploadButton.addEventListener('click', ()=>{
  editPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const uploadPicture = document.querySelector('.img-upload__preview img');
const Inputt = document.querySelector('.img-upload__start');
const setPicture = Inputt.querySelector('.img-upload__input').textContent;

