import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types'


export const loginUser = state => async dispatch => {
    const res = await axiosInstance.post('/token/obtain/', {
        username: state.username,
        password: state.password
    });
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
   
  };


  export const signupUser = state => async dispatch => {
    const res = await axiosInstance.post('/user/create/', {
      username: state.username,
      email: state.email,
      password: state.password
    });
    dispatch({
      type: SIGNUP_USER,
      payload: res.data
    });
   
  };