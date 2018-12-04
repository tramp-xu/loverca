<template>
  <div class="dashboard__navbar">
    <i class="iconfont collapse-btn" @click="changeCollapse">&#xe7f4;</i>
    <el-menu default-active="home" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <el-menu-item :index="route.name" v-for="route in routes" :key="route.name">
        <div class="icon" v-html="route.icon"></div>
        <span slot="title">{{ route.meta }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      routes: [],
      showRoute: false
    }
  },
  created () {
    this.routes = this.$router.options.routes[3].children
    this.showRoute = true
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.dashboard__navbar {
  padding: 20px 0;
  overflow-y: auto;
  overflow-x: hidden;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .collapse-btn {
    cursor: pointer;
    margin-left: 20px;
  }

  .el-menu-item {
    font-size: 16px;

    .icon {
      display: inline-block;
      .iconfont {
        font-size: 18px;
      }
    }
  }
}
</style>
