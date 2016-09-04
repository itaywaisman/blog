import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function PostItem(props) {
  const postUrl = `/${props.post.id}`;

  return (
    <article style={{ padding: '1em' }}>
      <header>
        <Link to={postUrl} className="waves-effect waves-teal">
          <h5 className="amber-text text-darken-3">
            {props.post.title}
          </h5>
        </Link>
        <span className="right teal-text text-lighten-3">{props.post.publishDate.toDateString()}</span>
      </header>
      <p>{props.post.description}</p>
      <Link to={postUrl}><p className="right-align">Read More</p></Link>
    </article>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
