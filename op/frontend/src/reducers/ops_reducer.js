import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP } from '../actions/types';


export default (state = {}, action) => {
    
    switch (action.type) {
        
        case FETCH_OPS:
            return merge({}, {'ops': action.payload});
        default :
            return state;

    }}