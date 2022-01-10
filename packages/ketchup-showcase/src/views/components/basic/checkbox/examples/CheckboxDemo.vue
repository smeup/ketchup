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
  name: 'CheckboxDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app (needs a new render to be effective).',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app (needs a new render to be effective).',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-checkbox-change',
          type: 'change',
        },
        {
          name: 'kup-checkbox-focus',
          type: 'focus',
        },
        {
          name: 'kup-checkbox-blur',
          type: 'blur',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'checked',
          description: 'Sets the component to checked state.',
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
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'indeterminate',
          description: 'Sets the component to an indeterminate state.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'label',
          description: 'Displays a label.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'leadingLabel',
          description:
            'The label will be displayed to the left of the component.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-checkbox');
  comp.id = 'demo-component';
  comp.label = 'Demo';
  return comp;
}
</script>
