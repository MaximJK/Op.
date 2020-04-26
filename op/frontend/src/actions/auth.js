import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, FETCH_USER } from './types'
import axiosInstance from "./axiosApi";
import axios from 'axios'

export const loginUser = state => {
  
  return (dispatch) => {
    axiosInstance.post('/token/obtain/', {
        username: state.username,
        password: state.password
    })
    .then(response => {
      console.log('login')
      console.log(response)
      dispatch({
        type: LOGIN_USER,
        payload: response.data
      })
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
      }).then(()=>{
        dispatch(fetchUser(state))
          })
    }}

  export const fetchUser = state => {
    return (dispatch) => {
      axiosInstance.get('/user/', {
        username: state.username
    }).then(response => {
      console.log('fetch')
      console.log(response)
      dispatch({
        type: FETCH_USER,
        payload: response.data

    })
  })}}
  export const signUpUser = state => {
    
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
      payload: response
    })
  })
    .then(()=>{
  dispatch(loginUser(state))
    })
}}
  
export const logoutUser = () => {
  
  
  return (dispatch) => {
     axiosInstance.post('/blacklist/', {
    "refresh_token": localStorage.getItem("refresh_token")
     })
    .then(response => {
      console.log(response);
      dispatch({
        type: LOGOUT_USER,
      })
      
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      
      })
    }}