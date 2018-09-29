<template>
  <div class="home">
    <h1>home</h1>
    <el-button @click="search">anniu</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    async getUsers () {
      const data = await this.axios.get('/api/admin/search')
      console.log(data)
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
.home{
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
