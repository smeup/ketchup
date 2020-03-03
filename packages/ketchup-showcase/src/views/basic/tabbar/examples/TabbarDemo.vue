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
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'TabbarDemo',
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
      demoComp: '<wup-tab-bar id="demo-component"></wup-tab-bar>',
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
          description:
            'Object array containing the data of the tabs: text to be shown, optional icon and status (if active or not).',
          type: 'ComponentTabBarElement[]',
          default: '[]',
          try: 'json',
        },
      ],
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
      demoData: [
        {
          prop: 'data',
          value: [
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
          ],
        },
      ],
    };
  },
};
</script>
