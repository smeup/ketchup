// Cannot use constant to be replaced at run time because webpack won't detect it and will not parse the component correct location.
export default [
  {
    path: `@/views/fld/combo`,
    name: 'fldCombo',
    component: () => import(`@/views/fld/FldCombo.vue`),
  },
  {
    path: `@/views/fld/radio`,
    name: 'fldRadio',
    component: () => import(`@/views/fld/FldRadio.vue`),
  },
  {
    path: `@/views/fld/text-input`,
    name: 'fldText',
    component: () => import(`@/views/fld/FldTextInput.vue`),
  },
  {
    path: `@/views/fld/graphic`,
    name: 'fldGraphic',
    component: () => import(`@/views/fld/FldGraphic.vue`),
  }
];
