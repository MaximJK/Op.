import { FETCH_DRAFTS, CREATE_DRAFT, DELETE_DRAFT, PATCH_DRAFT } from './types'
import axiosInstance from "./axiosApi";

export const fetchDrafts = id => dispatch => (
    axiosInstance.get('/draft/', {
        op: id
    })
    .then(response => {
        return dispatch({
        type: FETCH_DRAFTS,
        payload: {data: response.data, id: id}
        })
    })
    )

export const createDraft = data => dispatch => (
    axiosInstance.post('/draft/', {
        op: data.op,
        body: data.body,
        notes: data.notes,
        version_num: data.version_num,
        is_final: false

    })
    .then(response => {
        return dispatch({
        type: CREATE_DRAFT,
        payload: {data: response.data, id: data.op}
        })
    })
    )

export const deleteDraft = id => dispatch => (
    axiosInstance.delete(`/draft/${id}/`, {
        

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
        payload: {data: response.data, id: data.id}
        })
    })
    )
