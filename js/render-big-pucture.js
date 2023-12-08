const commentTemplate = document.querySelector('#comment').content.cloneNode(true);

export function renderBigPicture(pictureElem, Post) {
  const bigPicrute = document.querySelector('.big-picture');
  const listComment = bigPicrute.querySelector('.social__comments');
  const showBigPicture = () => {
    bigPicrute.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicrute.querySelector('.big-picture__img img').src = Post.avatar;
    bigPicrute.querySelector('.likes-count').textContent = Post.likes;
    bigPicrute.querySelector('.social__caption').textContent = Post.description;
    bigPicrute.querySelector('.comments-count').textContent = Post.comments.length;
    //bigPicrute.querySelector('.social__comment-count').classList.add('hidden');
    //bigPicrute.querySelector('.social__comments-loader').classList.add('hidden');
    //отобразил
    const buttonAddComment = bigPicrute.querySelector('.social__comments-loader');
    buttonAddComment.addEventListener('click', () =>{
      const hiddenComments = listComment.querySelectorAll('.social__comment.hidden');
      hiddenComments.forEach((comment, i) =>{
        if(i < 5){
          comment.classList.remove('hidden');
        }
      });
      const comments = bigPicrute.querySelectorAll('.social__comment');
      let counter = 0;
      comments.forEach((comment)=> {
        if(!comment.classList.contains('.hidden')){
          counter++;
        }
      });
      // let comments = visibleComments.filter((comment) => !comment.classList.contains('hidden')).length;
      bigPicrute.querySelector('.comments-count-visible').textContent = counter;
    });
    //кнопка добавить еще, нужно доработать
    for(let i = 0; i < Post.comments.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = Post.comments[i].avatar;
      thisComment.querySelector('.social__picture').alt = Post.comments[i].name;
      thisComment.querySelector('.social__text').textContent = Post.comments[i].message;
      if(i >= 5){
        thisComment.querySelector('.social__comment').classList.add('hidden');
      }
      listComment.appendChild(thisComment);

    }
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

