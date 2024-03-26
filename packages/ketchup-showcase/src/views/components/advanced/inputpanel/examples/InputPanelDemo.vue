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
  name: 'InputPanelDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-form-ready',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [],
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
          type: 'KupInputPanelData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'hiddenSubmitButton',
          description:
            'Creates a hidden submit button in order to submit the form with enter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'submitCb',
          description: 'Sets the callback function on submit form.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-input-panel');
  comp.data = {
    columns: [
      {
        name: 'NAM',
        title: 'Name',
        visible: true,
      },
      {
        name: 'SUR',
        title: 'Surname',
        visible: true,
      },
      {
        name: 'NAT',
        title: 'Nation',
        visible: true,
      },
      {
        name: 'CIT',
        title: 'City',
        visible: true,
      },
    ],
    rows: [
      {
        cells: {
          NAM: {
            value: '',
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            shape: 'ITX',
          },
          SUR: {
            value: '',
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            shape: 'ITX',
          },
          NAT: {
            value: '',
            options: [
              'Italy',
              'Spain',
              'Germany',
              'France',
              'Portugal',
              'England',
            ],
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            shape: 'CMB',
          },
          CIT: {
            value: '',
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            options: [
              'Rome',
              'Florence',
              'Venice',
              'Madrid',
              'Barcelona',
              'Seville',
              'Berlin',
              'Munich',
              'Hamburg',
              'Paris',
              'Marseille',
              'Lyon',
              'Lisbon',
              'Porto',
              'Faro',
              'London',
              'Manchester',
              'Liverpool',
            ],
            shape: 'ACP',
          },
        },
        layout: {},
      },
    ],
  };
  comp.id = 'demo-component';

  return comp;
}
</script>
