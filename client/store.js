import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

export default function configureStore(initializeState = {}) {
  const enhancers = [
    applyMiddleware(promiseMiddleware),
  ];

  const store = createStore(rootReducer, initializeState, compose(...enhancers));

  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
       // eslint-disable-line newline-after-import
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
