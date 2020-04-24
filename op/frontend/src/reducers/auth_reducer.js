import merge from 'lodash/merge';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/types';

export default (state = {}, action) => {

    switch (action.type) {
        case LOGIN_USER:
            
            return merge({}, {'username': action.payload.data});
        case SIGNUP_USER:
        return {}
        case LOGOUT_USER:
            return {}
        default :
            return state;
        

            }
}