import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const basicRoutes = [
  {
    path: `/accordion`,
    name: 'accordion',
    component: () => import(`@/views/components/basic/accordion/Accordion.vue`),
  },
  {
    path: `/autocomplete`,
    name: 'autocomplete',
    component: () =>
      import(`@/views/components/basic/autocomplete/Autocomplete.vue`),
  },
  {
    path: `/badge`,
    name: 'badge',
    component: () => import(`@/views/components/basic/badge/Badge.vue`),
  },
  {
    path: `/button`,
    name: 'button',
    component: () => import(`@/views/components/basic/button/Button.vue`),
  },
  {
    path: `/checkbox`,
    name: 'checkbox',
    component: () => import(`@/views/components/basic/checkbox/Checkbox.vue`),
  },
  {
    path: `/chip`,
    name: 'chip',
    component: () => import(`@/views/components/basic/chip/Chip.vue`),
  },
  {
    path: `/colorpicker`,
    name: 'colorpicker',
    component: () =>
      import(`@/views/components/basic/colorpicker/ColorPicker.vue`),
  },
  {
    path: `/combobox`,
    name: 'combobox',
    component: () => import(`@/views/components/basic/combobox/Combobox.vue`),
  },
  {
    path: `/drawer`,
    name: 'drawer',
    component: () => import(`@/views/components/basic/drawer/Drawer.vue`),
  },
  {
    path: `/datepicker`,
    name: 'datepicker',
    component: () =>
      import(`@/views/components/basic/datepicker/DatePicker.vue`),
  },
  {
    path: `/dropdownbutton`,
    name: 'dropdownbutton',
    component: () =>
      import(`@/views/components/basic/dropdownbutton/DropdownButton.vue`),
  },
  {
    path: `/gauge`,
    name: 'gauge',
    component: () => import(`@/views/components/basic/gauge/Gauge.vue`),
  },
  {
    path: `/grid`,
    name: 'grid',
    component: () => import(`@/views/components/basic/grid/Grid.vue`),
  },
  {
    path: `/iframe`,
    name: 'iframe',
    component: () => import(`@/views/components/basic/iframe/Iframe.vue`),
  },
  {
    path: `/image`,
    name: 'image',
    component: () => import(`@/views/components/basic/image/Image.vue`),
  },
  {
    path: `/lazy`,
    name: 'lazy',
    component: () => import(`@/views/components/basic/lazy/Lazy.vue`),
  },
  {
    path: `/list`,
    name: 'list',
    component: () => import(`@/views/components/basic/list/List.vue`),
  },
  {
    path: `/navbar`,
    name: 'navbar',
    component: () => import(`@/views/components/basic/navbar/Navbar.vue`),
  },
  {
    path: `/numericpicker`,
    name: 'numericpicker',
    component: () =>
      import(`@/views/components/basic/numericpicker/NumericPicker.vue`),
  },
  {
    path: `/progressbar`,
    name: 'progressbar',
    component: () =>
      import(`@/views/components/basic/progressbar/Progressbar.vue`),
  },
  {
    path: `/radio`,
    name: 'radio',
    component: () => import(`@/views/components/basic/radio/Radio.vue`),
  },
  {
    path: `/rating`,
    name: 'rating',
    component: () => import(`@/views/components/basic/rating/Rating.vue`),
  },
  {
    path: `/snackbar`,
    name: 'snackbar',
    component: () => import(`@/views/components/basic/snackbar/Snackbar.vue`),
  },
  {
    path: `/spinner`,
    name: 'spinner',
    component: () => import(`@/views/components/basic/spinner/Spinner.vue`),
  },
  {
    path: `/switch`,
    name: 'switch',
    component: () => import(`@/views/components/basic/switch/Switch.vue`),
  },
  {
    path: `/tabbar`,
    name: 'tabbar',
    component: () => import(`@/views/components/basic/tabbar/Tabbar.vue`),
  },
  {
    path: `/textfield`,
    name: 'textfield',
    component: () => import(`@/views/components/basic/textfield/Textfield.vue`),
  },
  {
    path: `/timepicker`,
    name: 'timepicker',
    component: () =>
      import(`@/views/components/basic/timepicker/TimePicker.vue`),
  },
];

