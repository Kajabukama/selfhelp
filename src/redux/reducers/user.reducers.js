import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const initalState = {
  authenticated: false,
  credentials: {},
  likes: [],
  comments: [],
  notifications: []
}

export default function (state = initalState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      }
    case SET_UNAUTHENTICATED:
      return {
        initalState
      }
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload
      }
    default:
      return {
        state
      }
  }
}