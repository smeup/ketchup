export default [
  {
    path: '/dataTable/basic',
    component: () => import('@/views/dataTable/DTBasic.vue'),
  },
  {
    path: '/dataTable/filters',
    component: () => import('@/views/dataTable/DTFilters.vue'),
  },
  {
    path: '/dataTable/pagination',
    component: () => import('@/views/dataTable/DTPagination.vue'),
  },
  {
    path: '/dataTable/sorting',
    component: () => import('@/views/dataTable/DTSort.vue'),
  },
];
