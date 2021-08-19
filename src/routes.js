import Vue from "vue";
import VueRouter from "vue-router";
import News from "./components/News.vue";
import Login from "./components/Login.vue";

import mainView from "./components/mainView";

const routes = [
  {
    path: "/",
    component: mainView,
  },
  {
    path: "/products",
    component: News,
  },
  {
    path: "/login",
    component: Login,
  },
];
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
