import axios from 'axios';

import {GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING} from './types';

export const getUsers = (user, history) => dispatch => {
  dispatch(setUsersLoading());
  axios
      .get('/api/users')
      .then(res =>
          dispatch({
              type: GET_USERS,
              payload: res.data
      }))
      .then(() => {
          history.push("/listings");

      })
};

export const addUser = (user, history) => dispatch => {
    axios
        .post('/api/users', user)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
        .then(() => {
          history.push("/listings");
        })
};

export const deleteUser = id => dispatch => {
    axios.delete(`/api/users/${id}`).then(res =>
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    );
};

// Login
export const loginUser = user => dispatch => {
  axios
    .post("/api/users/sign-in", user)
    .then(res => dispatch({
        type: ADD_USER,
        payload: res.data
    }))
    .then(() => {
      history.push("/listings");
    })
};

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};
