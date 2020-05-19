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
  name: 'AutocompleteDemo',
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
        '<kup-autocomplete minimum-chars="1" select-mode="description" id="demo-component"></kup-autocomplete>',
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
          prop: 'listData',
          description:
            "Set of props related to the list. To check the available props visit the List basic component's page.",
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'minimumChars',
          description:
            'The minimum number of chars to trigger the autocomplete.',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'selectMode',
          description:
            'Sets how the return the selected item value. Supported values: "code", "description", "both".',
          type: 'string',
          default: 'code',
          try: 'field',
        },
        {
          prop: 'textfieldData',
          description:
            "Set of props related to the text field. To check the available props visit the Text Field basic component's page.",
          type: 'Object',
          default: '{}',
          try: 'json',
        },
      ],
      demoEvents: [
        {
          name: 'kupAutocompleteClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteChange',
          type: 'change',
        },
        {
          name: 'kupAutocompleteInput',
          type: 'input',
        },
        {
          name: 'kupAutocompleteFocus',
          type: 'focus',
        },
        {
          name: 'kupAutocompleteBlur',
          type: 'blur',
        },
        {
          name: 'kupAutocompleteIconClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteItemClick',
          type: 'click',
        },
        {
          name: 'kupAutocompleteFilterChanged',
          type: 'customEvent',
        },
      ],
      demoData: {
        textfieldData: {
          icon: 'arrow_drop_down',
          label: 'demo',
          trailingIcon: true,
        },
        listData: {
          data: [
            {
              text: 'First item',
              value: 'CODE_1',
            },
            {
              text: 'Second item',
              value: 'CODE_2',
            },
            {
              text: 'Third item',
              value: 'CODE_3',
            },
          ],
          displayMode: 'both',
          selectable: true,
        },
      },
    };
  },
};
</script>
