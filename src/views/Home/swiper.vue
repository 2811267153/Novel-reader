<template>
  <van-skeleton title :row="3" :loading="loading">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="ele in bookList" :key="ele.id">
        <div class="flex">
          <img :src="'http://yuenov.com' + ele.coverImg" alt="" />
          <div class="book-list">
            <p class="title">{{ ele.title }}</p>
            <p class="author">{{ ele.author }}</p>
            <!-- {{ ele.desc }} -->
            <div class="tags">{{ ele.categoryName }}</div>
            <p class="word">{{ ele.word }}</p>
            <van-button round type="info">开始阅读</van-button>
          </div>
        </div>
        <div class="aaa">{{ ele.desc }}</div>
      </van-swipe-item>
    </van-swipe>
  </van-skeleton>
</template>
<script>
import { getHotBook } from "../../netWork/home";
import axios from "axios";
export default {
  name: "swiper",
  data() {
    return {
      bookList: [],
      loading: true,
      loop: false,
    };
  },
  created() {
    axios.get("/dev-api/app/open/api/category/discovery").then((res) => {
      console.log(res);
      this.bookList = res.data.data.list[1].bookList;
      console.log(this.bookList);
    });
  },
  mounted() {
    this.loading = false;
    this.loop = false;
  },
  methods: {
    getHotBook() {
      getHotBook().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.van-swipe {
  height: 50vh;
  background-color: rgb(244, 246, 250);
}
.van-skeleton__title {
  width: 50%;
  height: 225%;
  margin: 20px, auto;
  margin-left: 25%;
}
.flex {
  display: flex;
}
.van-swipe-item {
  padding-top: 1%;
}
.van-swipe-item > div {
  width: 95%;
  margin-left: 2.5%;
  /* height: 48%; */
  /* background-color: red; */
}
img {
  border-radius: 8px;
  width: 35%;
  height: 50%;
  margin-left: 5%;
  margin-right: 5%;
}
.book-list {
  width: 50%;
  height: 50%;
}
.book-list p {
  width: 100%;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title {
  font-size: 1.6rem;
}
.author {
  color: #ccc;
}
.tags {
  width: 40%;
  height: 40px;
  color: #ccc;
  line-height: 40px;
}
.van-button--info {
  margin-top: 10px;
  color: #000;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  height: 40px;
  width: 100%;
}
.aaa {
  height: 33%;
  letter-spacing: 1.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  color: #ccc;
  font-size: 14px;
}
</style>
