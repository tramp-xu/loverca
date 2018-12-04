<template>
  <div class="home">
    <h1>home</h1>
    <el-button @click="search">anniu</el-button>
    <el-button @click="logout">logout</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.search()
  },
  methods: {
    async search () {
      try {
        const data = await this.axios.get('/api/admin/search?limit=20')
        console.log(data)
      } catch (e) {
        console.error(e)
      }
    },
    logout () {
      console.log('object')
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

<style>
.home {
  width: 100%;
  height: 100%;
}
</style>
