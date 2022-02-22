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
  name: 'ChipDemo',
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
          name: 'kup-chip-click',
          type: 'click',
        },
        {
          name: 'kup-chip-focus',
          type: 'focus',
        },
        {
          name: 'kup-chip-blur',
          type: 'blur',
        },
        {
          name: 'kup-chip-iconclick',
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
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description:
            'Object array containing the data of the chips: value, icon, label, title to be shown and checked status.',
          type: 'KupChipNode',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'type',
          description:
            'The type of chip. Available types: input, filter, choice or empty for default.',
          type: 'FChipType',
          default: 'standard',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-chip');
  comp.data = [
    {
      children: [
        {
          icon: 'filter_1',
          id: '1a',
          value: 'First',
        },
        {
          icon: 'filter_2',
          id: '1b',
          value: 'Second',
        },
      ],
      icon: 'widgets',
      id: '1',
      value: 'Chips with icons',
    },
    {
      children: [
        {
          id: '2a',
          value: 'First',
        },
        {
          id: '2b',
          value: 'Second',
        },
      ],
      id: '2',
      value: 'Chips without icons',
    },
  ];
  comp.id = 'demo-component';
  comp.type = 'standard';
  return comp;
}
</script>
