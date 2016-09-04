import Post from '../models/Post';
import cuid from 'cuid';
import slug from 'limax';

export function getPosts(req, res) {
  Post.find().sort('-publishDate').exec((err, posts) => {
    if (err) res.status(500).send(err);

    res.json({ posts });
  });
}

export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) res.status(500).send(err);

    res.json({ post });
  });
}

export function addPost(req, res) {

}

export function updatePost(req, res) {

}

export function deletePost(req, res) {

}
