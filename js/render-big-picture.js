import { COMMENTS_BATCH_LENGTH } from './const.js';

const commentTemplate = document.querySelector('#comment').content.cloneNode(true);

function makeCounter (comments) {

  let counter = 0;
  return function () {

    comments.forEach((comment)=> {
      if(!comment.classList.contains('hidden')){
        counter++;

      }
    });
    return counter;
  };
}

export function renderBigPicture(pictureElem, Post) {
  const bigPicture = document.querySelector('.big-picture');
  const listComment = bigPicture.querySelector('.social__comments');
  const buttonAddComment = bigPicture.querySelector('.social__comments-loader');
  const onLoaderCommentClick = () =>{
    const hiddenComments = listComment.querySelectorAll('.social__comment.hidden');
    hiddenComments.forEach((comment, i) =>{
      if(i < COMMENTS_BATCH_LENGTH){
        comment.classList.remove('hidden');
      }
    });

    const comments = bigPicture.querySelectorAll('.social__comment');
    const commentsCounter = makeCounter(comments)();

    if (commentsCounter === Array.from(comments).length){
      bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    }
    bigPicture.querySelector('.comments-count-visible').textContent = commentsCounter;

  };
  const showBigPicture = () => {
    bigPicture.querySelector('.social__comments-loader').classList.remove('hidden');
    bigPicture.classList.remove('hidden');
    document.body.classList.add('.modal-open');
    bigPicture.querySelector('.big-picture__img img').src = Post.url;
    bigPicture.querySelector('.likes-count').textContent = Post.likes;
    bigPicture.querySelector('.social__caption').textContent = Post.description;
    bigPicture.querySelector('.comments-count').textContent = Post.comments.length;

    buttonAddComment.addEventListener('click', onLoaderCommentClick);

    for(let i = 0; i < Post.comments.length; i++){
      const thisComment = commentTemplate.cloneNode(true);
      thisComment.querySelector('.social__picture').src = Post.comments[i].avatar;
      thisComment.querySelector('.social__picture').alt = Post.comments[i].name;
      thisComment.querySelector('.social__text').textContent = Post.comments[i].message;
      if(i >= COMMENTS_BATCH_LENGTH){
        thisComment.querySelector('.social__comment').classList.add('hidden');
      }
      listComment.appendChild(thisComment);

    }
    const secondListComments = bigPicture.querySelectorAll('.social__comment');
    const secondCounter = makeCounter(secondListComments)();

    bigPicture.querySelector('.comments-count-visible').textContent = secondCounter;
    if (secondCounter < COMMENTS_BATCH_LENGTH){
      bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    }
  };
  const bigPictureClose = () => {
    buttonAddComment.removeEventListener('click', onLoaderCommentClick);
    bigPicture.classList.add('hidden');
    document.body.classList.remove('.modal-open');
    listComment.innerHTML = '';
  };
  pictureElem.addEventListener('click', showBigPicture);
  const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
  bigPictureCancel.addEventListener('click', bigPictureClose);
  document.addEventListener('keydown', (evt)=>{
    if(evt.key === 'Escape') {
      bigPictureClose();
    }
  });
}
