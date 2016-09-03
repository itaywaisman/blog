import { createAction } from 'redux-actions';
import { getPosts, getPost } from '../../services/postsApi.js';

export const fetchPosts = createAction('FETCH_POSTS', getPosts);
export const fetchPost = createAction('FETCH_POST', getPost);
