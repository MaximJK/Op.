// op/frontend/src/axiosApi.js

import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      // test for token presence, no point in sending a request if token isn't present
      if (localStorage.getItem('refresh_token') && error.response.status === 401 && error.response.statusText === "Unauthorized") {
          const refresh_token = localStorage.getItem('refresh_token');

          try {
              const response = await axiosInstance
                  .post('/token/refresh/', { refresh: refresh_token });
              localStorage.setItem('access_token', response.data.access);
              localStorage.setItem('refresh_token', response.data.refresh);
              axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
              originalRequest.headers['Authorization'] = "JWT " + response.data.access;
              return axiosInstance(originalRequest);
          }
          catch (err) {
              console.log(err);
          }
      }
      // specific error handling done elsewhere
      return Promise.reject({...error});
  }
);

export default axiosInstance