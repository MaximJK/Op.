import merge from 'lodash/merge';
import { SELECT_OP } from '../actions/action_types';

export default (state = {}, action) => {
    
    switch (action.type) {
        // case LOGIN_USER:
            
        //     return merge({}, {'username': action.payload});
        case SELECT_OP:
            return action.data
        default:
            return state
        

            };
};