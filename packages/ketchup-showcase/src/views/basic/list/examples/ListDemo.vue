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
      demoComp: '<kup-list id="demo-component"></kup-list>',
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
          prop: 'displayMode',
          description:
            'Selects how the items must display their label and how they can be filtered for. Supported values: "description", "code", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'filter',
          description:
            'Keeps string for filtering elements when filter mode is active.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'isMenu',
          description: 'Defines whether the list is a menu or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'menuVisible',
          description:
            "Sets the status of the menu, when false it's hidden otherwise it's visible.",
          type: 'boolean',
          default: 'false',
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
          description: 'Defines whether items are selectable or not.',
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
        {
          prop: 'arrowDown',
          description:
            'Allows to execute arrow down operation on th list, from external component. Used in autocomplete field and combobox field.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'arrowUp',
          description:
            'Allows to execute arrow up operation on the list, from external component. Used in autocomplete field and combobox field.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showIcons',
          description: 'Allows to view an icon image for each list item',
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
      demoData: {
        data: [
          {
            text: 'First choice',
            value: '1',
            icon: 'add_alert',
            trailingIcon: true,
          },
          {
            text: 'Selected choice',
            value: '2',
            selected: true,
            icon: 'ac_unit',
          },
          {
            text: null,
            value: null,
            isSeparator: true,
          },
          {
            text: 'Third choice (below a separator)',
            value: '3',
            icon: '3d_rotation',
          },
        ],
        selectable: true,
      },
    };
  },
};
</script>
