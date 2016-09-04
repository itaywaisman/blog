import { Router } from 'express';
import * as PostController from '../controllers/postsController';

const router = new Router();

router.route('/')
  .get(PostController.getPosts)
  .post(PostController.addPost);

router.route('/:cuid')
  .get(PostController.getPost)
  .put(PostController.updatePost)
  .delete(PostController.deletePost);

export default router;
