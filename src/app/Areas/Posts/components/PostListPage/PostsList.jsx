import React, { Component, PropTypes } from 'react';

import PostItem from './PostItem';

export default class PostsList extends Component {

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishDate: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,

  }

  render() {

    console.log(this.props.posts)
    const posts = this.props.posts.map(p => <PostItem key={p.cuid} post={p}></PostItem>)

    for (var i = 1; i < posts.length; i+=2) {
      posts.splice(i,0,<div className="divider"></div>)
    }

    return (
      <div>
        {posts}
      </div>
    )
  }
}
