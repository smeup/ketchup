<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ComboboxDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupComboboxClick',
          type: 'click',
        },
        {
          name: 'kupComboboxChange',
          type: 'change',
        },
        {
          name: 'kupComboboxInput',
          type: 'input',
        },
        {
          name: 'kupComboboxFocus',
          type: 'focus',
        },
        {
          name: 'kupComboboxBlur',
          type: 'blur',
        },
        {
          name: 'kupComboboxIconClick',
          type: 'click',
        },
        {
          name: 'kupComboboxItemClick',
          type: 'click',
        },
        {
          name: 'kupComboboxTextFieldSubmit',
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
            'Defaults at false. When set to true, the component is disabled.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'displayMode',
          description:
            'Sets how the show the selected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'initialValue',
          description: 'Sets the initial value of the component.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'isSelect',
          description: 'Lets the combobox behave as a select element.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'selectMode',
          description:
            'Sets how the return the selected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
      ],
      demoClasses: [
        {
          class: 'full-height',
          description:
            'The combobox will fill all the available vertical space.',
        },
        {
          class: 'kup-secondary-color',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'full-width',
          description:
            'The combobox will fill all the available horizontal space.',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-combobox');
  comp.id = 'demo-component';
  comp.data = {
    'kup-list': {
      data: [
        {
          text: 'First item',
          value: 'CODE_1',
        },
        {
          text: 'Second item',
          value: 'CODE_2',
        },
        {
          text: 'Third item',
          value: 'CODE_3',
        },
      ],
      displayMode: 'both',
      selectable: true,
    },
    'kup-text-field': {
      label: 'Demo',
    },
  };
  comp.displayMode = 'description';
  comp.initialValue = 'First item';
  comp.selectMode = 'description';
  return comp;
}
</script>
