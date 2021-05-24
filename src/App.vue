<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from './TabBat/MainTabBar'
export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>
@import url('./assets/best.css');
</style>
