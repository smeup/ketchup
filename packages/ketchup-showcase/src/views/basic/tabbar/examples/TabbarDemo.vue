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
  name: 'TabbarDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupTabBarClick',
          type: 'click',
        },
        {
          name: 'kupTabBarFocus',
          type: 'focus',
        },
        {
          name: 'kupTabBarBlur',
          type: 'blur',
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
          type: 'ComponentTabBarElement[]',
          default: '[]',
          try: 'json',
        },
      ],
      demoClasses: [
        {
          class: 'kup-secondary-color',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-tab-bar');
  comp.data = [
    {
      text: 'First',
      icon: 'filter_1',
      active: true,
    },
    {
      text: 'Second',
      icon: 'filter_2',
      active: false,
    },
    {
      text: 'Third',
      icon: 'filter_3',
      active: false,
    },
    {
      text: 'Fourth',
      icon: 'filter_4',
      active: false,
    },
  ];
  comp.id = 'demo-component';
  return comp;
}
</script>
