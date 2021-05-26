<template>
  <div class="nav-bar">
    <div class="main-nav-bar">
      <div><i class="iconfont icon-jiarushujia"></i> 加入书架</div>
      <div class="icon-yuedus"><i class="iconfont icon-yuedu"></i> 开始阅读</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBer",
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
