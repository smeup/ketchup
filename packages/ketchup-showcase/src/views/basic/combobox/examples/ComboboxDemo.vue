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
  name: 'ComboboxDemo',
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
        '<wup-combobox label="demo" id="demo-component"></wup-combobox>',
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
          prop: 'textfieldData',
          description:
            "Set of props related to the text field. To check the available props visit the Text Field basic component's page.",
          type: 'ComponentProps[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'listData',
          description:
            "Set of props related to the list. To check the available props visit the List basic component's page.",
          type: 'ComponentProps[]',
          default: '[]',
          try: 'json',
        },
      ],
      demoEvents: [
        {
          name: 'kupComboboxClick',
          type: 'click',
        },
        {
          name: 'kupComboboxChange',
          type: 'change',
        },
        {
          name: 'kupComboboxInput',
          type: 'input',
        },
        {
          name: 'kupComboboxFocus',
          type: 'focus',
        },
        {
          name: 'kupComboboxBlur',
          type: 'blur',
        },
        {
          name: 'kupComboboxIconClick',
          type: 'click',
        },
        {
          name: 'kupComboboxItemClick',
          type: 'click',
        },
      ],
      demoData: [
        {
          prop: 'textfieldData',
          value: [
            { prop: 'trailingIcon', value: true },
            { prop: 'icon', value: 'arrow_drop_down' },
            { prop: 'label', value: 'demo' },
          ],
        },
        {
          prop: 'listData',
          value: [
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
            { prop: 'selectable', value: 'one-select' },
            { prop: 'listId', value: 'LISTA' },
          ],
        },
      ],
    };
  },
};
</script>
