import React, { PropTypes } from 'react';

import PostItem from './PostItem';

export default function PostsList(props) {
  const posts = props.posts.map(p => <PostItem key={p.id} post={p} />);

  for (let i = 1; i < posts.length; i += 2) {
    posts.splice(i, 0, <div className="divider" />);
  }

  return (
    <div>
      {posts}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};
