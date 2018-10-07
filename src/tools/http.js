import axios from 'axios'

let token = localStorage.getItem('token')
console.log(token)
axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + token
  return config
}, error => {
  return Promise.reject(error)
})
