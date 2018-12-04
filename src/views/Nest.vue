<template>
  <div class="login">
    <el-form>
      <el-form-item label="id">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="age">
        <el-input v-model="age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="postUser">post</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button @click="getUsers">get Users</el-button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      id: null,
      age: null,
      name: ''
    }
  },
  methods: {
    async postUser () {
      let postData = {
        id: this.id,
        name: this.name,
        age: this.age
      }
      let data = await this.axios.post('/nestApi/users', postData)
      console.log(data)
    },
    async getUsers () {
      let data = await this.axios.get('/nestApi/users')
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login{
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
