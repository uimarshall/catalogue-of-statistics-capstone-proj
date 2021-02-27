import { USER_FETCH_SUCCESS, USER_LOADING, USER_FETCH_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
  errMsg: '',
};

const githubUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
        errMsg: '',
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,

        errMsg: '',
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        errMsg: 'Could not find this user',
      };

    default:
      return state;
  }
};

export default githubUserReducer;
