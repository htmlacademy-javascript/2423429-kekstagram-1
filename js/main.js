

//import { similarPost } from './util.js';
import { renderPicture } from './render-picture.js';
//renderPicture(similarPost);
import './work-form.js';

import {resetEffects} from './effects.js';
import { getPosts } from './load.js';
getPosts().then((posts)=>(renderPicture(posts)));
resetEffects();

