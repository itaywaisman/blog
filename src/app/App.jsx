import React from 'react';
import { Router, hashHistory } from 'react-router';

import adminRoutes from './Areas/Admin/routes';
import postsRoutes from './Areas/Posts/routes';

import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';



export default function App(props) {
  return (
    <Router history={hashHistory}>
      {adminRoutes}
      {postsRoutes}
    </Router>
  )
}
