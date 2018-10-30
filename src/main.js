import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Quasar from "quasar";
import "./registerServiceWorker";

import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";


Vue.use(Quasar, {
  config: {},
  iconSet: iconSet
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
