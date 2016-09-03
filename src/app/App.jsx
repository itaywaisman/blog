import React, { PropTypes } from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

import adminRoutes from './Areas/Admin/routes';
import postsRoutes from './Areas/Posts/routes';


export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        {adminRoutes}
        {postsRoutes}
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
