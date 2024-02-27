// Фильтрация изображений
import { renderPicture } from './render-picture.js';

export function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
  // Перед каждым новым вызовом удаляем предыдущий таймаут,
  // чтобы они не накапливались
    clearTimeout(timeoutId);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export const initFilters = (posts) => {

  const defaultFilter = document.querySelector('#filter-default');
  const randorFilter = document.querySelector('#filter-random');
  const filterDiscussed = document.querySelector('#filter-discussed');

  defaultFilter.addEventListener('click' , debounce(() => {
    if (defaultFilter.classList.contains('img-filters__button--active')){
      return;
    }
    renderPicture(posts);
    defaultFilter.classList.add('img-filters__button--active');
    randorFilter.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  }));

  randorFilter.addEventListener('click' , debounce(() => {
    if (randorFilter.classList.contains('img-filters__button--active')){
      return;
    }
    const setPosts = [...posts];
    renderPicture(setPosts.sort(() => .5 - Math.random()));
    randorFilter.classList.add('img-filters__button--active');
    defaultFilter.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');

  }));

  filterDiscussed.addEventListener('click' , debounce(() => {
    if (filterDiscussed.classList.contains('img-filters__button--active')){
      return;
    }
    const setPosts = [...posts];
    renderPicture(setPosts.sort((a, b) => b.comments.length - a.comments.length));

    defaultFilter.classList.remove('img-filters__button--active');
    randorFilter.classList.remove('img-filters__button--active');
    filterDiscussed.classList.add('img-filters__button--active');
  }));

};


