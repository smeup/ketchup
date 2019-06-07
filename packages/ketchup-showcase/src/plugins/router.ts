import Vue from 'vue';
import Router from 'vue-router';

import dataTableRoutes from './router/dataTable';
import fldRoutes from './router/fldRoutes';
import easterRoutes from './router/easterRoutes';

import Home from '@/views/Home.vue';
import KupPortals from '@/views/KupPortals.vue';

Vue.use(Router);

let simpleRoutes = [
  {
    path: `/kup-btn`,
    name: 'btn',
    component: () => import(`@/views/KupBottoniera.vue`),
  },
  {
    path: `/charts`,
    name: 'charts',
    component: () => import(`@/views/KupCharts.vue`),
  },
  {
    path: `/portals`,
    name: 'portals',
    component: () => import(`@/views/KupPortals.vue`),
  },

];

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
  ...easterRoutes,
  ...simpleRoutes
];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