const advancedRoutes = [
  {
    path: `/box`,
    name: 'box',
    component: () => import(`@/views/components/advanced/box/Box.vue`),
  },
  {
    path: `/buttonlist`,
    name: 'buttonlist',
    component: () =>
      import(`@/views/components/advanced/buttonlist/Buttonlist.vue`),
  },
  {
    path: `/calendar`,
    name: 'calendar',
    component: () =>
      import(`@/views/components/advanced/calendar/Calendar.vue`),
  },
  {
    path: `/card`,
    name: 'card',
    component: () => import(`@/views/components/advanced/card/Card.vue`),
  },
  {
    path: `/cell`,
    name: 'cell',
    component: () => import(`@/views/components/advanced/cell/Cell.vue`),
  },
  {
    path: `/chart`,
    name: 'chart',
    component: () => import(`@/views/components/advanced/chart/Chart.vue`),
  },
  {
    path: `/dash`,
    name: 'dash',
    component: () => import(`@/views/components/advanced/dash/Dash.vue`),
  },
  {
    path: `/dashlist`,
    name: 'dashlist',
    component: () =>
      import(`@/views/components/advanced/dashlist/DashList.vue`),
  },
  {
    path: `/dashboard`,
    name: 'dashboard',
    component: () =>
      import(`@/views/components/advanced/dashboard/Dashboard.vue`),
  },
  {
    path: `/datatable`,
    name: 'datatable',
    component: () =>
      import(`@/views/components/advanced/datatable/Datatable.vue`),
  },
  {
    path: `/echart`,
    name: 'echart',
    component: () => import(`@/views/components/advanced/echart/Echart.vue`),
  },
  {
    path: `/familytree`,
    name: 'familytree',
    component: () =>
      import(`@/views/components/advanced/familytree/FamilyTree.vue`),
  },
  {
    path: `/form`,
    name: 'form',
    component: () => import(`@/views/components/advanced/form/Form.vue`),
  },
  {
    path: `/imagelist`,
    name: 'imagelist',
    component: () =>
      import(`@/views/components/advanced/imagelist/ImageList.vue`),
  },
  {
    path: `/tree`,
    name: 'tree',
    component: () => import(`@/views/components/advanced/tree/Tree.vue`),
  },
];

const thirdPartiesRoutes = [
  {
    path: `/qlik`,
    name: 'qlik',
    component: () => import(`@/views/components/third-parties/qlik/Qlik.vue`),
  },
];

const guidesRoutes = [
  {
    path: `/customization`,
    name: 'customization',
    component: () => import(`@/views/guides/customization/Customization.vue`),
  },
];

const frameworkRoutes = [
  {
    path: `/kup-data`,
    name: 'kup-data',
    component: () => import(`@/views/framework/kup-data/KupData.vue`),
  },
  {
    path: `/kup-dates`,
    name: 'kup-dates',
    component: () => import(`@/views/framework/kup-dates/KupDates.vue`),
  },
  {
    path: `/kup-debug`,
    name: 'kup-debug',
    component: () => import(`@/views/framework/kup-debug/KupDebug.vue`),
  },
  {
    path: `/kup-dynamic-position`,
    name: 'kup-dynamic-position',
    component: () =>
      import(`@/views/framework/kup-dynamic-position/KupDynamicPosition.vue`),
  },
  {
    path: `/kup-interact`,
    name: 'kup-interact',
    component: () => import(`@/views/framework/kup-interact/KupInteract.vue`),
  },
  {
    path: `/kup-language`,
    name: 'kup-language',
    component: () => import(`@/views/framework/kup-language/KupLanguage.vue`),
  },
  {
    path: `/kup-manager`,
    name: 'kup-manager',
    component: () => import(`@/views/framework/kup-manager/KupManager.vue`),
  },
  {
    path: `/kup-math`,
    name: 'kup-math',
    component: () => import(`@/views/framework/kup-math/KupMath.vue`),
  },
  {
    path: `/kup-objects`,
    name: 'kup-objects',
    component: () => import(`@/views/framework/kup-objects/KupObjects.vue`),
  },
  {
    path: `/kup-search`,
    name: 'kup-search',
    component: () => import(`@/views/framework/kup-search/KupSearch.vue`),
  },
  {
    path: `/kup-scroll-on-hover`,
    name: 'kup-scroll-on-hover',
    component: () =>
      import(`@/views/framework/kup-scroll-on-hover/KupScrollOnHover.vue`),
  },
  {
    path: `/kup-theme`,
    name: 'kup-theme',
    component: () => import(`@/views/framework/kup-theme/KupTheme.vue`),
  },
  {
    path: `/kup-toolbar`,
    name: 'kup-toolbar',
    component: () => import(`@/views/framework/kup-toolbar/KupToolbar.vue`),
  },
  {
    path: `/kup-tooltip`,
    name: 'kup-tooltip',
    component: () => import(`@/views/framework/kup-tooltip/KupTooltip.vue`),
  },
];

const routes = [
  ...baseRoutes,
  ...advancedRoutes,
  ...basicRoutes,
  ...thirdPartiesRoutes,
  ...guidesRoutes,
  ...frameworkRoutes,
];

export default new Router({
  // If you want to activate the history mode, remember to follow the instructions regarding publicPath prop
  // inside vue.config.js which holds the configuration for Webpack
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
