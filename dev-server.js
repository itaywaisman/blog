if (process.env.NODE_ENV !== 'development') {
  throw new Error('This application is meant to run using Firebase in production.');
}

import config from './webpack.dev.config.js';
import cors from 'cors';
import Express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = new Express();

// Initialize webpack middleware with hot-reload
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(cors());

// Initialize public assets folder and server compiled index.html
app.use(Express.static(path.resolve(__dirname, './dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});


app.listen(8000, (error) => {
  if (!error) {
    console.log('Application is running on port 8000.');
  }
});

export default app;
