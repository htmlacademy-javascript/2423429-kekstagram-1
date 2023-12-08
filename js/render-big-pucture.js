const commentTemplate = document.querySelector('#comment').content.cloneNode(true);

export function renderBigPicture(pictureElem, Post) {
  const bigPicrute = document.querySelector('.big-picture');
  const listComment = bigPicrute.querySelector('.social__comments');
  const showBigPicture = () => {
    bigPicrute.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicrute.querySelector('.big-picture__img img').src = Post.avatar;
    bigPicrute.querySelector('.likes-count').textContent = Post.likes;
    //TODO: заменить Post.message на Post.comments
    bigPicrute.querySelector('.social__caption').textContent = Post.description;
    //bigPicrute.querySelector('.social__comment-count').classList.add('hidden');
    //bigPicrute.querySelector('.social__comments-loader').classList.add('hidden');
    //отобразил
    // const buttonAddComment = bigPicrute.querySelector('.social__comments-loader');
    // buttonAddComment.addEventListener('click', () =>{
    // const hiddenComments = listComment.querySelectorAll('.social__comment.hidden');
    // });
    //кнопка добавить еще, нужно доработать
    for(let i = 0; i < Post.comments.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = Post.comments[i].avatar;
      thisComment.querySelector('.social__picture').alt = Post.comments[i].name;
      thisComment.querySelector('.social__text').textContent = Post.comments[i].message;
      listComment.appendChild(thisComment);
    }
    const commentsArray = listComment.querySelectorAll('.social__comment');
    bigPicrute.querySelector('.comments-count').textContent = commentsArray.length;
    commentsArray.forEach((comment,i) => {
      if(i <= 4){
        comment.classList.add('hidden');
      }
    });
  };
  const bigPicruteClose = () => {
    bigPicrute.classList.add('hidden');
    document.body.classList.remove('.modal-open');
    listComment.innerHTML = '';
  };
  pictureElem.addEventListener('click', showBigPicture);
  const bigPicruteCancel = bigPicrute.querySelector('.big-picture__cancel');
  bigPicruteCancel.addEventListener('click', bigPicruteClose);
  document.addEventListener('keydown', (evt)=>{
    if(evt.key === 'Escape') {
      bigPicruteClose();
    }
  });

}

