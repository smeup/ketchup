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
  name: 'AutocompleteDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupAutocompleteClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteChange',
          type: 'change',
        },
        {
          name: 'kupAutocompleteInput',
          type: 'input',
        },
        {
          name: 'kupAutocompleteFocus',
          type: 'focus',
        },
        {
          name: 'kupAutocompleteBlur',
          type: 'blur',
        },
        {
          name: 'kupAutocompleteIconClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteItemClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteFilterChanged',
          type: 'customEvent',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
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
          prop: 'minimumChars',
          description:
            'The minimum number of chars to trigger the autocomplete.',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'selectMode',
          description:
            'Sets how the return the selected item value. Supported values: "code", "description", "both".',
          type: 'string',
          default: 'code',
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
      demoClasses: [
        {
          class: 'full-height',
          description:
            'The autocomplete will fill all the available vertical space.',
        },
        {
          class: 'kup-secondary-color',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'full-width',
          description:
            'The autocomplete will fill all the available horizontal space.',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-autocomplete');
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
  comp.minimumChars = '1';
  comp.selectMode = 'description';
  return comp;
}
</script>
