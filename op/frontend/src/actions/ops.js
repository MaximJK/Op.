import { FETCH_OPS, CREATE_OP, DELETE_OP, } from './types'
import axiosInstance from "./axiosApi";

export const fetchOps = id => dispatch => (
    axiosInstance.get('/ops/', {
        authors: id
    })
    .then(response => {
        return dispatch({
        type: FETCH_OPS,
        payload: response.data
        })
    })
    )