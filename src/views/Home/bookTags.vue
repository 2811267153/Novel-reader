<template>
  <div class="book-tags">
    <div
      v-for="(item, index) in booktags"
      @click="itemClick(index)"
      :key="item.id"
      class="book-tags-info"
    >
      <div>{{ item.name }}</div>
      <!-- <img v-for="ele in bookImgs" :key="ele" :src="'http://statics.zhuishushenqi.com' + ele.bookCover/>-->`
      <img
        :src="'http://statics.zhuishushenqi.com' + item.bookCover[0]"
        alt=""
      />
      <img
        :src="'http://statics.zhuishushenqi.com' + item.bookCover[1]"
        alt=""
      />
      <div class="more">
        <p>查看更多</p>
        <i class="iconfont icon-arrowRight"></i>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../../netWork/axios";
export default {
  name: "bookTags",
  data() {
    return {
      bookImgs: [],
      isActive: "",
      type: "hot",
      major: "",
      minor: "",
      start: "",
      limit: 20,
    };
  },
  props: {
    booktags: {},
    sex: {},
    bookItem: []  //保存书籍
  },
  methods: {
    itemClick(index) {
      console.log(this.sex);
      this.major = this.booktags[index].name;
      this.$router.push({
        path: "/detail",
        query: {
          sex: this.sex,
          type: this.type,
          major: this.major,
          minor: this.minor,
          start: this.start,
          limit: this.limit,
        },
      });
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
          console.log(res);
          this.bookItem = res.data.books
          console.log(this.bookItem);
        });
    },
  },
};
</script>

<style scoped>
.book-tags {
  margin-left: 2.5%;
  width: 95%;
}
.book-tags-info {
  height: 25vh;
}
.flex {
  display: flex;
}
img,
.more {
  float: left;
  width: 30%;
  margin-left: 2%;
  border-radius: 8px;
}
.more {
  text-align: center;
  padding: 14% 0;
  border: 1px solid #f1f1f1;
  color: #ccc;
}
.more p {
  margin-bottom: 5%;
}
</style>
