<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    >
    </demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
export default {
  components: {
    Demo,
  },
  name: 'ImageListDemo',

  data() {
    return {
      demoClasses: [
        {
          class: 'kup-auto-grid',
          description:
            'The image list will attempt to automatically create a grid using the available space, without the need to specify columns.',
        },
        {
          class: 'kup-full-height',
          description:
            'The image list will fill all the available vertical space.',
        },
        {
          class: 'kup-full-width',
          description:
            'The image list will fill all the available horizontal space.',
        },
        {
          class: 'kup-horizontal',
          description: 'Arranges all the items in a single row.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-imagelist-click',
          type: 'mouse',
        },
        {
          name: 'kup-imagelist-contextmenu',
          type: 'mouse',
        },
        {
          name: 'kup-imagelist-dblclick',
          type: 'mouse',
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
          description: 'Actual data of the component',
          type: 'KupDataNode',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'ripple',
          description:
            "When enabled displays Material's ripple effect on clicked items.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'refresh',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-image-list');
  comp.id = 'demo-component';
  comp.ripple = true;
  comp.style.setProperty('--kup-imagelist-columns', '1');
  comp.style.setProperty('--kup-imagelist-item-height', '140px');
  comp.style.setProperty('--kup-imagelist-item-width', '140px');
  comp.data = [
    {
      children: [
        {
          children: [
            {
              icon: 'images/catz_small.jpg',
              id: '1aa',
              value: 'Cats',
            },
          ],
          icon: 'photo_library',
          id: '1a',
          value: 'Photos',
        },
        {
          children: [
            {
              icon: 'notifications_active',
              id: '1ba',
              value: 'Notifications',
            },
            {
              icon: 'network_wifi',
              id: '1bb',
              value: 'Connection',
            },
            {
              icon: 'language',
              id: '1bc',
              value: 'Language',
            },
          ],
          icon: 'settings',
          id: '1b',
          value: 'Settings',
        },
      ],
      icon: 'menu',
      id: '1',
      value: 'Menu',
    },
  ];
  return comp;
}
</script>
