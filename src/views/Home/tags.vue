<template>
  <div>
    <p>热门分类</p>
    <div class="tags">
      <div class="tags-item" :class="{ active: isActive }" @click="itemClick">
        <i class="iconfont icon-nansheng"></i>
      </div>
      <div class="tags-item" :class="{ active: !isActive }" @click="itemClick">
        <i class="iconfont icon-nvsheng"></i>
      </div>
    </div>

    <book-tags :booktags="bookTags" :sex='sex'></book-tags>
  </div>
</template>

<script>
import bookTags from "./bookTags";

import { getHot } from "../../netWork/axios";

export default {
  data() {
    return {
      isActive: true,
      bookTags: [],
      bookTagsF: [],
      sex: ''
    };
  },
  methods: {},
  components: {
    bookTags,
  },
  created() {
    this.getHotTags();
    // window.localStorage.clear()
  },
  mounted() {},

  methods: {
    itemClick() {
      this.isActive = !this.isActive;
      this.getHotTags();
    },
    getHotTags() {

      //监听按钮状态  this.isActive 是true 则 渲染男生推荐分类 否则返回 女生 推荐分类
      if (this.isActive == true) {
        this.sex = 'male'
        //检查 本地是否 有 数据 如果有 则直接  对 本地诗句 进行渲染
        if (JSON.parse(window.localStorage.getItem("bookTags_male"))) {
          this.bookTags = JSON.parse(
            window.localStorage.getItem("bookTags_male")
          );
        } else {
          getHot().then((res) => {
            this.bookTags = res.data.male       
            window.localStorage.setItem(  // 将请求数据 保存到本地  方便 获取
              "bookTags_male",
              JSON.stringify(this.bookTags)
            );
          });
        }
      } else {
        this.sex = 'female'
         if (JSON.parse(window.localStorage.getItem("bookTags_famle"))) {
          this.bookTags = JSON.parse(
            window.localStorage.getItem("bookTags_famle")
          );
        } else {
          getHot().then((res) => {
            console.log(res);
            this.bookTags = res.data.female; //保存女频书籍分类
            window.localStorage.setItem(
              "bookTags_famle",
              JSON.stringify(this.bookTags)
            );
          });
        }
      }
      console.log(this.bookTags);
    },
  },
};
</script>

<style scoped>
.tags {
  display: flex;
  width: 95%;
  margin-left: 2.5%;
  background-color: #f1f1f1;
  text-align: center;
  justify-content: space-evenly;
  height: 40px;
  border-radius: 8px;
  border: 4px solid #f1f1f1;
}
.iconfont {
  font-size: 1.5rem;
}
.icon-nansheng {
  color: royalblue;
}
.icon-nvsheng {
  color: salmon;
}
.tags-item {
  width: 49%;
  line-height: 32px;
  border-radius: 8px;
}
.active {
  background-color: rgb(185, 231, 250);
}
p {
  margin: 2.5%;
}
</style>
