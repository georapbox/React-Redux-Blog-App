import {mapKeys} from 'lodash';
import {FETCH_POSTS} from '../actions';

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data ? mapKeys(action.payload.data, 'id') : state;
    default:
      return state;
  }
};

export default PostsReducer;
