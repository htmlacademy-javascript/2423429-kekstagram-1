const commentTemplate = document.querySelector('.social__comment').cloneNode(true);

export function renderBigPicture(pictureElem, Post) {
  const bigPicrute = document.querySelector('.big-picture');
  const listComment = bigPicrute.querySelector('.social__comments');
  const onClick = () => {
    bigPicrute.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicrute.querySelector('.big-picture__img img').src = Post.avatar;
    bigPicrute.querySelector('.likes-count').textContent = Post.likes;
    bigPicrute.querySelector('.comments-count').textContent = Post.message.length;
    bigPicrute.querySelector('.social__caption').textContent = Post.description;
    //bigPicrute.querySelector('.social__comment-count').classList.add('hidden');
    //bigPicrute.querySelector('.social__comments-loader').classList.add('hidden');
    //отобразил

    for(let i = 0; i < Post.message.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = Post.message[i].avatar;
      thisComment.querySelector('.social__picture').alt = Post.message[i].name;
      thisComment.querySelector('.social__text').textContent = Post.message[i].message;
      listComment.appendChild(thisComment);
    }
  };
  const bigPicruteCloseClick = () => {
    //if(){}
    bigPicrute.classList.add('hidden');
    document.body.classList.remove('.modal-open');
    listComment.innerHTML = '';
  };
  pictureElem.addEventListener('click', onClick);
  const bigPicruteClose = bigPicrute.querySelector('.big-picture__cancel');
  bigPicruteClose.addEventListener('click', bigPicruteCloseClick);
  document.addEventListener('keydown', bigPicruteCloseClick);

}

