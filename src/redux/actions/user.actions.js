import axios from 'axios';
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';

// user login action
// @params credentials/history
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/signin', userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(fetchUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/')
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// user signup action
// @params credentials/history
export const signupUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/signup', userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(fetchUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/')
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// add user details action
// @params credentials/history
export const updateUserDetails = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/user', userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(fetchUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/')
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// user logout action
// @params null
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('TokenFB');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
}

// user details action
// @params null
export const fetchUserData = () => (dispatch) => {
  axios.get('/user')
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.error(err.data)
    })
}

// set authorization headers from axios
// @params token
export const setAuthorizationHeader = (token) => {
  const TokenId = `Bearer ${token}`;
  localStorage.setItem('TokenFB', TokenId);
  axios.defaults.headers.common['Authorization'] = TokenId;
}