<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="0" class="loginForm">
      <el-form-item label="" prop="user_name">
        <el-input type="password" v-model="loginForm.user_name" placeholder="账户名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        <el-button @click="search()">查询用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        user_name: '',
        password: ''
      },
      rules: {
        user_name: [
          { validator: checkUser, trigger: 'blur' }
        ],
        password: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // this.axios.get('api/users').then((response) => {
    //   console.log(response.data)
    // })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/api/admin/login', this.loginForm).then(resp => {
            if (resp.data.status === 200) {
              localStorage.setItem('token', resp.data.token)
              this.$router.push({name: 'home'})
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
    search () {
      this.axios.get('/api/admin/search?limit=20').then(res => {
        console.log(res)
      }).catch(e => {
        console.error(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
