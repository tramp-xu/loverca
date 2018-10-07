<template>
  <div class="home">
    <h1>home</h1>
    <el-button @click="search">anniu</el-button>
    <el-button @click="logout">logout</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
