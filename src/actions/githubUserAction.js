import axios from "axios";

const BASE_URL = 'https://api.github.com';

import {USER_FETCH_SUCCESS, USER_FETCH_FAILURE, USER_LOADING} from "./actionTypes";

export const getGithubUsers = (user) => async dispatch => {
  try {
    dispatch(userInfoLoading());

    const result = await axios.get(`${BASE_URL}/users/${user}`);
    const users = result.data;
    dispatch({
        type:USER_FETCH_SUCCESS,
        payload:users
    });
  } catch (e) {
    dispatch(userFetchFailure(e));
  }
};


export const userInfoLoading = () => {
	return {
		type: USER_LOADING, //tell reducer that user is loading
	};
};

export const userFetchSuccess = users => ({
  type: USER_FETCH_SUCCESS,
  payload: users,
});
export const userFetchFailure = error => ({
  type: USER_FETCH_FAILURE,
  payload: error,
});