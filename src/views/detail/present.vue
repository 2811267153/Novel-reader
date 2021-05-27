<template>
  <div>
    <div class="present" :class="{ show: isShow }">
      <div class="present-info" :class="{ show: isShow }">
        简介： {{ book.longIntro }}
        <i class="iconfont icon-jiantou9" @click="isShowa"> </i>
      </div>
    </div>

    <div class="contents">
        <p>目录
            <!-- <span>更新于 {{book.updated | setUpdated}}</span> -->
            <span>连载至 {{book.chaptersCount}}章</span>
        </p>
    </div>
  </div>
</template>

<script>
import * as api from '../../netWork/axios'
export default {
  name: "present",
  props: {
    book: {},
  },
  data() {
    return {
      isShow: false,
      id: ''
    };
  },
  mounted() {
    //do something after creating vue instance
    this.id = this.$route.params.id
    this.getChapterList()
  },
  methods: {
    isShowa() {
      this.isShow = !this.isShow;
    },
    getChapterList(){
      api.getChapterList(this.id).then(res => {
        // console.log(res);
      })
    }
  },
};
</script>

<style scoped>
.present {
  height: 14vh;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 2.5%;
  padding: 2.9%;
  font-size: 14px;
  overflow: hidden;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.present-info {
  position: relative;
  height: 95%;
  overflow: hidden;
}
.iconfont {
  position: absolute;
  right: 0%;
  bottom: 2.5%;
  padding: 1%;
  background-color: #fff;
}
.show {
  height: auto !important;
}
.contents{
    background-color: #fff;
    font-size: 14px;
    padding: 2.5%;
}
p {
  border: 1px solid #ccc;
  padding: 5%;
  border-radius: 2px;
}
p span{
    float: right;
    line-height: 3vh;
    margin-left: 5%;
}
</style>
