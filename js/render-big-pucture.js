const commentTemplate = document.querySelector('#comment').content.cloneNode(true);

export function renderBigPicture(pictureElem, Post) {
  const bigPicrute = document.querySelector('.big-picture');
  const listComment = bigPicrute.querySelector('.social__comments');
  const buttonAddComment = bigPicrute.querySelector('.social__comments-loader');
  const onLoaderCommentClick = () =>{
    const hiddenComments = listComment.querySelectorAll('.social__comment.hidden');
    hiddenComments.forEach((comment, i) =>{
      if(i < 5){
        comment.classList.remove('hidden');
      }
    });

    const comments = bigPicrute.querySelectorAll('.social__comment'); //TODO: тоже самое
    let counter = 0;
    comments.forEach((comment)=> {
      if(!comment.classList.contains('hidden')){
        counter++;
      }
    });
    if (counter === Array.from(comments).length){
      bigPicrute.querySelector('.social__comments-loader').classList.add('hidden');
    }
    // let comments = visibleComments.filter((comment) => !comment.classList.contains('hidden')).length;
    bigPicrute.querySelector('.comments-count-visible').textContent = counter;
  };
  const showBigPicture = () => {
    bigPicrute.querySelector('.social__comments-loader').classList.remove('hidden');
    bigPicrute.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicrute.querySelector('.big-picture__img img').src = Post.avatar;
    bigPicrute.querySelector('.likes-count').textContent = Post.likes;
    bigPicrute.querySelector('.social__caption').textContent = Post.description;
    bigPicrute.querySelector('.comments-count').textContent = Post.comments.length;

    buttonAddComment.addEventListener('click', onLoaderCommentClick);

    //кнопка добавить еще, нужно доработать
    for(let i = 0; i < Post.comments.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = Post.comments[i].avatar;
      thisComment.querySelector('.social__picture').alt = Post.comments[i].name;
      thisComment.querySelector('.social__text').textContent = Post.comments[i].message;
      if(i >= 5){ //TODO: вынести в константу COMMENTS_BATCH_LENGTH
        thisComment.querySelector('.social__comment').classList.add('hidden');
      }
      listComment.appendChild(thisComment);

    }
    const secondListComments = bigPicrute.querySelectorAll('.social__comment'); //TODO: тоже самое
    let secondCounter = 0;
    secondListComments.forEach((comment)=> {
      if(!comment.classList.contains('hidden')){
        secondCounter++;
      }
    });
    bigPicrute.querySelector('.comments-count-visible').textContent = secondCounter;

  };
  const bigPicruteClose = () => {
    buttonAddComment.removeEventListener('click', onLoaderCommentClick);
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

