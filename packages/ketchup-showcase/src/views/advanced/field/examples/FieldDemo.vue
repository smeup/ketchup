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
      demoComp: '<kup-fld type="itx" id="demo-component"></kup-fld>',
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
          type: 'Object',
          default: '{}',
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
      demoData: {
        data: { icon: 'widgets', label: 'demo' },
        dataCMB: {
          textfieldData: {
            trailingIcon: true,
            icon: 'arrow_drop_down',
            label: 'demo',
          },
          listData: {
            data: [
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
            fieldId: 'LISTA',
            selectable: true,
          },
        },
        dataITX: { icon: 'widgets', label: 'demo' },
        dataRAD: {
          data: [
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
      },
    };
  },
};
</script>
