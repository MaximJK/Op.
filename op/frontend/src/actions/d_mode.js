import { DARK_MODE, LIGHT_MODE } from './types'

export const darkMode = () => dispatch => {
    document.getElementById('site').classList.add('dark');
    return dispatch({
        type: DARK_MODE,
        })
}

export const  lightMode= () => dispatch => {
    document.getElementById('site').classList.remove('dark')
    return dispatch({
        type: LIGHT_MODE,
        })
}