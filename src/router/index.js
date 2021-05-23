import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home/Home.vue");
const BookCase = () => import("../views/BookCase/BookCase.vue");
const User = () => import("../views/User/User.vue");

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "home" },
  { path: "/home", component: Home },
  { path: "/bookCase", component: BookCase },
  { path: "/user", component: User },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
