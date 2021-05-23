<template>
  <div class="tab-bar-item" :class="{active: isActive}" @click="itemClick">
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
import tabBar from "./tabBar";
export default {
  name: "tabBarItem",
  components: {
    tabBar,
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1;
    },
      activeStyle(){
          return this.isActive ? {'color': 'skyblue'} : {}
      }
  },
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  transition: all .4s;
}
.active {
  background-color: rgb(185, 231, 250);
  border-radius: 8px;
  color: #f1f1f1;
}
</style>
