import { combineReducers } from 'redux';
import githubUserReducer from './githubUserReducer';

export default combineReducers({
  githubuser: githubUserReducer,

});
