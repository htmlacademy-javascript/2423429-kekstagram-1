import { SERVER_ADDRESS } from './const.js';

const createErrorMessage = document.querySelector('#error').content.querySelector('.error');
const createSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const submitFormData = document.querySelector('.img-upload__submit');


// const showError = () => {
//   const newError = createErrorMessage.cloneNode(true);
//   document.body.appendChild(newError);
//   const tryErrorButton = newError.querySelector('.error__button');
//   tryErrorButton.addEventListener('click', ()=>{
//     newError.remove();
//   });
// };

// const showSuccess = () => {
//   const newSuccess = createSuccessMessage.cloneNode(true);
//   document.body.appendChild(newSuccess);
//   const trySuccessButton = newSuccess.querySelector('.success__button');
//   trySuccessButton.addEventListener('click', ()=>{

//     newSuccess.remove();
//   });
// };

const showStatus = (isPositive) => {
  if (isPositive) {
    const newMessage = createSuccessMessage.cloneNode(true);
    const MessageButton = newMessage.querySelector('.success__button');
  } else{
    newMessage = createErrorMessage.cloneNode(true);
    MessageButton = newMessage.querySelector('.error__button');
  }
  document.body.appendChild(newMessage);
  MessageButton.addEventListener('click', ()=> {
    newMessage.remove();
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
