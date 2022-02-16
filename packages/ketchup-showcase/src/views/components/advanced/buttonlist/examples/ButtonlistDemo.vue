<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ButtonlistDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-full-width',
          description:
            'The buttonlist will fill all the available horizontal space (needs a new render to be effective).',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-large',
          description:
            'The button will have an increased size (needs a new render to be effective).',
        },
        {
          class: 'kup-pulsating',
          description:
            'In case of a toggable button, when it is toggled the button will feature a pulsating effect (needs a new render to be effective).',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-shaped',
          description:
            'The borders of the button will be shaped (needs a new render to be effective).',
        },
        {
          class: 'kup-slim',
          description:
            'The button will have a decreased size (needs a new render to be effective).',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app.',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-buttonlist-click',
          type: 'click',
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
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'columns',
          description: 'Number of columns.',
          type: 'number',
          default: '0',
          try: 'field',
        },
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
          description: 'Props of the sub-components.',
          type: 'KupButtonListNode',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'disabled',
          description: 'When set to true, the sub-components are disabled.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'displayMode',
          description:
            'Sets how to show the selected item value. Suported values: "code", "description", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'showSelection',
          description:
            'When set to true, highlights the selected button with the secondary color of KupTheme.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'styling',
          description:
            'Defines the style of the buttons. Available styles are "flat", "outlined" and "raised" (which is the default).',
          type: 'FButtonStyling',
          default: 'FButtonStyling.RAISED',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-button-list');
  comp.id = 'demo-component';
  comp.data = [
    {
      cells: {
        Mat: {
          obj: { t: 'NR', p: '', k: '00Mat' },
          value: '00Mat',
          options: true,
        },
        Program: {
          obj: { t: 'NR', p: '', k: '00Program' },
          value: '00Program',
          options: false,
        },
        Attack: {
          obj: { t: 'NR', p: '', k: '00Attack' },
          value: '00Attack',
          options: true,
        },
      },
      children: [
        {
          cells: {
            Mat: {
              obj: { t: 'NR', p: '', k: '10Mat' },
              value: '10Mat',
              options: false,
            },
            Program: {
              obj: { t: 'NR', p: '', k: '10Program' },
              value: '10Program',
              options: false,
            },
            Attack: {
              obj: { t: 'NR', p: '', k: '10Attack' },
              value: '10Attack',
              options: true,
            },
          },
          children: [],
          icon: 'filter_1',
          disabled: false,
          expandable: false,
          id: '00100',
          isExpanded: false,
          obj: { t: 'TN', p: '', k: 'First option' },
          options: false,
          value: 'First option',
        },
        {
          cells: {
            Mat: {
              obj: { t: 'NR', p: '', k: '11Mat' },
              value: '11Mat',
              options: false,
            },
            Program: {
              obj: { t: 'NR', p: '', k: '11Program' },
              value: '11Program',
              options: true,
            },
            Attack: {
              obj: { t: 'NR', p: '', k: '11Attack' },
              value: '11Attack',
              options: false,
            },
          },
          children: [
            {
              cells: {
                Mat: {
                  obj: { t: 'NR', p: '', k: '20Mat' },
                  value: '20Mat',
                  options: true,
                },
                Program: {
                  obj: { t: 'NR', p: '', k: '20Program' },
                  value: '20Program',
                  options: false,
                },
                Attack: {
                  obj: { t: 'NR', p: '', k: '20Attack' },
                  value: '20Attack',
                  options: true,
                },
              },
              children: [
                {
                  cells: {
                    Mat: {
                      obj: { t: 'NR', p: '', k: '30Mat' },
                      value: '30Mat',
                      options: false,
                    },
                    Program: {
                      obj: { t: 'NR', p: '', k: '30Program' },
                      value: '30Program',
                      options: true,
                    },
                    Attack: {
                      obj: { t: 'NR', p: '', k: '30Attack' },
                      value: '30Attack',
                      options: false,
                    },
                  },
                  children: [],
                  disabled: false,
                  expandable: false,
                  icon: 'account',
                  id: '0010300',
                  isExpanded: false,
                  obj: { t: 'TN', p: '', k: 'FIOGIA30' },
                  options: false,
                  value: 'FIOGIA30',
                },
              ],
              disabled: true,
              expandable: true,
              icon: 'favorite',
              id: '001201',
              isExpanded: false,
              obj: { t: 'TN', p: '', k: 'Second node item' },
              options: true,
              value: 'Second node item',
            },
          ],
          disabled: false,
          expandable: true,
          icon: 'filter_2',
          id: '00111',
          isExpanded: true,
          obj: { t: 'TN', p: '', k: 'Second option' },
          options: false,
          value: 'Second option',
        },
      ],
      disabled: false,
      expandable: true,
      icon: 'widgets',
      id: '0005',
      isExpanded: true,
      obj: { t: '', p: '', k: 'Demo' },
      options: true,
      value: 'Demo',
    },
    {
      cells: {
        Mat: {
          obj: { t: 'NR', p: '', k: '30Mat' },
          value: '30Mat',
          options: false,
        },
        Program: {
          obj: { t: 'NR', p: '', k: '30Program' },
          value: '30Program',
          options: true,
        },
        Attack: {
          obj: { t: 'NR', p: '', k: '30Attack' },
          value: '30Attack',
          options: false,
        },
      },
      children: [],
      disabled: false,
      expandable: false,
      icon: 'favorite',
      id: '0010300',
      isExpanded: false,
      obj: { t: 'TN', p: '', k: 'FIOGIA30' },
      options: false,
      value: 'Favorites',
    },
    {
      cells: {
        Mat: {
          obj: { t: 'NR', p: '', k: '30Mat' },
          value: '30Mat',
          options: false,
        },
        Program: {
          obj: { t: 'NR', p: '', k: '30Program' },
          value: '30Program',
          options: true,
        },
        Attack: {
          obj: { t: 'NR', p: '', k: '30Attack' },
          value: '30Attack',
          options: false,
        },
      },
      children: [],
      disabled: false,
      expandable: false,
      icon: 'account',
      id: '0010300',
      isExpanded: false,
      obj: { t: 'TN', p: '', k: 'FIOGIA30' },
      options: false,
      value: 'Account',
    },
  ];
  comp.showSelection = true;
  comp.styling = 'raised';
  return comp;
}
</script>
