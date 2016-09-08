import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/posts',
});

export function getPosts() {
  return instance.get('/').then(response => response.data.posts);
}

export function getPost(cuid) {
  return instance.get(`/${cuid}`).then(response => response.data.post);
}

export function createPost(post) {
  return instance.post('/', post);
}

export function updatePost(post) {
  return instance.put(`/${post.cuid}`, post);
}

export function deletePost(cuid) {
  return instance.delete(`/${cuid}`);
}
