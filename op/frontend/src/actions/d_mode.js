import { DARK_MODE, LIGHT_MODE } from './types'

export const darkMode = () => dispatch => {
    document.querySelector('body').classList.add('dark');
    return dispatch({
        type: DARK_MODE,
        })
}

export const  lightMode= () => dispatch => {
    document.querySelector('body').classList.remove('dark')
    return dispatch({
        type: LIGHT_MODE,
        })
}