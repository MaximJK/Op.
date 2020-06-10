import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import opReducer from './ops_reducer';
import draftReducer from './draft_reducer';
import opModalReducer from './op_modal_reducer'
export default combineReducers({
  auth: authReducer,
  ops: opReducer,
  drafts: draftReducer,
  modal: opModalReducer
  
});