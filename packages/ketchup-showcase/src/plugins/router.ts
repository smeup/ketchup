import Vue from 'vue';
import Router from 'vue-router';

import dataTableRoutes from './router/dataTable';
import fldRoutes from './router/fldRoutes';
import easterRoutes from './router/easterRoutes';

import Home from '@/views/Home.vue';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const routes = [
  ...baseRoutes,
  ...dataTableRoutes,
  ...fldRoutes,
  ...easterRoutes
];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
