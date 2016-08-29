import cuid from 'cuid';
import React, { Component, PropTypes } from 'react';

import PostComments from '../components/PostPage/PostComments';
import PostContent from '../components/PostPage/PostContent';
import PostHeader from '../components/PostPage/PostHeader';

export default class PostPage extends Component {
  static propTypes = {

  }

  render() {

    const post = {
      cuid: cuid(),
      title: 'Random post title',
      slug: 'Some-post-slug',
      content: '**header** \n ```js\n console.log("hello"); \n```',
      publishDate: new Date(),
    }

    return (
      <div>
        <div className="z-depth-1 white" style={{marginBottom: '1em'}}>
          <PostHeader post={post}></PostHeader>
          <PostContent post={post}></PostContent>
        </div>

          <PostComments post={post}></PostComments>
      </div>
    );
  }
}
