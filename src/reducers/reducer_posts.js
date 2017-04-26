import {FETCH_POSTS} from '../actions';

const INITIAL_STATE = {
  all: [],
  post: null
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data
        ? Object.assign({}, state, {all: action.payload.data})
        : state;
    default:
      return state;
  }
};

export default PostsReducer;
