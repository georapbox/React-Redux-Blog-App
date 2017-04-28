import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=georapbox';

export const fetchPosts = () => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then(res => dispatch({type: FETCH_POSTS, payload: res, error: false}))
      .catch(err => dispatch({type: FETCH_POSTS, payload: err, error: true}));
  };
};

export const createPost = values => {
  return dispatch => {
    return axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
      .then(res => dispatch({type: CREATE_POST, payload: res, error: false}))
      .catch(err => dispatch({type: CREATE_POST, payload: err, error: true}));
  };
};

export const fetchPost = id => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(res => dispatch({type: FETCH_POST, payload: res, error: false}))
      .catch(err => dispatch({type: FETCH_POST, payload: err, error: true}));
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(res => dispatch({type: DELETE_POST, payload: res, error: false}))
      .catch(err => dispatch({type: DELETE_POST, payload: err, error: true}));
  };
};
