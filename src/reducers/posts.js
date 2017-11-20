import {
  POSTS_GET_PENDING,
  POSTS_GET_RECIEVED,
  POSTS_GET_REJECTED
} from '../actions/posts';

const initialState = {
  pending: false,
  received: false,
  error: null,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_GET_PENDING:
      return {
        ...state,
        pending: true
      };
    case POSTS_GET_RECIEVED:
      return {
        ...state,
        pending: false,
        received: true,
        data: action.payload
      };
    case POSTS_GET_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
