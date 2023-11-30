import { renderBigPicture } from './render-big-pucture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

export function renderPicture(similarPost) {
  const similarPostFragment = document.createDocumentFragment();
  for(let i = 0; i < similarPost.length; i++) {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.querySelector('.picture__img').src = similarPost[i].avatar;
    pictureElem.querySelector('.picture__likes').textContent = similarPost[i].likes;
    pictureElem.querySelector('.picture__comments').textContent = similarPost[i].message.length;
    similarPostFragment.appendChild(pictureElem);
    renderBigPicture(pictureElem, similarPost[i]);
  }
  pictureList.appendChild(similarPostFragment);
}
