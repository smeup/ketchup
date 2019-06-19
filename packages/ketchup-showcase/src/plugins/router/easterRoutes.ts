export default [
  {
    path: `/cats`,
    name: 'cats',
    component: () => import(`@/views/easterEggs/BreathingCat.vue`),
  }
];