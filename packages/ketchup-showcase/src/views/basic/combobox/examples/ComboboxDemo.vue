<template>
  <div>
    <demo :demoComp="demoComp" :demoEvents="demoEvents" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
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
          prop: 'isSelect',
          description: 'Lets the combobox behave as a select element.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'listData',
          description:
            "Set of props related to the list. To check the available props visit the List basic component's page.",
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'selectMode',
          description:
            'Sets how the return the elected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
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
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
        {
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-combobox');
  comp.id = 'demo-component';
  comp.label = 'Demo';
  comp.listData = {
    data: [
      {
        text: 'First choice',
        value: '1',
      },
      {
        text: 'Selected choice',
        value: '2',
        selected: true,
      },
      {
        text: null,
        value: null,
        isSeparator: true,
      },
      {
        text: 'Third choice (below a separator)',
        value: '3',
      },
    ],
    displayMode: 'both',
    selectable: true,
  };
  comp.selectMode = 'description';
  comp.textfieldData = {
    icon: 'arrow_drop_down',
    label: 'demo',
    trailingIcon: true,
  };
  return comp;
}
</script>
