<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ListDemo',
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
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
      demoComp: '<wup-list id="demo-component"></wup-list>',
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
          description: 'The data of the list.',
          type: 'ComponentListElement',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'isFilterable',
          description:
            'Marks the list as filterable, allowing an input text to filter the options.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'listId',
          description: '?',
          type: 'boolean',
          default: 'WupList-myId',
          try: 'switch',
        },
        {
          prop: 'roleType',
          description:
            'Defines the type of selection. Values accepted: listbox, radiogroup or group.',
          type: 'string',
          default: 'listbox',
          try: 'field',
        },
        {
          prop: 'selectable',
          description:
            'Defines how many elements are selectable. Values accepted: no-select, one-select or multi-select.',
          type: 'string',
          default: 'no-select',
          try: 'field',
        },
        {
          prop: 'twoLine',
          description:
            "The list elements' descriptions will be arranged in two lines.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoEvents: [
        {
          name: 'kupListClick',
          type: 'click',
        },
        {
          name: 'kupListChange',
          type: 'change',
        },
        {
          name: 'kupListInput',
          type: 'input',
        },
        {
          name: 'kupListFocus',
          type: 'focus',
        },
        {
          name: 'kupListBlur',
          type: 'blur',
        },
      ],
    };
  },
};
</script>
