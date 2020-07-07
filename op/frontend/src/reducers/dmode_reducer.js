import merge from 'lodash/merge';
import { DARK_MODE, LIGHT_MODE } from '../actions/types';

export default (state = {}, action) => {
    
    switch (action.type) {
        // case LOGIN_USER:
            
        //     return merge({}, {'username': action.payload});
        case DARK_MODE:
        return merge({}, {'mode': 'Dark Mode'})
        case LIGHT_MODE:
            return merge({}, {'mode': 'Light Mode'})
        default:
            return merge({}, {'mode': 'Light Mode'})
        

            }
}