import React from 'react';
import { Router, hashHistory } from 'react-router';

import adminRoutes from './Areas/Admin/routes';
import postsRoutes from './Areas/Posts/routes';

export default function App(props) {
  return (
    <Router history={hashHistory}>
      {adminRoutes}
      {postsRoutes}
    </Router>
  )
}
