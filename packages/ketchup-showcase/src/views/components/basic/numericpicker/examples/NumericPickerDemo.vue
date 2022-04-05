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
  name: 'NumericPickerDemo',
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
            'The color picker will fill all the available vertical space (needs a new render to be effective).',
        },
        {
          class: 'kup-full-width',
          description:
            'The color picker will fill all the available horizontal space (needs a new render to be effective).',
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
          name: 'kup-numericpicker-click',
          type: 'click',
        },
        {
          name: 'kup-numericpicker-change',
          type: 'change',
        },
        {
          name: 'kup-numericpicker-cleariconclick',
          type: 'click',
        },
        {
          name: 'kup-numericpicker-input',
          type: 'input',
        },
        {
          name: 'kup-numericpicker-focus',
          type: 'focus',
        },
        {
          name: 'kup-numericpicker-blur',
          type: 'blur',
        },
        {
          name: 'kup-numericpicker-iconclick',
          type: 'click',
        },
        {
          name: 'kup-numericpicker-itemclick',
          type: 'click',
        },
        {
          name: 'kup-numericpicker-textfieldsubmit',
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
          description: "Retrieves the component's value.",
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
          description: "Sets the component's value.",
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
          prop: 'decimals',
          description: 'Sets the component to use decimals.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
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
          prop: 'initialValue',
          description: 'Sets the initial value of the component.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'maxDecimals',
          description: 'Sets the component max decimals to given characters.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'maxIntegers',
          description: 'Sets the component max integers to given characters.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'maxLength',
          description:
            'Sets the component max length to given characters (integers + decimals).',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'negative',
          description: 'Sets the component to use negative numbers.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-numeric-picker');
  comp.id = 'demo-component';
  comp.data = {
    'kup-text-field': {
      label: 'Demo',
    },
  };
  return comp;
}
</script>
