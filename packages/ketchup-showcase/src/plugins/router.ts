import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

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

let componentsRoutes = [
  {
    path: `/autocomplete`,
    name: 'autocomplete',
    component: () => import(`@/views/components/autocomplete/Autocomplete.vue`),
  },
  {
    path: `/box`,
    name: 'box',
    component: () => import(`@/views/components/box/Box.vue`),
  },
  {
    path: `/button`,
    name: 'button',
    component: () => import(`@/views/components/button/Button.vue`),
  },
  {
    path: `/calendar`,
    name: 'calendar',
    component: () => import(`@/views/components/calendar/Calendar.vue`),
  },
  {
    path: `/chart`,
    name: 'chart',
    component: () => import(`@/views/components/chart/Chart.vue`),
  },
  {
    path: `/checkbox`,
    name: 'checkbox',
    component: () => import(`@/views/components/checkbox/Checkbox.vue`),
  },
  {
    path: `/chips`,
    name: 'chips',
    component: () => import(`@/views/components/chips/Chips.vue`),
  },
  {
    path: `/dash`,
    name: 'dash',
    component: () => import(`@/views/components/dash/Dash.vue`),
  },
  {
    path: `/datatable`,
    name: 'datatable',
    component: () => import(`@/views/components/datatable/Datatable.vue`),
  },
  {
    path: `/field`,
    name: 'field',
    component: () => import(`@/views/components/field/Field.vue`),
  },
  {
    path: `/html`,
    name: 'html',
    component: () => import(`@/views/components/html/Html.vue`),
  },
  {
    path: `/image`,
    name: 'image',
    component: () => import(`@/views/components/image/Image.vue`),
  },
  {
    path: `/imagebutton`,
    name: 'imagebutton',
    component: () => import(`@/views/components/imagebutton/Imagebutton.vue`),
  },
  {
    path: `/menu`,
    name: 'menu',
    component: () => import(`@/views/components/menu/Menu.vue`),
  },
  {
    path: `/portal`,
    name: 'portal',
    component: () => import(`@/views/components/portal/Portal.vue`),
  },
  {
    path: `/progressbar`,
    name: 'progressbar',
    component: () => import(`@/views/components/progressbar/Progressbar.vue`),
  },
  {
    path: `/tooltip`,
    name: 'tooltip',
    component: () => import(`@/views/components/tooltip/Tooltip.vue`),
  },
  {
    path: `/tree`,
    name: 'tree',
    component: () => import(`@/views/components/tree/Tree.vue`),
  },
];

let javascriptRoutes = [
  {
    path: `/scrollonhover`,
    name: 'scrollonhover',
    component: () =>
      import(`@/views/javascript/scrollonhover/Scrollonhover.vue`),
  },
  {
    path: `/tippositioning`,
    name: 'tippositioning',
    component: () =>
      import(`@/views/javascript/tippositioning/Tippositioning.vue`),
  },
];

const routes = [...baseRoutes, ...componentsRoutes, ...javascriptRoutes];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
