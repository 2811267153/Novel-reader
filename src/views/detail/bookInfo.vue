<template>
  <div id="book-info">
    <scroll ref="scroll" class="scroll">
      <div class="books content">
        <div class="book-info">
          <div class="img">
            <img :src="'http://statics.zhuishushenqi.com' + book.cover" />
          </div>
          <div class="book-info-other">
            <div class="border">
              <h2>
                {{ book.title }}
              </h2>
              <p>{{ book.author }}</p>
              <!-- <p>{{book}}</p> -->
              <p>{{ book.lastChapter }}</p>

              {{ book.latelyFollower | setLatelyFollower }}人阅读
              <div class="continue" v-if="book.isSerial">连载中...</div>
              <div class="over" v-else>已完结</div>
              <p>
                <span>{{ book.majorCate }}</span>
                <span>{{ book.minorCate }}</span>
              </p>
            </div>
          </div>
        </div>
        <present :book="book"></present>

        <swiper></swiper>
        <recommend @imgLoding="imgLoding"></recommend>
      </div>
      <div class="bar"></div>
    </scroll>

    <nav-ber></nav-ber>
  </div>
</template>

<script>
import * as api from "../../netWork/axios";

import scroll from "../../scrool/scrool";
import present from "./present";
import swiper from "./swiper";
import recommend from "./recommed";
import navBer from "./navBer";
export default {
  name: "bookInfo",
  data() {
    return {
      bookId: "",
      book: "",
    };
  },
  created() {
    this.bookId = this.$route.params.id;
    this.getBook();
  },
  components: {
    scroll,
    present,
    swiper,
    navBer,
    recommend,
  },
  methods: {
    imgLoding() {
      this.$refs.scroll.refresh();
    },
    getBook() {
      api.getBookId(this.bookId).then((res) => {
        this.book = res.data;
      });
    },
  },
  watch: {
    bookId() {
      api.getBookId(this.bookId).then((res) => {
        this.book = res.data;
      });
    },
  },
};
</script>

<style scoped>
#book-info {
  position: relative;
}
.scroll {
  padding-bottom: 41px;
  position: absolute;
  z-index: 10;
  height: 100vh;
  background-color: #f1f1f1;
}
.book-info {
  display: flex;
  background-color: #fff;
  height: 40vh;
  border-radius: 8px;
}
.img {
  flex: 1;
  text-align: center;
  line-height: 40vh;
}
.book-info .img img {
  width: 70%;
  vertical-align: middle;
  border-radius: 8px;
}
.book-info-other {
  font-size: 14px;
  width: 50%;
}
.border {
  margin-top: 5vh;
  height: 30vh;
  border-left: 1px dashed #ccc;
  padding-left: 5%;
  padding-top: 5%;
  padding-right: 10%;
}
.book-info-other p {
  padding-bottom: 5%;
  padding-left: 2%;
  margin-top: 6%;
}
h2 {
  font-weight: 400;
}
.book-info-other span {
  display: inline-block;
  padding: 2.5%;
  border: 1px solid #ccc;
  margin-top: 5%;
  margin-right: 5%;
  border-radius: 8px;
}
.continue,
.over {
  display: inline-block;
  border: 2px solid rgb(231, 109, 109);
  border-radius: 8px;
  padding: 3%;
  margin-left: 2.5%;
}
.over {
  border: 2px solid rgb(109, 231, 160);
}
.bar {
  width: 100%;
  height: 40px;
}
</style>
