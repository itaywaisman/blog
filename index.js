/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'development') {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.babel.config.js",
          "verbose": false
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./dev-server');
}
