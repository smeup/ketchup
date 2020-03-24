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
  name: 'FieldDemo',
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
      demoComp: '<kup-fld type="rad" id="demo-component"></kup-fld>',
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
            'The actual data passed to the component, including its props.',
          type: 'any',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'label',
          description:
            'The text of the label. If set to empty or has only white space chars, the label will be removed.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'labelPos',
          description: "Sets the label's position, left right or top.",
          type: 'string',
          default: 'left',
          try: 'field',
        },
        {
          prop: 'showSubmit',
          description:
            'Sets whether the submit button must be displayed or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'submitLabel',
          description: "Sets the submit button's label.",
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'submitPos',
          description:
            "Sets the submit button's position, top right bottom or left.",
          type: 'string',
          default: 'right',
          try: 'field',
        },
        {
          prop: 'type',
          description:
            'The type of the component. Currently suppoted values: cmb (combobox), itx (text field), rad (radio).',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupFldChange',
          type: 'CustomEvent',
        },
        {
          name: 'kupFldSubmit',
          type: 'CustomEvent',
        },
      ],
      demoData: [
        {
          prop: 'dataRAD',
          value: [
            {
              prop: 'data',
              value: [
                {
                  value: '1',
                  label: 'First',
                  checked: false,
                },
                {
                  value: '2',
                  label: 'Second',
                  checked: false,
                },
                {
                  value: '3',
                  label: 'Third',
                  checked: true,
                },
                {
                  value: '4',
                  label: 'Fourth',
                  checked: false,
                },
                {
                  value: '5',
                  label: 'Fifth',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          prop: 'dataITX',
          value: [
            { prop: 'icon', value: 'widgets' },
            { prop: 'label', value: 'demo' },
          ],
        },
        {
          prop: 'dataCMB',
          value: [
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
                      selected: true,
                    },
                    {
                      text: 'Selected choice',
                      value: '2',
                    },
                    {
                      text: 'Third choice',
                      value: '3',
                    },
                  ],
                },
                { prop: 'selectable', value: 'one-select' },
                { prop: 'listId', value: 'LISTA' },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
