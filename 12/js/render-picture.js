import { renderBigPicture } from './render-big-pucture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

export function renderPicture(posts) {
  const similarPostFragment = document.createDocumentFragment();
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((el) => el.remove());

  for(let i = 0; i < posts.length; i++) {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.querySelector('.picture__img').src = posts[i].url;
    pictureElem.querySelector('.picture__likes').textContent = posts[i].likes;
    pictureElem.querySelector('.picture__comments').textContent = posts[i].comments.length;
    similarPostFragment.appendChild(pictureElem);
    renderBigPicture(pictureElem, posts[i]);
  }
  pictureList.appendChild(similarPostFragment);

}

