import { SERVER_ADDRESS } from './const.js';
const createErrorMessage = document.querySelector('#error').content.querySelector('.error');
const submitFormData = document.querySelector('.img-upload__submit');
const showError = () => {
  const newError = createErrorMessage.cloneNode(true);
  document.body.appendChild(newError);
  const tryErrorButton = newError.querySelector('.error__button');
  tryErrorButton.addEventListener('click', ()=>{
    newError.remove();
  });
};

export const getPosts = () => fetch(SERVER_ADDRESS)
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .catch(() => showError());


const createSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const showSuccess = () => {
  const newSuccess = createSuccessMessage.cloneNode(true);
  document.body.appendChild(newSuccess);
  const trySuccessButton = newSuccess.querySelector('.success__button');
  trySuccessButton.addEventListener('click', ()=>{

    newSuccess.remove();
  });
};

export const outPost = (formData) => {
  submitFormData.disabled = true;
  return fetch(
    'https://28.javascript.htmlacademy.pro/kekstagram/',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        showSuccess();
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .catch(() => showError())
    .finally(()=>{
      submitFormData.disabled = false;
    });
};
