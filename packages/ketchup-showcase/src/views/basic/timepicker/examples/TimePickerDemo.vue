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
  name: 'TimePickerDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupTimePickerClick',
          type: 'click',
        },
        {
          name: 'kupTimePickerChange',
          type: 'change',
        },
        {
          name: 'kupTimePickerInput',
          type: 'input',
        },
        {
          name: 'kupTimePickerFocus',
          type: 'focus',
        },
        {
          name: 'kupTimePickerBlur',
          type: 'blur',
        },
        {
          name: 'kupTimePickerIconClick',
          type: 'click',
        },
        {
          name: 'kupTimePickerItemClick',
          type: 'click',
        },
        {
          name: 'kupTimePickerTextFieldSubmit',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'clockVariant',
          description:
            'When set to true, the drop down menu will display a clock.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
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
          description:
            "Set of props related to the text field. To check the available props visit the Text Field basic component's page.",
          type: 'Object',
          default: '{"text-field":{}}',
          try: 'json',
        },
        {
          prop: 'manageSeconds',
          description: 'Flag for set managing seconds too.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'timeMinutesStep',
          description: 'The minutes step for values of the time picker.',
          type: 'number',
          default: '10',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-time-picker');
  comp.id = 'demo-component';
  return comp;
}
</script>
