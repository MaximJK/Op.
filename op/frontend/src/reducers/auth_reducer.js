import merge from 'lodash/merge';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, FETCH_USER } from '../actions/action_types';

export default (state = {}, action) => {
    
    switch (action.type) {
        // fetch user will dispatch info to store.
        // case LOGIN_USER:
        //     return merge({}, {'username': action.payload});
        case SIGNUP_USER:
        return {}
        case LOGOUT_USER:
            return {}
        case FETCH_USER:
            console.log(action.payload)
            return merge({}, action.payload[0]);
        default :
            return state;
        

            }
}