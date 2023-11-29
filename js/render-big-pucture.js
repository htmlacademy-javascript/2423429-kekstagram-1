const commentTemplate = document.querySelector('.social__comment').cloneNode(true);

export function renderBigPicture(pictureElem, similarPost) {
  const bigPicrute = document.querySelector('.big-picture');
  const listComment = bigPicrute.querySelector('.social__comments');
  const onClick = () => {
    bigPicrute.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicrute.querySelector('.big-picture__img img').src = similarPost.avatar;
    bigPicrute.querySelector('.likes-count').textContent = similarPost.likes;
    bigPicrute.querySelector('.comments-count').textContent = similarPost.message.length;
    bigPicrute.querySelector('.social__caption').textContent = similarPost.description;
    bigPicrute.querySelector('.social__comment-count').classList.add('hidden');
    bigPicrute.querySelector('.social__comments-loader').classList.add('hidden');
    console.log(similarPost);
    for(let i = 0; i < similarPost.message.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = similarPost.message[i].avatar;
      thisComment.querySelector('.social__picture').alt = similarPost.message[i].name;
      thisComment.querySelector('.social__text').textContent = similarPost.message[i].message;
      listComment.appendChild(thisComment);
    }
  };
  const bigPicruteCloseClick = () => {
    bigPicrute.classList.add('hidden');
    document.body.classList.remove('.modal-open');
    listComment.innerHTML = '';
  };
  pictureElem.addEventListener('click', onClick);
  const bigPicruteClose = bigPicrute.querySelector('.big-picture__cancel');
  bigPicruteClose.addEventListener('click', bigPicruteCloseClick);
  document.addEventListener('keydown', bigPicruteCloseClick);
}

