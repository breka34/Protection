import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { BootstrapVue, IconsPlugin, BDropdown } from "bootstrap-vue";
import VueMatchHeights from "vue-match-heights";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("b-dropdown", BDropdown);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMatchHeights, {
  disabled: [768],
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
