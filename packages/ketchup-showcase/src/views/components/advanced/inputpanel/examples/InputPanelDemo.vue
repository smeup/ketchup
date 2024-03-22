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
        name: 'COL',
        title: 'Color Shirt',
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
      {
        name: 'CAM',
        title: 'Campionato vinto',
        visible: true,
      },
      {
        name: 'CHI',
        title: 'Chip',
        visible: true,
      },
    ],
    rows: [
      {
        cells: {
          NAM: {
            value: 'Francesco',
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
            value: 'Totti',
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            shape: 'INF',
          },
          COL: {
            value: '#8E1F2F',
            obj: {
              t: 'J1',
              p: 'COL',
              k: '',
            },
            editable: true,
            mandatory: true,
            // shape: 'CLP',
          },
          NAT: {
            value: 'It',
            options: [
              { id: 'It', label: 'Italy' },
              { id: 'Sp', label: 'Spain' },
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
            value: 'Rom',
            obj: {
              t: '',
              p: '',
              k: '',
            },
            editable: true,
            mandatory: true,
            options: [
              { id: 'Rom', label: 'Roma' },
              { id: 'Flam', label: 'Flaminio' },
              { id: 'PorMet', label: 'Porta Metronia' },
              { id: 'Garbat', label: 'Garbatella' },
            ],
            shape: 'ACP',
          },
          CAM: {
            value: 'on',
            obj: {
              t: 'V2',
              p: 'SI/NO',
              k: '',
            },
            editable: true,
            mandatory: true,
            // shape: 'CHK',
          },
          CHI: {
            shape: 'CHI',
            value: 'Chi',
            editable: true,
            options: [{ id: 'Chi', label: 'Chip' }],
          },
        },
      },
    ],
  };
  comp.id = 'demo-component';

  return comp;
}
</script>
