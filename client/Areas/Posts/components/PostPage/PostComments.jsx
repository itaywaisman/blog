import React, { Component, PropTypes } from 'react';
import ReactDisqusThread from 'react-disqus-thread';


export default class PostComments extends Component {

  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  }


  render() {
    return (
      <section className="z-depth-1 blue-grey lighten-5" style={{padding: '1em'}}>
        <ReactDisqusThread
          shortname="itay-waisman-blog"
          identifier={this.props.post.cuid}
          title={this.props.post.title}
          url={location.href}
          />
      </section>
    )
  }
}
