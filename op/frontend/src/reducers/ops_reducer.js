import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP, PATCH_OP } from '../actions/types';

debugger
export default (state = {}, action) => {
    debugger
    switch (action.type) {
        
        case FETCH_OPS:
            return merge({}, {'ops': action.payload});
        case CREATE_OP:
            let newState2 = merge({}, state);
            newState2.ops.push(action.payload);
            return newState2;
        case PATCH_OP:
            let newState3 = merge({}, state);
            return {'ops': newState3.ops.map(op => 
                {if (op.id === action.payload.id){
                    return Object.assign(op, action.payload)
                } else {
                    return op
                }
                    
            })}
            


        case DELETE_OP:
            let newState = merge({}, state);
            
            return {'ops': newState.ops.filter(op =>
                op.id !== action.payload)};
        default :
            return state;

    }}
