import { SERVER_ADDRESS } from './const.js';

const createErrorMessage = document.querySelector('#error').content.querySelector('.error');
const createSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const submitFormData = document.querySelector('.img-upload__submit');

const showStatus = (isPositive, Message, MessageButton) => {
  if (isPositive) {
    Message = createSuccessMessage.cloneNode(true);
    MessageButton = Message.querySelector('.success__button');
  } else{
    Message = createErrorMessage.cloneNode(true);
    MessageButton = Message.querySelector('.error__button');
  }
  document.body.appendChild(Message);
  MessageButton.addEventListener('click', ()=> {
    Message.remove();
  });
};

export const getPosts = () => fetch(`${SERVER_ADDRESS}/data`)
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .catch(() => showStatus(false));

export const outPost = (formData) => {
  submitFormData.disabled = true;
  return fetch(
    SERVER_ADDRESS,
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        showStatus(true);
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .catch(() => showStatus(false))
    .finally(()=>{
      submitFormData.disabled = false;
    });
};
