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
          description: 'Identify the component',
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
          description: 'Defines if the list items ar or not selectable.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'twoLine',
          description:
            'The list elements descriptions will be arranged in two lines.',
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
      demoData: [
        {
          prop: 'data',
          value: [
            {
              text: 'First choice',
              value: '1',
            },
            {
              text: 'Selected choice',
              value: '2',
              selected: true,
            },
            {
              text: null,
              value: null,
              isSeparator: true,
            },
            {
              text: 'Third choice (below a separator)',
              value: '3',
            },
          ],
        },
        { prop: 'selectable', value: true },
        { prop: 'listId', value: 'LISTA' },
      ],
    };
  },
};
</script>
