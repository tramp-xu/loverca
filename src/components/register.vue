<template>
  <div class="register">
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="0" class="registerForm">
      <el-form-item prop="userName">
        <el-input type="text" v-model="registerForm.userName" placeholder="输入账号" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="输入密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd">
        <el-input type="password" placeholder="确认密码" v-model="registerForm.checkPwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register('registerForm')">注册</el-button>
        <router-link to="/login">
          <el-button>前往登陆</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'register',
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        checkPwd: ''
      },
      rules: {
        userName: [
          { validator: checkUser, trigger: 'blur' }
        ],
        password: [
          { validator: checkPass, trigger: 'blur' }
        ],
        checkPwd: [
          { validator: validatePass2, trigger: 'blur' }
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
    register (formName) {
      this.$refs[formName].validate((valid) => {
        const form = this.registerForm
        const data = {
          userName: form.userName,
          password: form.password
        }
        if (valid) {
          this.axios.post('/api/admin/register', data).then(resp => {
            console.log(resp)
            this.$router.push({name: 'login'})
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
