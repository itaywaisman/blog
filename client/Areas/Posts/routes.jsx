import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import PostPage from './pages/PostPage';
import PostsListPage from './pages/PostsListPage';

export default (
  <Route name="posts_root" path="/" component={Layout}>
    <IndexRoute component={PostsListPage} />
    <Route name="post_page" path="/:slug-:cuid" component={PostPage} />
  </Route>
);
