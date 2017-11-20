import axios from 'axios';

export const POSTS_GET_PENDING = 'POSTS_GET_PENDING';
export const POSTS_GET_RECIEVED = 'POSTS_GET_RECIEVED';
export const POSTS_GET_REJECTED = 'POSTS_GET_REJECTED';

export const getAll = () => {
  return dispatch => {
    dispatch({ type: POSTS_GET_PENDING });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({
          type: POSTS_GET_RECIEVED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: POSTS_GET_REJECTED,
          payload: error.message
        });
      });
  };
};
