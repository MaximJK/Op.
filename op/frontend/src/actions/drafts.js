import { FETCH_DRAFT, CREATE_DRAFT, DELETE_DRAFT, PATCH_DRAFT } from './types'
import axiosInstance from "./axiosApi";

export const createDraft = data => dispatch => (
    axiosInstance.get('/draft/', {
        op: data.op,
        body: data.body,
        notes: data.notes,
        version_num: data.version_num,
        is_final: false

    })
    .then(response => {
        return dispatch({
        type: CREATE_DRAFT,
        payload: response.data
        })
    })
    )

export const deleteDraft = id => dispatch => (
    axiosInstance.get(`/draft/${id}/`, {
        

    })
    .then(response => {
        return dispatch({
        type: DELETE_DRAFT,
        payload: id
        })
    })
    )

export const updateDraft = data => dispatch => (
    axiosInstance.patch(`/draft/${data.id}/`, {
        op: data.op,
        body: data.body,
        notes: data.notes,
        version_num: data.version_num,
        is_final: false
        
    })
    .then(response => {
        return dispatch({
        type: PATCH_DRAFT,
        payload: response.data
        })
    })
    )
