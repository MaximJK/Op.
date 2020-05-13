import { FETCH_DRAFT, CREATE_DRAFT, DELETE_DRAFT, PATCH_DRAFT } from './types'

export const createDraft = data => dispatch => (
    axiosInstance.get('/ops/', {
        op: data.op,
        body: data.body,
        notes: data.notes,
        version_num: data.version_num,
        is_final: data.is_final

    })
    .then(response => {
        return dispatch({
        type: CREATE_DRAFT,
        payload: response.data
        })
    })
    )

export const deleteDraft = id => dispatch => (
    axiosInstance.get(`/ops/${id}/`, {
        

    })
    .then(response => {
        return dispatch({
        type: DELETE_DRAFT,
        payload: id
        })
    })
    )

export const updateOp = data => dispatch => (
    axiosInstance.patch(`/ops/${data.id}/`, {
    body: data.body,
    notes: data.notes,
    version_num: data.version_num,
    is_final: data.is_final
        
    })
    .then(response => {
        return dispatch({
        type: PATCH_DRAFT,
        payload: response.data
        })
    })
    )
