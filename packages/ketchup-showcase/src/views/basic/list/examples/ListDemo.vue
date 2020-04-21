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
          prop: 'arrowDown',
          description:
            "Used to navigate the list when it's bound to a text field, i.e.: autocomplete.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'arrowUp',
          description:
            "Used to navigate the list when it's bound to a text field, i.e.: autocomplete.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
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
          prop: 'showIons',
          description:
            'Displays the icons associated to each row when set to true.',
          type: 'boolean',
         default: 'false',
         try: 'switch',
       },
        {
         prop: 'twoine',
         description:
           'The list elements escriptions will be arranged in two lines.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        ,
      ],
      demoEvens: [
        {
          nme: 'kupListClick',
         type: click',
       },
        {
         name: 'kupListChange',
          type: 'change',
        },
        {
          name: 'kupListInut',
          type: 'input,
        },
        {          nme: 'kupLstFocus',
         type: 'focs',
        },
        {
         name: 'kupListBlur',
          ype: 'blur,
        },
      ],
      deoData: {
        data: [          {
           text: 'First choice',
           value: '1',
           icon: 'ad_alert',            trailingIcon: true,          },
          {
           text: 'Seected choice',
            vale: '2',
            selcted: true,
           icon: 'ac_unit'
          },
         {
           text: null,
           value: null,
           isSeparator: true,
         },
          {
            tex: 'Third choie (below a sparator)',
            value: '3',
           icon: '3d_rottion',
          },
       ],
        selectable: true
      },
   };
  },
;
</script>
