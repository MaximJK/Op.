import merge from 'lodash/merge';
import { MODAL_ON, MODAL_OFF} from '../actions/action_types';

export default (state = {}, action) => {
    
    switch (action.type) {
        case MODAL_ON:
            return true
        case MODAL_OFF:
            return false
        default:
            return false
    }}