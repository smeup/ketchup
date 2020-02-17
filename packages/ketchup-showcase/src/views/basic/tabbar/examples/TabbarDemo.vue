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
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
        {
          text: 'JSON',
          icon: '',
          status: '',
        },
      ],
      demoComp: '<wup-tab-bar id="demo-component"></wup-tab-bar>',
      demoProps: [
        {
          prop: 'items',
          description:
            'Object array containing the data of the tabs: text to be shown, optional icon and status (if active or not).',
          type: 'WidgetTabBarElement[]',
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
          name: 'kupTabBarChange',
          type: 'change',
        },
        {
          name: 'kupTabBarInput',
          type: 'input',
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
          prop: 'items',
          value: [
            {
              text: 'First',
              icon: 'filter_1',
              status: 'Active',
            },
            {
              text: 'Second',
              icon: 'filter_2',
              status: '',
            },
            {
              text: 'Third',
              icon: 'filter_3',
              status: '',
            },
            {
              text: 'Fourth',
              icon: 'filter_4',
              status: '',
            },
          ],
        },
      ],
    };
  },
};
</script>
