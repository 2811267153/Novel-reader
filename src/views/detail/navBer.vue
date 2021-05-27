<template>
  <div class="nav-bar">
    <div class="main-nav-bar">
      <div @click="addBookList">
        <i class="iconfont icon-jiarushujia"></i> 加入书架
      </div>
      <div class="icon-yuedus">
        <i class="iconfont icon-yuedu"></i> 开始阅读
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBer",
  data() {
    return {
      bookList: [],
      arrBookList1: [],
      arrBookList2: [],
    };
  },
  methods: {
    addBookList() {
      /**
       * 1 var arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]
       * 2   arr.sort()
       * 3   var newArr = [arr[0]]
       * 4   for (var i = 1; i < arr.length; i++) {
       * 5     if (arr[i] !== newArr[newArr.length - 1]) {
       * 6       newArr.push(arr[i])
       * 7     }
       * 8   }F
       */

      this.$bus.$emit("isCalled");

      this.bookList = this.$store.state.bookList;
      console.log(this.bookList);
      window.localStorage.setItem("bookItem", JSON.stringify(this.bookList));
      // window.localStorage.clear()
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style scoped>
.nav-bar {
  position: relative;
}
.main-nav-bar {
  display: flex;
  position: fixed;
  z-index: 10;
  height: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
}
.main-nav-bar div {
  flex: 1;
}
.iconfont {
  margin-right: 5%;
}
.icon-yuedus {
  background-color: rgb(185, 231, 250);
}
</style>
