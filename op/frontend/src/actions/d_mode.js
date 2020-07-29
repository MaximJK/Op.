import { DARK_MODE, LIGHT_MODE } from './action_types'

export const darkMode = () => dispatch => {
    document.getElementById('site').classList.add('dark');
    localStorage.setItem('mode', 'dark');
    return dispatch({
        type: DARK_MODE,
        });
};

export const  lightMode= () => dispatch => {
    document.getElementById('site').classList.remove('dark');
    localStorage.setItem('mode', 'light');
    return dispatch({
        type: LIGHT_MODE,
        });
};