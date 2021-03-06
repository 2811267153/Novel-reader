import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home/Home.vue");
const BookCase = () => import("../views/BookCase/BookCase.vue");
const User = () => import("../views/User/User.vue");
const Detail = () => import("../views/detail/detail.vue");
const bookInfo = () => import("../views/detail/bookInfo.vue");

const originalPush = VueRouter.prototype.push

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "home" },
  { path: "/home", component: Home },
  { path: "/bookCase", component: BookCase },
  { path: "/user", component: User },
  { path: "/detail", component: Detail },
  { path: "/bookInfo/:id", component: bookInfo },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
