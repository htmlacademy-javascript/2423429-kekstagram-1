import { renderPicture } from './render-picture.js';
import './work-form.js';
import {resetEffects} from './effects.js';
import { getPosts } from './load.js';
import { initFilters } from './filters.js';
getPosts().then((posts)=>{
  renderPicture(posts);
  initFilters(posts);
});
resetEffects();
