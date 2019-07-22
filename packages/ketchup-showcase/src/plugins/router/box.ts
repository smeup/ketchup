export default [
  {
    path: '/box/basic',
    name: 'boxBasic',
    component: () => import('@/views/box/BoxBasic.vue'),
  },
  {
    path: '/box/buttons',
    name: 'boxButtons',
    component: () => import('@/views/box/BoxButtons.vue'),
  },
  {
    path: '/box/boxSelection',
    name: 'boxSel',
    component: () => import('@/views/box/BoxSel.vue'),
  },
  {
    path: '/box/classes',
    name: 'boxClasses',
    component: () => import('@/views/box/BoxClasses.vue'),
  },
  {
    path: '/box/filter',
    name: 'boxFilter',
    component: () => import('@/views/box/BoxFilter.vue'),
  },
  {
    path: '/box/layout',
    name: 'boxLayout',
    component: () => import('@/views/box/BoxLayout.vue'),
  },
  {
    path: '/box/sort',
    name: 'boxSort',
    component: () => import('@/views/box/BoxSort.vue'),
  },
];
