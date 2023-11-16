
// Отобразить фотографии других пользователей.

import { similarPost } from "./util";

  // На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

  const pictureTemplate = document.querySelector('#picture').content;

  const pictureElem = pictureTemplate.cloneNode(true);
  console.log(pictureElem);

  const pictureLikes = document.querySelector('.picture__likes');
  console.log(pictureLikes);
  //pictureLikes.textContent =

  for (let i = similarPost.length; i > 0; i--) {
     similarPost[i].avatar;
  }
  // Количество лайков likes выведите в блок .picture__likes.

  // Адрес изображения url подставьте как атрибут src изображения.

  // Количество комментариев comments выведите в блок .picture__comments.
  // Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

  // Подключите модуль в проект.

// Заведите модуль, который будет отвечать за отрисовку миниатюр.
}
export {renderPicture};
