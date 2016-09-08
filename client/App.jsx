import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

import routes from './routes';

export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
