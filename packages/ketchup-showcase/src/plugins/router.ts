import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

// TODO when these simple routes gets too many, move them to their own file inside the router folder.
let simpleRoutes = [
  {
    path: `/box`,
    name: 'box',
    component: () => import(`@/views/box/Box.vue`),
  },
  {
    path: `/button`,
    name: 'button',
    component: () => import(`@/views/button/Button.vue`),
  },
  {
    path: `/calendar`,
    name: 'calendar',
    component: () => import(`@/views/calendar/Calendar.vue`),
  },
  {
    path: `/chart`,
    name: 'chart',
    component: () => import(`@/views/chart/Chart.vue`),
  },
  {
    path: `/checkbox`,
    name: 'checkbox',
    component: () => import(`@/views/checkbox/Checkbox.vue`),
  },
  {
    path: `/chips`,
    name: 'chips',
    component: () => import(`@/views/chips/Chips.vue`),
  },
  {
    path: `/dash`,
    name: 'dash',
    component: () => import(`@/views/dash/Dash.vue`),
  },
  {
    path: `/datatable`,
    name: 'datatable',
    component: () => import(`@/views/datatable/Datatable.vue`),
  },
  {
    path: `/field`,
    name: 'field',
    component: () => import(`@/views/field/Field.vue`),
  },
  {
    path: `/html`,
    name: 'html',
    component: () => import(`@/views/html/Html.vue`),
  },
  {
    path: `/image`,
    name: 'image',
    component: () => import(`@/views/image/Image.vue`),
  },
  {
    path: `/imagebutton`,
    name: 'imagebutton',
    component: () => import(`@/views/imagebutton/Imagebutton.vue`),
  },
  {
    path: `/portal`,
    name: 'portal',
    component: () => import(`@/views/portal/Portal.vue`),
  },
  {
    path: `/progressbar`,
    name: 'progressbar',
    component: () => import(`@/views/progressbar/Progressbar.vue`),
  },
  {
    path: `/tooltip`,
    name: 'tooltip',
    component: () => import(`@/views/tooltip/Tooltip.vue`),
  },
  {
    path: `/tree`,
    name: 'tree',
    component: () => import(`@/views/tree/Tree.vue`),
  },
];

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const routes = [...baseRoutes, ...simpleRoutes];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
