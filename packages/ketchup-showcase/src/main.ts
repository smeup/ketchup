import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont';

import { defineCustomElements } from 'ketchup/dist/loader';
defineCustomElements(window);

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/[ketchup|app|kup]-\w*/];

// css
import '@mdi/font/css/materialdesignicons.min.css';

import router from './plugins/router';

const instance = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
