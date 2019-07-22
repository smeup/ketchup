export default [
  {
    path: '/chart/playground',
    name: 'chartPlayground',
    component: () => import('@/views/chart/ChartPlayground.vue'),
  },
  {
    path: '/chart/area',
    name: 'chartArea',
    component: () => import('@/views/chart/ChartArea.vue'),
  },
  {
    path: '/chart/bar',
    name: 'chartBar',
    component: () => import('@/views/chart/ChartBar.vue'),
  },
  {
    path: '/chart/bubble',
    name: 'chartBubble',
    component: () => import('@/views/chart/ChartBubble.vue'),
  },
  {
    path: '/chart/candlestick',
    name: 'chartCandlestick',
    component: () => import('@/views/chart/ChartCandlestick.vue'),
  },
  {
    path: '/chart/calendar',
    name: 'chartCalendar',
    component: () => import('@/views/chart/ChartCalendar.vue'),
  },
  {
    path: '/chart/column',
    name: 'chartColumn',
    component: () => import('@/views/chart/ChartColumn.vue'),
  },
  {
    path: '/chart/geo',
    name: 'chartGeo',
    component: () => import('@/views/chart/ChartGeo.vue'),
  },
  {
    path: '/chart/line',
    name: 'chartLine',
    component: () => import('@/views/chart/ChartLine.vue'),
  },
  {
    path: '/chart/pie',
    name: 'chartPie',
    component: () => import('@/views/chart/ChartPie.vue'),
  },
  {
    path: '/chart/sankey',
    name: 'chartSankey',
    component: () => import('@/views/chart/ChartSankey.vue'),
  },
  {
    path: '/chart/scatter',
    name: 'chartScatter',
    component: () => import('@/views/chart/ChartScatter.vue'),
  },
];
