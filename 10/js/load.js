const createErrorMessage = document.querySelector('#error').content.querySelector('.error');
const showError = () => {
  const newError = createErrorMessage.cloneNode(true);
  document.body.appendChild(newError);
  const tryErrorButton = newError.querySelector('.error__button');
  tryErrorButton.addEventListener('click', ()=>{
    newError.remove();
  });
};


export const getPosts = () => fetch('https://28.javascript.htmlacademy.pro/kekstagram/data') //TODO: вынести переменную
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .catch(() => showError());


