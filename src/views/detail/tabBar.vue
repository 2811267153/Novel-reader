<template>
  <div class="tab-bar">
    <div class="black" @click="black">
      <i class="iconfont icon-arrow-left"></i>
    </div>
    <p>{{ this.$route.query.major }}</p>
    <div class="search"><i class="iconfont icon-sousuo"></i></div>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  subBook: [],
  props: {
    sex: {},
  },
  methods: {
    black() {
        this.$router.go(-1)
    },
  },
};
</script>

<style scoped>
.tab-bar {
  height: 6vh;
  line-height: 6vh;
  padding-left: 2.5%;
  padding-right: 2.5%;
  background-color: rgb(185, 231, 250);
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
}
.black,
.search {
  text-align: center;
  width: 5vh;
  height: 100%;
}
</style>
