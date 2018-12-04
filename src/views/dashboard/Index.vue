<template>
  <div class="dashboard">
    <dash-header></dash-header>
    <div class="dashboard__body">
      <dash-navbar></dash-navbar>
      <div class="dashboard__body-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import DashHeader from '@/components/Header'
import DashNavbar from '@/components/Navbar'

export default {
  components: {
    DashHeader,
    DashNavbar
  },
  data () {
    return {
      msg: 'ddd'
    }
  }
}
</script>
<style lang="less">
  .dashboard {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // padding-top: 60px;
    &__body {
      display: flex;
      flex: 1;
      padding-top: 60px;

      &-content {
        flex: 1;
        padding: 20px;
      }
    }
  }
</style>
