import { SERVER_ADDRESS } from './const.js';

const createErrorMessage = document.querySelector('#error').content.querySelector('.error');
const createSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const submitFormData = document.querySelector('.img-upload__submit');

let isStatusVisible = false;

export const showStatus = (status, templateMessage) => {

  const notification = templateMessage.cloneNode(true);
  isStatusVisible = true;
  const message = notification.querySelector(`.${status}__button`);
  document.body.appendChild(notification);
  message.addEventListener('click', ()=> {
    notification.remove();
    isStatusVisible = false;
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      notification.remove();
      isStatusVisible = false;
    }
  });
};

export const getIsStatusVisible = () => isStatusVisible;

export const getPosts = () => fetch(`${SERVER_ADDRESS}/data`)
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .catch(() => showStatus('error', createErrorMessage));

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
        showStatus('success', createSuccessMessage);
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .catch(() => showStatus('error', createErrorMessage))
    .finally(()=>{
      submitFormData.disabled = false;
    });
};
