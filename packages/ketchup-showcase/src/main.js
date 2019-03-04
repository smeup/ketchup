import Vue from 'vue';
import App from './App.vue';

import { defineCustomElements } from 'ketchup/dist/loader';
defineCustomElements(window);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/[ketchup|app]-\w*/];

new Vue({
  render: h => h(App),
}).$mount('#app');
