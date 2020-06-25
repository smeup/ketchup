<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
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
      demoComp:
        '<kup-nav-bar style="position: absolute;" id="demo-component"></kup-nav-bar>',
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
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
      demoData: {
        customStyle: '#kup-component .mdc-top-app-bar { position: unset; }',
        data: {
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
        },
      },
    };
  },
};
</script>
