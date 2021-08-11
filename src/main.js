import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin, BDropdown } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faAngleDown,
  faPhone,
  faDownload,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faAngleDown,
  faPhone,
  faDownload,
  faBackward,
  faForward
);
library.add(fas);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("b-dropdown", BDropdown);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
