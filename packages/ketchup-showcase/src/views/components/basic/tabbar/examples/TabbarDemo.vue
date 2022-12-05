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
  name: 'TabbarDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
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
          name: 'kup-tabbar-click',
          type: 'click',
        },
        {
          name: 'kup-tabbar-focus',
          type: 'focus',
        },
        {
          name: 'kup-tabbar-blur',
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
          name: 'getSelectedNode',
          description: 'Returns the selected node.',
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
            'Object array containing the data of the tabs: text to be shown, optional icon and status (if active or not).',
          type: 'KupTabBarNode',
          isArray: true,
          default: 'null',
          try: 'json',
        },
        {
          prop: 'ripple',
          description:
            "When enabled displays Material's ripple effect on tabs.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-tab-bar');
  comp.data = [
    {
      active: true,
      icon: 'filter_1',
      id: 'First',
      value: 'First',
    },
    {
      icon: 'filter_2',
      id: 'Second',
      value: 'Second',
    },
    {
      icon: 'filter_3',
      id: 'Third',
      value: 'Third',
    },
    {
      icon: 'filter_4',
      id: 'Fourth',
      value: 'Fourth',
    },
  ];
  comp.id = 'demo-component';
  return comp;
}
</script>
