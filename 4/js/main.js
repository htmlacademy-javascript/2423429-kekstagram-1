import {CANVAS_SIZE} from './util.js';
import { generatePost } from './generate-post.js';

const similarPost = Array.from({length: CANVAS_SIZE}, generatePost);
console.log(similarPost);
