import merge from 'lodash/merge';
import { FETCH_OPS, DELETE_OP, CREATE_OP, PATCH_OP } from '../actions/types';


export default (state = {}, action) => {
    
    switch (action.type) {
        
        case FETCH_OPS:
            return merge({}, action.payload);
        case CREATE_OP:
            let newState2 = merge({}, state);
            newState2.ops.push(action.payload);
            return newState2;
        case PATCH_OP:
            let newState3 = merge({}, state);
            return newState3.ops.map(op => 
                {if (op.id === action.payload.id){
                    return Object.assign(op, action.payload)
                } else {
                    return op
                }
                    
            })
        case DELETE_OP:
            let newState = merge({}, state);
            
            return newState.ops.filter(op =>
                op.id !== action.payload);
        default :
            return state;
    }}
