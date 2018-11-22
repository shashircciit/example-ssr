import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import fetchlogin from './fetchlogin';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  login:fetchlogin
});
