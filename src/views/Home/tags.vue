<template>
  <div>
    <p>热门分类</p>
    <div class="tags">
      <div class="tags-item active"><i class="iconfont icon-nansheng"></i></div>
      <div class="tags-item"><i class="iconfont icon-nvsheng"></i></div>
    </div>
  </div>
</template>

<script>
export default {};
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
