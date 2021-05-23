<template>
  <tab-bar>
    <tab-bar-item :link="'/home'">
      <span slot="text"> 首页 </span>
    </tab-bar-item>
    <tab-bar-item :link="'/bookCase'">
      <span slot="text"> 书架 </span>
    </tab-bar-item>
    <tab-bar-item :link="'/user'">
      <span slot="text"> 我的 </span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "./tabBar";
import tabBarItem from "./tabBarItem";
export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style scoped>
span {
  line-height: 38px;
}
</style>
