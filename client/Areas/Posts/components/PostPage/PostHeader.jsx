import React, { Component, PropTypes } from 'react';

export default class PostHeader extends Component {

  static propTypes = {
    post: PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  }


  render() {
    return (
      <header style={{ padding: '1em' }}>
        <h5 className="amber-text text-darken-3" style={{ display: 'inline-block' }}>{this.props.post.title}</h5>
        <span className="right teal-text text-lighten-3">{this.props.post.publishDate.toDateString()}</span>
      </header>
    );
  }
}
