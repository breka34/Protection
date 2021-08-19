import Vue from "vue";
import App from "./App.vue";
import router from "./routes";

import VueAwesomeSwiper from "vue-awesome-swiper";
import {
    BootstrapVue,
    IconsPlugin,
    BIconSignpost,
    BIconTelephone,
    BIconEnvelope,

} from "bootstrap-vue";
import VueMatchHeights from "vue-match-heights";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/css/swiper.css";
Vue.component('BIconSignpost', BIconSignpost);
Vue.component('BIconTelephone', BIconTelephone)
Vue.component('BIconEnvelope', BIconEnvelope);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMatchHeights, {
  disabled: [768],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
