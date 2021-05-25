<template>
  <div id="detail">
    <!-- <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs> -->
    <tab-bar :sex = "sex"></tab-bar>
    <scroll :pull-up-load= 'true' @pullingUp='lodingMore' ref="scroll" class="scroll">
      <div class="content">
        <div class="content-item" v-for="(ele, index) in (bookItem)" @click="getBookId(index)" :key="ele.id">
          <!-- {{ ele }} -->
          <img
            :src="'http://statics.zhuishushenqi.com' + ele.cover"
            alt=""
            @load="itemLode"
          />
          <p class="title">{{ ele.title }}</p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import * as api from "../../netWork/axios";

import tabBar from './tabBar'
import scroll from "../../scrool/scrool";
export default {
  name: "detail",
  data() {
    return {
      sex: "",
      type: "",
      major: "",
      minor: "",
      start: 0,
      limit: 20,
      bookItem: [],
      bookId: '',
    };
  },
  components: {
    scroll,
    tabBar
  },
  created() {
    this.sex = this.$route.query.sex;
    this.type = this.$route.query.type;
    this.major = this.$route.query.major;
    this.minor = this.$route.query.minor;
    this.start = Number(this.start);
    this.limit = this.$route.query.limit;
    this.getCategoriesY();
  },
  methods: {
    itemLode() {
      this.$refs.scroll.refresh();  //发送事件监听函数
    },
    getBookId(index){
      this.bookId = this.bookItem[index]._id
      this.$router.push({
        path: '/bookInfo',
        query: {
          id: this.bookId
        }
      })
    },
    lodingMore(){
      this.getCategoriesY()
    },
    getCategoriesY() {
      api
        .getCategoriesY(
          this.sex,
          this.type,
          this.major,
          this.minor,
          this.start,
          this.limit
        )
        .then((res) => {
          this.bookItem.push(...res.data.books);
          console.log(this.bookItem);
        });
        this.start = Number(this.start ) + 1
        this.$refs.scroll.finishPullUp()
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  font-size: 14px;
}
.scroll {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: calc(100vh - 7vh);
  overflow: hidden;
  background-color: #fff;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.content-item {
  width: 30%;
  border-radius: 8px;
  text-align: center;
}
.content-item img {
  width: 100%;
  border-radius: 8px;
  height: 80%;
}
.title {
  margin-top: 2.5%;
}
</style>
