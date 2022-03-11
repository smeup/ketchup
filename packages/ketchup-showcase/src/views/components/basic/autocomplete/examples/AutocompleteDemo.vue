<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'AutocompleteDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-full-height',
          description:
            'The autocomplete will fill all the available vertical space (needs a new render to be effective).',
        },
        {
          class: 'kup-full-width',
          description:
            'The autocomplete will fill all the available horizontal space (needs a new render to be effective).',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app.',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-autocomplete-click',
          type: 'click',
        },
        {
          name: 'kup-autocomplete-change',
          type: 'change',
        },
        {
          name: 'kup-autocomplete-input',
          type: 'input',
        },
        {
          name: 'kup-autocomplete-focus',
          type: 'focus',
        },
        {
          name: 'kup-autocomplete-blur',
          type: 'blur',
        },
        {
          name: 'kup-autocomplete-iconclick',
          type: 'click',
        },
        {
          name: 'kup-autocomplete-itemclick',
          type: 'click',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'getValue',
          description: 'Used to retrieve the value of the component.',
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setFocus',
          description: 'Sets the focus to the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
        {
          name: 'setValue',
          description: 'Sets the value of the component.',
        },
      ],
      demoProps: [
        {
          prop: 'allowInconsistentValues',
          description:
            "When true, the autocomplete fires the change event even when the value typed isn't included in the autocomplete list.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
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
            'Sets how to show the selected item value. Suported values: "code", "description", "both".',
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
          prop: 'inputDelay',
          description: 'Input event emission delay in milliseconds.',
          type: 'number',
          default: '300',
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
            'Sets how to return the selected item value. Supported values: "code", "description", "both".',
          type: 'string',
          default: 'code',
          try: 'field',
        },
        {
          prop: 'serverHandledFilter',
          description:
            'When true, the items filter is managed server side, otherwise items filter is done client side.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showDropDownIcon',
          description: 'When true shows the drop-down icon, for open list.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
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
          value: 'First item',
          id: 'CODE_1',
        },
        {
          value: 'Second item',
          id: 'CODE_2',
        },
        {
          value: 'Third item',
          id: 'CODE_3',
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
