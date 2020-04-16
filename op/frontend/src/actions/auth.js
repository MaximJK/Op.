import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types'
import axiosInstance from "../util/axiosApi";

export const loginUser = state => async dispatch => {
    const res = await axiosInstance.post('/token/obtain/', {
        username: state.username,
        password: state.password
    });
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response;
   
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