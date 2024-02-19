import { renderPicture } from './render-picture.js';
import './work-form.js';
import {resetEffects} from './effects.js';
import { getPosts } from './load.js';
getPosts().then((posts)=>(renderPicture(posts)));
resetEffects();

