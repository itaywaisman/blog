import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPost } from '../reducer';

import * as postActions from '../actions';

import PostComments from '../components/PostPage/PostComments';
import PostContent from '../components/PostPage/PostContent';
import PostHeader from '../components/PostPage/PostHeader';

@connect((state, props) => {
  return {
    post: getPost(state, props.params.id),
  };
})
export default class PostPage extends Component {

  static propTypes = {
    params: PropTypes.shape({
      cuid: PropTypes.string.isRequired,
    }).isRequired,
    post: PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
    }).isRequired,
  }

  static initialStateActions = [params => { return postActions.fetchPost(params.cuid); }];

  render() {
    return (
      <div>
        <div className="z-depth-1 white" style={{ marginBottom: '1em' }}>
          <PostHeader post={this.props.post} />
          <PostContent post={this.props.post} />
        </div>

        <PostComments post={this.props.post} />
      </div>
    );
  }
}
