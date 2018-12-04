<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="0" class="loginForm">
      <el-form-item prop="userName">
        <el-input type="text" v-model="loginForm.userName" placeholder="账户名" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="gitLogin">Github Login</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        <router-link to="/register">
          <el-button>立即注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  data () {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      }
      callback()
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      callback()
    }
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { validator: checkUser, trigger: 'blur' }
        ],
        password: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async gitLogin () {
      const data = await this.axios.get('/api/third-party/login')
      console.log(data)
      window.location.href = data.data.url
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/api/admin/login', this.loginForm).then(resp => {
            if (resp.success) {
              localStorage.setItem('token', resp.data.token)
              localStorage.setItem('uid', resp.data.user.uid)
              this.$router.push({name: 'index'})
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async search () {
      try {
        const data = await this.axios.get('/api/admin/search?limit=20')
        console.log(data)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width: 100%;
  max-width: 460px;
  padding: 0 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
