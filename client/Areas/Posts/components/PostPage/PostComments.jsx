import React, { Component, PropTypes } from 'react';
import ReactDisqusThread from 'react-disqus-thread';


export default class PostComments extends Component {

  static propTypes = {
    post: PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      renderDisqus: false,
    };
  }

  componentDidMount() {
    this.setState({
      renderDisqus: true,
    });
  }

  render() {
    return (
      <section className="z-depth-1 blue-grey lighten-5" style={{ padding: '1em' }}>
        {this.state.renderDisqus ?
          <ReactDisqusThread
            shortname="itay-waisman-blog"
            identifier={this.props.post.cuid}
            title={this.props.post.title}
            url={location.href}
          /> : 'null'}
      </section>
    );
  }
}
