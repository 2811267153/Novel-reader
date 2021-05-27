<template>
  <div id="nav-bar">
    <div class="nav-bar">
      <div class="nav-bar-item" :class="{active: currentIndex === index}" v-for="(ele, index) in title" :key="ele" @click="active(index)">{{ ele }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      title: ["本地", "书城"],
      currentIndex: 0,
    };
  },
  methods: {
    active(index){
      this.currentIndex = index
    }
  }
};
</script>
<style scoped>
#nav-bar{
  text-align: center;
  width: 60%;
  margin: 0 auto;
}
.nav-bar{
  width: 100%;
  display: flex;
  border-radius: 8px;
  border: 6px solid #fff;
  justify-content: space-around;
}
.nav-bar-item{
  border-radius: 8px;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.active{
  background-color: rgb(185, 231, 250);;
}
</style>
