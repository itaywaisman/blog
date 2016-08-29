import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PostItem extends Component {

  static propTypes = {
    post: PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishDate: PropTypes.instanceOf(Date).isRequired,
    }).isRequired

  }

  render() {
    const postUrl = `/${this.props.post.slug}-${this.props.post.cuid}`;

    return (
      <article style={{padding: '1em'}}>
        <header>
          <Link to={postUrl} className="waves-effect waves-teal">
            <h5 className="amber-text text-darken-3">
              {this.props.post.title}
            </h5>
          </Link>
          <span className="right teal-text text-lighten-3">{this.props.post.publishDate.toDateString()}</span>
        </header>
        <p>{this.props.post.description}</p>
        <Link to={postUrl}><p className="right-align">Read More</p></Link>
      </article>
    );
  }
}
