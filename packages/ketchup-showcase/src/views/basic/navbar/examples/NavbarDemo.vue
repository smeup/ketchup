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
  name: 'CheckboxDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupNavbarMenuItemClick',
          type: 'click',
        },
        {
          name: 'kupNavbarOptionItemClick',
          type: 'change',
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
          description: 'The actual data of the nav bar.',
          type: 'ComponentNavBarData',
          default: "title: 'default title'",
          try: 'json',
        },
        {
          prop: 'mode',
          description:
            "Defines how the bar will be displayed. Available options: DEFAULT = '', SHORT = 'short', SHORT_COLLAPSED = 'short-collapsed', FIXED = 'fixed', PROMINENT = 'prominent', DENSE = 'dense',",
          type: 'ComponentNavBarMode',
          default: "''",
          try: 'field',
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
  let comp = document.createElement('kup-nav-bar');
  comp.customStyle = '#kup-component .mdc-top-app-bar { position: unset; }';
  comp.data = {
    title: 'Demo',
    menuActions: [{ icon: 'search', value: 'AA', text: 'Search AA' }],
    optionActions: [
      {
        icon: 'favorite',
        value: 'f',
        tooltip: 'Favorites',
        visible: true,
      },
      { icon: 'search', value: 's', tooltip: 'Search', visible: true },
    ],
  };
  comp.id = 'demo-component';
  comp.style.position = 'absolute';
  return comp;
}
</script>
