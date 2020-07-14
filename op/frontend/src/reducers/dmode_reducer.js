import merge from 'lodash/merge';
import { DARK_MODE, LIGHT_MODE } from '../actions/types';

export default (state = {}, action) => {
    
    switch (action.type) {
        // case LOGIN_USER:
            
        //     return merge({}, {'username': action.payload});
        case DARK_MODE:
        return 'Dark Mode'
        case LIGHT_MODE:
            return 'Light Mode'
        default:
            return state
        

            };
};