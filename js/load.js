export const getPosts = () => {
  fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));
};
