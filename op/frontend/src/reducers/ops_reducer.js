import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP, PATCH_OP } from '../actions/types';

debugger
export default (state = {}, action) => {
    const arrayToObject = (array) =>
        array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
   }, {})

    switch (action.type) {
        
        case FETCH_OPS:
            return  arrayToObject(action.payload);
        case CREATE_OP:
            let newState2 = merge({}, state)
            newState2[action.payload.id] = action.payload;
            return newState2;
            
        case PATCH_OP:
            let newState3 = merge({}, state);
            let x ={...newState3, [action.payload.id]: action.payload}
            debugger
            return x
            
            
        case DELETE_OP:
            let newState = merge({}, state);
            debugger
            delete newState[action.payload]
           return newState
        default :
            return state;
    }}
