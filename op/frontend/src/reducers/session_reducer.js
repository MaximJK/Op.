import merge from 'lodash/merge';
import { LOG_IN, LOG_OUT } from '../actions/action_types';

export default (state = {}, action) => {
    
    switch (action.type) {

        case LOG_IN:
            return true
        case LOG_OUT:
            return false
        default :
            return state;
        
            }
}