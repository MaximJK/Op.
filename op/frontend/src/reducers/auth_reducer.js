import merge from 'lodash/merge';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/types';

export default (state = {}, action) => {
    debugger
    switch (action.type) {
        case LOGIN_USER:
            return merge({}, {'username': action.payload});
        case SIGNUP_USER:
            // return merge({}, {'username': action.payload});
        return {}
        case LOGOUT_USER:
            return {_nullUser}
        default :
            return state;
        

            }
}