import Vue from 'vue';
import App from './App.vue';
import titleMixin from '../src/mixins/titleMixin';

import { defineCustomElements } from '@sme.up/ketchup/dist/loader';
defineCustomElements(window);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/[ketchup|app|kup]-\w*/];

import router from './plugins/router';

const instance = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.mixin(titleMixin);
