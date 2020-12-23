<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'DatePickerDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupDatePickerClick',
          type: 'click',
        },
        {
          name: 'kupDatePickerChange',
          type: 'change',
        },
        {
          name: 'kupDatePickerInput',
          type: 'input',
        },
        {
          name: 'kupDatePickerFocus',
          type: 'focus',
        },
        {
          name: 'kupDatePickerBlur',
          type: 'blur',
        },
        {
          name: 'kupDatePickerIconClick',
          type: 'click',
        },
        {
          name: 'kupDatePickerItemClick',
          type: 'click',
        },
        {
          name: 'kupDatePickerTextFieldSubmit',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'Props of the sub-components.',
          type: 'Object',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'firstDayIndex',
          description:
            'The initial day index for calendar (0 - Sunday, 1 - Monday, ...) .',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'initialValue',
          description: 'Sets the initial value of the component.',
          type: 'string',
          default: '""',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-date-picker');
  comp.id = 'demo-component';
  return comp;
}
</script>
