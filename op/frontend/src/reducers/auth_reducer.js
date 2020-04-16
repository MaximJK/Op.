import _ from 'lodash';
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
            ...state,
            ..._.mapKeys(action.payload, 'id')
            };
            default:
                return state;
        case SIGNUP_USER:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case LOGOUT_USER :
            return _.omit(state, action.payload);
        

            }
}