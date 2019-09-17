export default [
  {
    path: '/calendar/basic',
    name: 'calendarBasic',
    component: () => import('@/views/calendar/CalendarBasic.vue'),
  },
  {
    path: '/calendar/events',
    name: 'calendarEvents',
    component: () => import('@/views/calendar/CalendarEvents.vue'),
  },
  {
    path: '/calendar/iconImages',
    name: 'calendarIcons',
    component: () => import('@/views/calendar/CalendarIcons.vue'),
  },
  {
    path: '/calendar/style',
    name: 'calendarStyle',
    component: () => import('@/views/calendar/CalendarStyle.vue'),
  },
];
