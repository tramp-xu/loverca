import router from './index'
import axios from 'axios'

router.beforeEach((from, to, next) => {
  let token = localStorage.getItem('token')
  console.log(token)
  axios.interceptors.request.use(config => {
    config.headers.authorization = 'Bearer ' + token
    return config
  }, error => {
    return Promise.reject(error)
  })
  next()
})
