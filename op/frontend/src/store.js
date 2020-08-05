import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';
import logger from 'redux-logger';
const initialState = { 
  auth: {id: 0}
};


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

export default store;
