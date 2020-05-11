import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP } from '../actions/types';


export default (state = {}, action) => {
    
    switch (action.type) {
        
        case FETCH_OPS:
            return merge({}, {'ops': action.payload});
        case CREATE_OP:
            let newState2 = merge({}, state);
            newState2.ops.push(action.payload);
            return newState2;
        // case PATCH_OPS:
        //     let newState2 = merge({}, state);
        //     newState2.push(action.payload);
        //     return newState2;


        case DELETE_OP:
            let newState = merge({}, state);
            
            return {'ops': newState.ops.filter(op =>
                op.id !== action.payload)};
        default :
            return state;

    }}
