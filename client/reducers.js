import { combineReducers } from 'redux';

import adminReducer from './Areas/Admin/reducer.js';
import postReducer from './Areas/Posts/reducer.js';

export default combineReducers({
  admin: adminReducer,
  posts: postReducer,
});
