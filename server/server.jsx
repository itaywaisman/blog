import bodyParser from 'body-parser';
import compression from 'compression';
import config from 'config';
import cors from 'cors';
import Express from 'express';
import path from 'path';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Import configurations
import webpackConfig from '../webpack.dev.config.js';

// Import database setup
import initDatabaseConnection from './database.js';

// React and redux setup
import configureStore from '../client/store';
import routes from '../client/routes';
import { renderFullPage, renderError } from './render';
import { fetchInitialState } from './utils/fetchInitialState';

// Import routes
import postRoutes from './routes/postsRoutes';

// Initialize the express app
const app = new Express();

// Run webpack dev server in development mode with hot-reload
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

initDatabaseConnection();

// Apply cors, bodyparser and compression. also serve public assets
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, './dist')));

// Apply routes
app.use('/api/posts', postRoutes);

// Server side rendering logic
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      next();
    }

    const store = configureStore();

    return fetchInitialState(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const finalState = store.getState();

        res.set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

const serverPort = config.get('port');
app.listen(serverPort, (error) => {
  if (!error) {
    console.log(`Application is running on port ${serverPort}.`);
  }
});

export default app;
