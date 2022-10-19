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
          name: 'collapseAll',
          description: 'Collapses all nodes.',
        },
        {
          name: 'expandAll',
          description: 'Expands all nodes.',
        },
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'runAutofit',
          description:
            'This method causes the component to autofit its container.',
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
          prop: 'autofitOnExpand',
          description:
            'The component will autofit everytime a node is expanded.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'autofitOnLoad',
          description:
            "The component's initial render will fit the container by invoking the runAutofit method.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'cardData',
          description:
            'Used to render the family tree boxes as kup-cards (through kup-box).',
          type: 'GenericObject',
          default: 'null',
          try: 'json',
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
          description: 'Layout of the nodes (KupBoxLayout or number).',
          type: 'KupFamilyTreeLayout',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'stackedLeaves',
          description:
            'Child nodes that have no children are arranged vertically.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
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
                icon: 'location_city',
                id: '000',
                title: 'City',
                value: 'Bergamo',
              },
              {
                icon: 'location_city',
                id: '001',
                title: 'City',
                value: 'Brescia',
              },
              {
                icon: 'location_city',
                id: '002',
                title: 'City',
                value: 'Como',
              },
              {
                icon: 'location_city',
                id: '003',
                title: 'City',
                value: 'Cremona',
              },
              {
                icon: 'location_city',
                id: '004',
                title: 'City',
                value: 'Lecco',
              },
              {
                icon: 'location_city',
                id: '005',
                title: 'City',
                value: 'Lodi',
              },
              {
                icon: 'location_city',
                id: '006',
                title: 'City',
                value: 'Mantova',
              },
              {
                icon: 'location_city',
                id: '007',
                title: 'City',
                value: 'Milano',
              },
              {
                icon: 'location_city',
                id: '008',
                title: 'City',
                value: 'Monza',
              },
              {
                icon: 'location_city',
                id: '009',
                title: 'City',
                value: 'Pavia',
              },
              {
                icon: 'location_city',
                id: '010',
                title: 'City',
                value: 'Sondrio',
              },
              {
                icon: 'location_city',
                id: '011',
                title: 'City',
                value: 'Varese',
              },
            ],
            id: '00',
            title: 'Region',
            value: 'Lombardia',
          },
          {
            children: [
              {
                icon: 'location_city',
                id: '010',
                title: 'City',
                value: 'Belluno',
              },
              {
                icon: 'location_city',
                id: '011',
                title: 'City',
                value: 'Padova',
              },
              {
                icon: 'location_city',
                id: '012',
                title: 'City',
                value: 'Rovigo',
              },
              {
                icon: 'location_city',
                id: '013',
                title: 'City',
                value: 'Treviso',
              },
              {
                icon: 'location_city',
                id: '014',
                title: 'City',
                value: 'Venezia',
              },
              {
                icon: 'location_city',
                id: '015',
                title: 'City',
                value: 'Verona',
              },
              {
                icon: 'location_city',
                id: '016',
                title: 'City',
                value: 'Vicenza',
              },
            ],
            id: '01',
            title: 'Region',
            value: 'Veneto',
          },
          {
            children: [
              {
                icon: 'location_city',
                id: '020',
                title: 'City',
                value: 'Alessandria',
              },
              {
                icon: 'location_city',
                id: '021',
                title: 'City',
                value: 'Asti',
              },
              {
                icon: 'location_city',
                id: '022',
                title: 'City',
                value: 'Biella',
              },
              {
                icon: 'location_city',
                id: '023',
                title: 'City',
                value: 'Cuneo',
              },
              {
                icon: 'location_city',
                id: '024',
                title: 'City',
                value: 'Novara',
              },
              {
                icon: 'location_city',
                id: '025',
                title: 'City',
                value: 'Torino',
              },
              {
                icon: 'location_city',
                id: '026',
                title: 'City',
                value: 'Verbania',
              },
              {
                icon: 'location_city',
                id: '027',
                title: 'City',
                value: 'Vercelli',
              },
            ],
            id: '02',
            title: 'Region',
            value: 'Piemonte',
          },
        ],
        icon: 'flag',
        id: '0',
        title: 'Country',
        value: 'Italy',
      },
    ],
  };
  comp.collapsible = true;
  comp.id = 'demo-component';
  comp.layout = 2;

  return comp;
}
</script>

<style scoped lang="scss">
#demo-component {
  height: 100%;
  padding: 15px;
  width: 100%;
}
</style>
