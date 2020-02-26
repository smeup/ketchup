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
  name: 'ChipDemo',
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
      demoComp: '<wup-chip id="demo-component"></wup-chip>',
      demoProps: [
        {
          prop: 'data',
          description:
            'Object array containing the data of the chips: value, icon, label to be shown and checked status.',
          type: 'ComponentChipElement[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
          try: 'css',
        },
        {
          prop: 'type',
          description:
            'The type of chip. Available types: input, filter, choice or empty for default.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupChipClick',
          type: 'click',
        },
        {
          name: 'kupChipFocus',
          type: 'focus',
        },
        {
          name: 'kupChipBlur',
          type: 'blur',
        },
        {
          name: 'kupChipIconClick',
          type: 'click',
        },
      ],
      demoData: [
        {
          prop: 'data',
          value: [
            {
              value: '1_chip',
              icon: 'filter_1',
              label: 'First chip',
              checked: false,
            },
            {
              value: '2_chip',
              icon: 'filter_2',
              label: 'Second chip',
              checked: true,
            },
            {
              value: '3_chip',
              icon: 'filter_3',
              label: 'Third chip',
              checked: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
