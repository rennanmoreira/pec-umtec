import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const showError = error => console.error(error.response.status, error.message)

const errorStatus = (type, error) => ({
  400: showError(error),
  default: showError(error),
}[type || 'default'])

const errorInterceptor = error => {
  if (!error.response) return Promise.reject(error)
  errorStatus(error.response.status, error)
  return Promise.reject(error)
}

const responseInterceptor = response => {
  if (response.status === 200 || response.status === 201) {
    return Promise.resolve(response)
  }
  return Promise.reject(response); // Caso de erro
}

API.interceptors.response.use(responseInterceptor, errorInterceptor)

export default API

