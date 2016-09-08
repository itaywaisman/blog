import React, { PropTypes } from 'react';

import PostItem from './PostItem';

export default function PostsList(props) {
  const posts = props.posts.map(p => <PostItem key={p.cuid} post={p} />);

  return (
    <div>
      {posts}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
  })).isRequired,
};
