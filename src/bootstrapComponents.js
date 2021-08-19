import Vue from "vue";

import {
  BootstrapVue,
  BIconSignpost,
  BIconTelephone,
  BIconEnvelope,
  BForm,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.component("BIconSignpost", BIconSignpost);
Vue.component("BIconTelephone", BIconTelephone);
Vue.component("BIconEnvelope", BIconEnvelope);

// Form components
Vue.component("b-form", BForm);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-input", BFormInput);
