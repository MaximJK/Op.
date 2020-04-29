import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import opReducer from './ops_reducer'
export default combineReducers({
  auth: authReducer,
  ops: opReducer,
  
});