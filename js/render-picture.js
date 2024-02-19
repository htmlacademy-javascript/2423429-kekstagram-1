import { renderBigPicture } from './render-big-pucture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

export function renderPicture(Posts) {
  const similarPostFragment = document.createDocumentFragment();
  for(let i = 0; i < Posts.length; i++) {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.querySelector('.picture__img').src = Posts[i].url;
    pictureElem.querySelector('.picture__likes').textContent = Posts[i].likes;
    pictureElem.querySelector('.picture__comments').textContent = Posts[i].comments.length;
    similarPostFragment.appendChild(pictureElem);
    renderBigPicture(pictureElem, Posts[i]);
  }
  pictureList.appendChild(similarPostFragment);

}

