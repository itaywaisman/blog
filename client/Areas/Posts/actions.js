import { getPosts, getPost } from '../../services/postsApi.js';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: getPosts(),
  };
}

export function fetchPost(cuid) {
  return {
    type: 'FETCH_POST',
    payload: getPost(cuid),
  };
}
