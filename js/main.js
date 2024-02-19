import { getPosts } from './load.js';
import { similarPost } from './util.js';
import { renderPicture } from './render-picture.js';
renderPicture(similarPost);
import './work-form.js';
getPosts();
import {resetEffects} from './effects.js';
resetEffects();

