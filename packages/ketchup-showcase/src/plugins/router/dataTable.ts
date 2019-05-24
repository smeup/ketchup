export default [
  {
    path: '/dataTable/basic',
    name: 'dtBasic',
    component: () => import('@/views/dataTable/DTBasic.vue'),
  },
  {
    path: '/dataTable/filters',
    name: 'dtFilters',
    component: () => import('@/views/dataTable/DTFilters.vue'),
  },
  {
    path: '/dataTable/pagination',
    name: 'dtPag',
    component: () => import('@/views/dataTable/DTPagination.vue'),
  },
  {
    path: '/dataTable/rowSelection',
    name: 'dtRowSel',
    component: () => import('@/views/dataTable/DTRowSelection.vue'),
  },
  {
    path: '/dataTable/sorting',
    name: 'dtSort',
    component: () => import('@/views/dataTable/DTSort.vue'),
  },
  {
    path: '/dataTable/totals',
    name: 'dtTotals',
    component: () => import('@/views/dataTable/DTTotal.vue'),
  },
];
