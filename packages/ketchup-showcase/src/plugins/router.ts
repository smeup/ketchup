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

let basicRoutes = [
  {
    path: `/autocomplete`,
    name: 'autocomplete',
    component: () => import(`@/views/basic/autocomplete/Autocomplete.vue`),
  },
  {
    path: `/badge`,
    name: 'badge',
    component: () => import(`@/views/basic/badge/Badge.vue`),
  },
  {
    path: `/button`,
    name: 'button',
    component: () => import(`@/views/basic/button/Button.vue`),
  },
  {
    path: `/checkbox`,
    name: 'checkbox',
    component: () => import(`@/views/basic/checkbox/Checkbox.vue`),
  },
  {
    path: `/chip`,
    name: 'chip',
    component: () => import(`@/views/basic/chip/Chip.vue`),
  },
  {
    path: `/combobox`,
    name: 'combobox',
    component: () => import(`@/views/basic/combobox/Combobox.vue`),
  },
  {
    path: `/grid`,
    name: 'grid',
    component: () => import(`@/views/basic/grid/Grid.vue`),
  },
  {
    path: `/iframe`,
    name: 'iframe',
    component: () => import(`@/views/basic/iframe/Iframe.vue`),
  },
  {
    path: `/image`,
    name: 'image',
    component: () => import(`@/views/basic/image/Image.vue`),
  },
  {
    path: `/lazy`,
    name: 'lazy',
    component: () => import(`@/views/basic/lazy/Lazy.vue`),
  },
  {
    path: `/list`,
    name: 'list',
    component: () => import(`@/views/basic/list/List.vue`),
  },
  {
    path: `/navbar`,
    name: 'navbar',
    component: () => import(`@/views/basic/navbar/Navbar.vue`),
  },
  {
    path: `/progressbar`,
    name: 'progressbar',
    component: () => import(`@/views/basic/progressbar/Progressbar.vue`),
  },
  {
    path: `/radio`,
    name: 'radio',
    component: () => import(`@/views/basic/radio/Radio.vue`),
  },
  {
    path: `/spinner`,
    name: 'spinner',
    component: () => import(`@/views/basic/spinner/Spinner.vue`),
  },
  {
    path: `/switch`,
    name: 'switch',
    component: () => import(`@/views/basic/switch/Switch.vue`),
  },
  {
    path: `/tabbar`,
    name: 'tabbar',
    component: () => import(`@/views/basic/tabbar/Tabbar.vue`),
  },
  {
    path: `/textfield`,
    name: 'textfield',
    component: () => import(`@/views/basic/textfield/Textfield.vue`),
  },
];

let advancedRoutes = [
  {
    path: `/box`,
    name: 'box',
    component: () => import(`@/views/advanced/box/Box.vue`),
  },
  {
    path: `/btn`,
    name: 'btn',
    component: () => import(`@/views/advanced/button/Button.vue`),
  },
  {
    path: `/calendar`,
    name: 'calendar',
    component: () => import(`@/views/advanced/calendar/Calendar.vue`),
  },
  {
    path: `/card`,
    name: 'card',
    component: () => import(`@/views/advanced/card/Card.vue`),
  },
  {
    path: `/chart`,
    name: 'chart',
    component: () => import(`@/views/advanced/chart/Chart.vue`),
  },
  {
    path: `/crud`,
    name: 'crud',
    component: () => import(`@/views/advanced/crud/Crud.vue`),
  },
  {
    path: `/dash`,
    name: 'dash',
    component: () => import(`@/views/advanced/dash/Dash.vue`),
  },
  {
    path: `/datatable`,
    name: 'datatable',
    component: () => import(`@/views/advanced/datatable/Datatable.vue`),
  },
  {
    path: `/field`,
    name: 'field',
    component: () => import(`@/views/advanced/field/Field.vue`),
  },
  {
    path: `/form`,
    name: 'form',
    component: () => import(`@/views/advanced/form/Form.vue`),
  },
  {
    path: `/imagebutton`,
    name: 'imagebutton',
    component: () => import(`@/views/advanced/imagebutton/Imagebutton.vue`),
  },
  {
    path: `/menu`,
    name: 'menu',
    component: () => import(`@/views/advanced/menu/Menu.vue`),
  },
  {
    path: `/search`,
    name: 'search',
    component: () => import(`@/views/advanced/search/Search.vue`),
  },
  {
    path: `/tooltip`,
    name: 'tooltip',
    component: () => import(`@/views/advanced/tooltip/Tooltip.vue`),
  },
  {
    path: `/tree`,
    name: 'tree',
    component: () => import(`@/views/advanced/tree/Tree.vue`),
  },
];

let cssRoutes = [
  {
    path: `/customization`,
    name: 'customization',
    component: () => import(`@/views/css/customization/Customization.vue`),
  },
  {
    path: `/theming`,
    name: 'theming',
    component: () => import(`@/views/css/theming/Theming.vue`),
  },
];

let javascriptRoutes = [
  {
    path: `/errorlogging`,
    name: 'errorlogging',
    component: () => import(`@/views/javascript/errorlogging/Errorlogging.vue`),
  },
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

const routes = [
  ...baseRoutes,
  ...advancedRoutes,
  ...cssRoutes,
  ...javascriptRoutes,
  ...basicRoutes,
];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
