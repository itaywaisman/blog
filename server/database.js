import config from 'config';
import mongoose from 'mongoose';

import Post from './models/Post';
import dummyData from './dummyData.js';

export default function initDatabaseConnection() {
  mongoose.Promise = global.Promise;

  const dbConfig = config.get('dbConfig');
  const mongoUrl = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

  mongoose.connect(mongoUrl, (error) => {
    if (error) {
      console.error('Please make sure mongodb is installed and running.');
      throw error;
    }

    if (process.env.NODE_ENV === 'development') {
      dummyData();
    }
  });
}
