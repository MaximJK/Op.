import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from './types'
import axiosInstance from "./axiosApi";

export const loginUser = state => {
  debugger
  return (dispatch) => {
    axiosInstance.post('/token/obtain/', {
        username: state.username,
        password: state.password
    })
    .then(response => {
      dispatch({
        type: LOGIN_USER,
        payload: state.username
      })
      debugger
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
      })
    }}


  export const signUpUser = state => {
    debugger
    return (dispatch) => {
    axiosInstance.post('/user/create/', {
      username: state.username,
      email: state.email,
      password: state.password
    })
    .then(response => {
      console.log(response);
    dispatch({
      type: SIGNUP_USER,
      payload: response.data
    })
  })
    .then(()=>{
  dispatch(loginUser(state))
    })
}}
  
  
  export const loginUser2 = state => {
    return (dispatch) => {
      axiosInstance.post('/token/obtain/', {
          username: state.username,
          password: state.password
      })
      .then(response => {
        dispatch({
          type: LOGIN_USER,
          payload: state.username
        })
        debugger
          axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
        })
      }}
      
// export const SignupAndLogin = (state) => {
//    return (dispatch) => {
//    signUpUser(state);
//    loginUser(state);
//    }
// }