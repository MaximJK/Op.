import { MODAL_ON, MODAL_OFF } from './types'

export const modalOn = () => dispatch => {
    return dispatch({
        type: MODAL_ON,
        })
}

export const modalOff = () => dispatch => {
    return dispatch({
        type: MODAL_OFF,
        })
}