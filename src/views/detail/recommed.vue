<template>
  <div class="recommend">
    <p>好书推荐， 万一你喜欢呢</p>
    <div class="recommend-info">
      <div class="info-item" v-for="(ele, index) in books" :key="ele.title" @click="getRecommdndBook(index)">
        <img
          :src="'http://statics.zhuishushenqi.com' + ele.cover"
          alt=""
          @load="imgLoding"
        />
        <p>{{ ele.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../../netWork/axios";
export default {
  name: "recmmend",
  data() {
    return {
      id: "", 
      books: "",
      bookId: ''
    };
  },
  created() {},
  mounted() {
    this.id = this.$route.params.id;
    this.getRecommend();
  },
  methods: {
    imgLoding() {
        this.$emit('imgLoding')  //监听 图片是否加载完成， 刷新页面布局
    },
    getRecommdndBook(index){
        this.bookId = this.books[index]._id
         this.$router.push('/bookInfo/' + this.bookId)
        this.$bus.$emit('getRecBook')
    },
    getRecommend() {
      api.getRecommend(this.id).then((res) => {
        this.books = res.data.books.slice(0, 8);
      });
    },
  },
};
</script>

<style scoped>
.recommend {
  padding: 2.5%;
  background-color: #fff;
}
.recommend-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info-item {
  margin: 2.5%;
  text-align: center;
  overflow: hidden;
  width: 20%;
  /* box-shadow: 0px  0px 3px  rgb(185, 231, 250); */
}
.info-item img {
  border-radius: 5px;
  width: 100%;
  height: 62%;
  padding-bottom: 3%;
}
</style>
