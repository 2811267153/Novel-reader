<template>
  <div id="home">
    <swiper></swiper>
    <scroll class="scroll">
      <div class="content">
        <tags/>
      </div>
    </scroll>
  </div>
</template>

<script>
import swiper from "./swiper";
import tags from "./tags";
import Tags from "./tags.vue";
import scroll from "../../scrool/scrool";
export default {
  name: "home",
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.loading = false;
  },
  components: {
    swiper,
    tags,
    scroll
  },
};

Tags;
</script>

<style scoped>
#home {
  height: 100vh;
}
.van-skeleton__avatar {
  height: 200px;
}
.scroll {
  height: 100vh;
  overflow: hidden;
}
.content{
  padding-bottom: 60px;
}
</style>
