<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'FormDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-cell-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-iconclick',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-input',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-update',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setFocus',
          description: 'Sets the focus on an editable table cell.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'Actual data of the form.',
          type: 'KupFormData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'layout',
          description: 'How the form will arrange its content.',
          type: 'KupFormLayout',
          default: 'null',
          try: 'json',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-form');
  comp.data = {
    columns: [
      {
        name: 'NAME',
        title: 'Name',
      },
      {
        name: 'LASTNAME',
        title: 'Last name',
      },
    ],
    rows: [
      {
        cells: {
          NAME: {
            value: '',
            isEditable: true,
          },
          LASTNAME: {
            value: '',
            isEditable: true,
          },
        },
      },
    ],
  };
  comp.id = 'demo-component';

  return comp;
}
</script>
