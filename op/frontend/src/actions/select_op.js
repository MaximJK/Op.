import {SELECT_OP } from './action_types'

export const selectOp = data => dispatch =>{
    return dispatch({
        type: SELECT_OP,
        payload: data
        });
    }