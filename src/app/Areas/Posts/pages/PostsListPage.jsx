import cuid from 'cuid';
import React, { Component, PropTypes } from 'react';

import PostsList from '../components/PostListPage/PostsList';

export default class PostsListPage extends Component {

  render() {
    let posts = [
      {
        cuid: cuid(),
        title: 'Random post title',
        slug: 'Some-post-slug',
        description: 'Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. Way building not get formerly her peculiar. Up uncommonly prosperous sentiments simplicity acceptance to so. Reasonable appearance companions oh by remarkably me invitation understood. Pursuit elderly ask perhaps all. ',
        publishDate: new Date(),
      },
    ]


    return (
      <div>
        <div className="z-depth-1 white">
          <PostsList posts={posts}></PostsList>
        </div>
        <div>
          <a href="#older" className="waves-effect waves-teal btn-flat">Older</a>
        </div>
      </div>
    );
  }
}
