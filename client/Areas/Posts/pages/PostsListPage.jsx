import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getLoading, getPosts } from '../reducer.js';
import * as postActions from '../actions';

import PostsList from '../components/PostListPage/PostsList';

@connect(state => {
  return {
    loading: getLoading(state),
    posts: getPosts(state),
  };
})
export default class PostsListPage extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
      cuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishDate: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(postActions.fetchPosts());
  }

  render() {
    if (this.props.loading) {
      return (<h1>Loading posts...</h1>);
    }
    return (
      <div>
        <div className="z-depth-1 white">
          <PostsList posts={this.props.posts} />
        </div>
        <div>
          <a href="#older" className="waves-effect waves-teal btn-flat">Older</a>
        </div>
      </div>
    );
  }
}
