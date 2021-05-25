<template>
  <div></div>
</template>

<script>
import * as api from "../../netWork/axios";
export default {
  name: "bookInfo",
  data() {
    return {
      bookId: "",
    };
  },
  created() {
    this.bookId = this.$route.query.id;
    this.getBook();
  },
  methods: {
    getBook() {
      api.getbookId(this.bookId).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
