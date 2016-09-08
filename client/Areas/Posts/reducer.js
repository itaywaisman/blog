import { handleActions } from 'redux-actions';

const reducer = handleActions({
  FETCH_POSTS_REQUESTED: (state, action) => ({
    loading: true,
    data: [],
  }),
  FETCH_POSTS_FULFILLED: (state, action) => ({
    loading: false,
    data: action.payload,
    error: null,
  }),
  FETCH_POSTS_REJECTED: (state, action) => ({
    loading: false,
    data: [],
    error: action.error,
  }),
  FETCH_POST_REQUESTED: (state, action) => ({
    loading: true,
  }),
  FETCH_POST_FULFILLED: (state, action) => ({
    loading: false,
    data: state.data.filter(post => post.cuid !== action.payload.cuid).concat([action.payload]),
    error: null,
  }),
  FETCH_POST_REJECTED: (state, action) => ({
    loading: false,
    error: action.error,
  }),
},
  {
    loading: false,
    data: [],
    error: null,
  });

export default reducer;

export const getLoading = (state) => state.posts.loading;
export const getPosts = (state) => state.posts.data;
export const getPost = (state, id) => state.posts.data.filter(p => p.id === id)[0];
