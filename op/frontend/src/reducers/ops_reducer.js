import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP } from '../actions/types';

debugger
export default (state = {}, action) => {
    debugger
    switch (action.type) {
        
        case FETCH_OPS:
            return merge({}, {'ops': action.payload[0]});
        default :
            return state;

    }}