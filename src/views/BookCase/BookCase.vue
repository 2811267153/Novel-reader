<template>
  <div id="bookCase">
    <nav-bar></nav-bar>

  </div>
</template>

<script>
import navBar from './nav-bar'
import err from './err'
import bookMain from './book-main'


export default {
  name: 'bookCase',
  data() {
    return {
      bookList: []
    }
  },
  components: {
    navBar,
    err,
    bookMain
  },
  created() {
    //do something after creating vue instance
    // if(widow)
  }
}
</script>

<style scoped>
#bookCase{
  padding: 0%　2.5%;
}
</style>
