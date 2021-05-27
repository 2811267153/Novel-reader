import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShow: "",
    bookList: [],
  },
  mutations: {
    isShow(state, plyLode) {
      state.isShow = plyLode;
    },
    addBookList(state, payLodes) {
      let oldId = state.bookList.find((item) => item._id === payLodes._id);

      if (oldId) {
        oldId.count + 1;
      } else {
        payLodes.count = 1;
        state.bookList.push(payLodes);
      }
    },
  },
  actions: {},
  modules: {},
});
