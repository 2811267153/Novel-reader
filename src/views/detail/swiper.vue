<template>
  <div class="commend">
    <van-swipe style="height: 20vh;" :touchable='touchable' loop='loop' autoplay='2000' :show-indicators='isshow' vertical>
      <van-swipe-item v-for="elem in commend" :key="elem.key">
        <p>书圈网友对该书的评价</p>
        <div class="commend-content">
          {{elem.content}}
        </div>
        <div class="commend-type">
          <span>{{elem.author.nickname}}</span>
          <img :src="'http://statics.zhuishushenqi.com' + elem.author.avatar" alt="">
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import * as api from "../../netWork/axios";
export default {
  name: "swiper",
  data() {
    return {
      touchable: false,
      loop: true,
      isshow: false,
      bookId: '',
      commend: [],
    };
  },
  created() {
      this.bookId = this.$route.params.id;
      this.getComment()
  },
  methods: {
      getComment(){
          api.getComment(this.bookId).then(res => {
              this.commend = res.data.docs.slice(0,7);
          })
      }
  },
};
</script>

<style scoped>
p{
  margin-bottom: 2.5%;
  margin-right: 2.5%;
}
.commend{
  background-color: #fff;
  border: 1px solid #fff;
  padding:2% 5%;
}
.commend-content{
  width: 100%;
  height: 39%;
  background-color: #f1f1f1;
  padding: 2.5%;
  border-radius: 8px;
}
.commend-type {
  margin-top: 2%;
  float: right;
  text-align: right;
  height: 30%
}
.commend-type img{
  width: 17%;
  vertical-align: bottom;
  border-radius: 50px;
  margin: 0 2.5%;
  margin-left: 5%;
}
</style>
