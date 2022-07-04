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

export default {
  components: {
    Demo,
  },
  name: 'FamilyTreeDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-familytree-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-familytree-contextmenu',
          type: 'CustomEvent',
        },
        {
          name: 'kup-familytree-dblclick',
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
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'autofit',
          description: "The component's initial render will fit the container.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'collapsible',
          description: 'Nodes can be expanded/collapsed.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
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
          description: 'Actual data of the component.',
          type: 'KupFamilyTreeData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'layout',
          description: 'Layout of the boxes.',
          type: 'KupBoxLayout',
          default: 'null',
          try: 'json',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-family-tree');
  comp.data = {
    columns: [],
    rows: [
      {
        children: [
          {
            children: [
              {
                id: '000',
                value: 'Bergamo',
              },
              {
                id: '001',
                value: 'Brescia',
              },
              {
                id: '002',
                value: 'Como',
              },
              {
                id: '003',
                value: 'Cremona',
              },
              {
                id: '004',
                value: 'Lecco',
              },
              {
                id: '005',
                value: 'Lodi',
              },
              {
                id: '006',
                value: 'Mantova',
              },
              {
                id: '007',
                value: 'Milano',
              },
              {
                id: '008',
                value: 'Monza',
              },
              {
                id: '009',
                value: 'Pavia',
              },
              {
                id: '010',
                value: 'Sondrio',
              },
              {
                id: '011',
                value: 'Varese',
              },
            ],
            id: '00',
            value: 'Lombardia',
          },
          {
            children: [
              {
                id: '010',
                value: 'Belluno',
              },
              {
                id: '011',
                value: 'Padova',
              },
              {
                id: '012',
                value: 'Rovigo',
              },
              {
                id: '013',
                value: 'Treviso',
              },
              {
                id: '014',
                value: 'Venezia',
              },
              {
                id: '015',
                value: 'Verona',
              },
              {
                id: '016',
                value: 'Vicenza',
              },
            ],
            id: '01',
            value: 'Veneto',
          },
          {
            children: [
              {
                id: '020',
                value: 'Alessandria',
              },
              {
                id: '021',
                value: 'Asti',
              },
              {
                id: '022',
                value: 'Biella',
              },
              {
                id: '023',
                value: 'Cuneo',
              },
              {
                id: '024',
                value: 'Novara',
              },
              {
                id: '025',
                value: 'Torino',
              },
              {
                id: '026',
                value: 'Verbania',
              },
              {
                id: '027',
                value: 'Vercelli',
              },
            ],
            id: '02',
            value: 'Piemonte',
          },
        ],
        id: '0',
        value: 'Italy',
      },
    ],
  };
  comp.expandable = true;
  comp.id = 'demo-component';

  return comp;
}
</script>
