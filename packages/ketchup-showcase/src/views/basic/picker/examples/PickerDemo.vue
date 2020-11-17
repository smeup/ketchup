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
  name: 'PickerDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupPickerClick',
          type: 'click',
        },
        {
          name: 'kupPickerChange',
          type: 'change',
        },
        {
          name: 'kupPickerInput',
          type: 'input',
        },
        {
          name: 'kupPickerFocus',
          type: 'focus',
        },
        {
          name: 'kupPickerBlur',
          type: 'blur',
        },
        {
          name: 'kupPickerIconClick',
          type: 'click',
        },
        {
          name: 'kupPickerItemClick',
          type: 'click',
        },
        {
          name: 'kupPickerTextFieldSubmit',
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
          prop: 'minValue',
          description: 'The minimum value of the picker.',
          type: 'string',
          default: '1970-01-01',
          try: 'field',
        },
        {
          prop: 'maxValue',
          description: 'The maximum value of the picker.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'textfieldData',
          description:
            "Set of props related to the text field. To check the available props visit the Text Field basic component's page.",
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'value',
          description: 'The value of the picker.',
          type: 'string',
          default: '""',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-picker');
  comp.id = 'demo-component';
  return comp;
}
</script>
