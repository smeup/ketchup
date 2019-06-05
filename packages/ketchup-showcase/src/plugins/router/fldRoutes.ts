// Cannot use constant to be replaced at run time because webpack won't detect it and will not parse the component correct location.
export default [
  {
    path: `/fld/combo`,
    name: 'fldCombo',
    component: () => import(`@/views/fld/FldCombo.vue`),
  },
  {
    path: `/fld/radio`,
    name: 'fldRadio',
    component: () => import(`@/views/fld/FldRadio.vue`),
  },
  {
    path: `/fld/text-input`,
    name: 'fldText',
    component: () => import(`@/views/fld/FldTextInput.vue`),
  },
  {
    path: `/fld/graphic`,
    name: 'fldGraphic',
    component: () => import(`@/views/fld/FldGraphic.vue`),
  }
];
