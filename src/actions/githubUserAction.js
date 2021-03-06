import axios from 'axios';

import { USER_FETCH_SUCCESS, USER_FETCH_FAILURE, USER_LOADING } from './actionTypes';

const BASE_URL_NAME = 'https://api.github.com';

export const userInfoLoading = () => ({
  type: USER_LOADING, // tell reducer that user is loading
});

export const userFetchSuccess = users => ({
  type: USER_FETCH_SUCCESS,
  payload: users,
});
export const userFetchFailure = error => ({
  type: USER_FETCH_FAILURE,
  payload: error,
});

export const getGithubUsers = user => async dispatch => {
  console.log(user);
  try {
    dispatch(userInfoLoading());

    const result = await axios.get(`${BASE_URL}/users/${user}`);
    // const result = await axios.get(BASE_URL);
    const users = result.data;
    console.log(users);
    dispatch({
      type: USER_FETCH_SUCCESS,
      payload: users,
      userId: user,
    });
  } catch (e) {
    dispatch(userFetchFailure(e));
  }
};
