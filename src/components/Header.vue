<template>
  <div class="dashboard__header">
    <div class="logo">Loverca</div>
    <div class="right">
      <div class="portrait">Hsumo</div>
      <el-button type="text" @click="logout">Logout</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$message({
        message: '已注销登录',
        type: 'success'
      })
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.dashboard__header {
  height: 60px;
  position: fixed;
  background-color: #fff;
  line-height: 60px;
  top: 0;
  padding: 0 20px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  .logo {
    font-size: 18px;
    font-weight: 700;
  }

  .right {
    display: flex;

    .portrait {
      margin-right: 20px;
    }
  }
}
</style>
