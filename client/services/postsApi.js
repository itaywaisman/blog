import axios from 'axios';

const apiInstance = axios.create({
  baseURL: '/api/posts/',
});

export function getPosts() {
  return apiInstance.get('/');
}

export function getPost(cuid) {
  return apiInstance.get(`/${cuid}`);
}

export function createPost(post) {
  return apiInstance.post('/', post);
}

export function updatePost(post) {
  return apiInstance.put(`/${post.cuid}`, post);
}

export function deletePost(cuid) {
  return apiInstance.delete(`/${cuid}`);
}
