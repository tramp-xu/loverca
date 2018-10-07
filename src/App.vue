<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  beforeCreate () {
    axios.interceptors.response.use(response => {
      const data = response.data
      const success = data.success
      const message = data.message
      if (success) {
        return data
      } else {
        this.$notify.error({
          title: '错误',
          message: message
        })
        return false
      }
    }, err => {
      if (err.response.status === 401) {
        window.localStorage.removeItem('token')
        this.$notify.error({
          title: '错误',
          message: err.response.data.message
        })
        this.$router.push('/login')
      }
      return Promise.reject(err)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
