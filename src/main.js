import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import {
    BootstrapVue,
    IconsPlugin,
    telephone,
    signpostfill,
    envelope
} from "bootstrap-vue";
import VueMatchHeights from "vue-match-heights";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "swiper/css/swiper.css";
Vue.component(telephone, signpostfill, envelope)
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMatchHeights, {
    disabled: [768],
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");