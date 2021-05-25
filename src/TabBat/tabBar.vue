<template>
  <div  class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  isShow: ''
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 50px;
  border-radius: 8px;
  position: fixed;
  width: 95%;
  background-color: #f2f2f2;
  border: 6px solid #f2f2f2;
  left: 2.5%;
  bottom: 0px;
}
</style>
