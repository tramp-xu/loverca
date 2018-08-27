<template>
  <div class="home">
    <h1>home</h1>
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
    let token = localStorage.getItem('token')
    console.log(token)
    this.axios({
      method: 'get',
      url: 'api/users',
      headers: {'x-access-token': token}
    }).then(resp => {
    }, resp => {
      // this.$router.push({name: 'login'});
    })
  },
  methods: {
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
