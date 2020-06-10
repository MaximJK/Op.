import merge from 'lodash/merge';
import { FETCH_DRAFTS, CREATE_DRAFT, DELETE_DRAFT, PATCH_DRAFT } from '../actions/types';

debugger
export default (state = {}, action) => {
    debugger
    const arrayToObject = (array) =>
        array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
   }, {})
    switch (action.type) {
        
        case FETCH_DRAFTS:
            return merge({}, {[action.payload.id]: arrayToObject(action.payload.data)});
        case CREATE_DRAFT:
           
            return merge({}, state, {[action.payload.id]:{[action.payload.data.id]: action.payload.data}});
        case PATCH_DRAFT:
            let newState = merge({}, state);
            let id = action.payload.data.op
            let patchedState = {...newState, [id]: {...newState[id], [action.payload.data.id]: action.payload.data}}
            return patchedState
        case DELETE_DRAFT:
            // let newState = merge({}, state);
            return newState.ops.filter(op =>
                op.id !== action.payload);
        default :
            return state;

    }}
