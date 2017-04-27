import {mapKeys} from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data ? mapKeys(action.payload.data, 'id') : state;
    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
};

export default postsReducer;
