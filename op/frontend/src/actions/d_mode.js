import { DARK_MODE, LIGHT_MODE } from './types'

export const darkMode = () => dispatch => {
    return dispatch({
        type: DARK_MODE,
        })
}

export const  lightMode= () => dispatch => {
    return dispatch({
        type: LIGHT_MODE,
        })
}