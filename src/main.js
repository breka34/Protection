import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import "./bootstrapComponents";

import VueAwesomeSwiper from "vue-awesome-swiper";

import VueMatchHeights from "vue-match-heights";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueMatchHeights, {
  disabled: [768],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
