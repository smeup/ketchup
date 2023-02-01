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
  name: 'TreeDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-borderless',
          description: 'Displays the component without borders.',
        },
        {
          class: 'kup-full-width',
          description: 'The tree will fill all the available horizontal space.',
        },
        {
          class: 'kup-layout-fixed',
          description:
            'Sets a fixed layout to improve performances (especially when using Google Chrome).',
        },
        {
          class: 'kup-shaped',
          description:
            'The right border of the cells will be shaped. It only applies when showColumns prop is set to false. ',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-cell-click',
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
        {
          name: 'kup-tree-columnremove',
          type: 'custom',
        },
        {
          name: 'kup-tree-nodecollapse',
          type: 'custom',
        },
        {
          name: 'kup-tree-nodeexpand',
          type: 'custom',
        },
        {
          name: 'kup-tree-nodeselected',
          type: 'custom',
        },
        {
          name: 'kup-tree-nodedblclick',
          type: 'dblclick',
        },
        {
          name: 'kup-tree-dynamicmassexpansion',
          type: 'custom',
        },
      ],
      demoMethods: [
        {
          name: 'closeColumnMenu',
          description: 'Closes any opened column menu.',
        },
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
          name: 'hideColumn',
          description: ' Hides the given column.',
        },
        {
          name: 'openColumnMenu',
          description: 'Opens the column menu of the given column.',
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'resizeCallback',
          description:
            'This method is invoked by KupManager whenever the component changes size.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'asAccordion',
          description:
            'When enabled, the first level of depth will give an accordion look to nodes.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'columns',
          description:
            'The columns of the tree when tree visualization is active.',
          type: 'KupDataColumn',
          isArray: true,
          default: 'undefined',
          try: 'json',
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
          description: 'The actual data of the chart.',
          type: 'KupTreeNode',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'density',
          description:
            "The density of the rows, defaults at 'medium' and can also be set to 'dense' or 'wide'",
          type: 'string',
          default: 'medium',
          try: 'field',
        },
        {
          prop: 'dynamicExpansionCallback',
          description:
            'Function that gets invoked when a new set of nodes must be loaded as children of a node. When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop. 1 - If this prop is set to null, no callback to download data is available: the component will emit an event requiring the parent to load the children of the given node. 2 - If this prop is set to have a callback, then the component will automatically make requests to load children of a given node. After the load has been completed, a different event will be fired to alert the parent of the change.',
          type: '?',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'editableData',
          description:
            'When set to true, editable cells will be rendered using input components.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'expanded',
          description:
            'Flag: the nodes of the whole tree must be already expanded upon loading. Disabled nodes do NOT get expanded.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'expansionMode',
          description:
            "Behavior of nodes' expansion: it can be chosen between expanding a node by clicking on the dropdown icon, or by clicking on the whole node.",
          type: 'KupTreeExpansionMode',
          default: 'KupTreeExpansionMode.DROPDOWN',
          try: 'field',
        },
        {
          prop: 'globalFilter',
          description: 'When set to true it activates the global filter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilterMode',
          description: 'The mode of the global filter',
          type: 'KupGlobalFilterMode',
          default: 'SIMPLE',
          try: 'field',
        },
        {
          prop: 'globalFilterValue',
          description: 'The value of the global filter.',
          type: 'string',
          default: '',
          try: 'field',
        },
        {
          prop: 'preventXScroll',
          description:
            'Experimental feature: when active, the tree will try to prevent horizontal overflowing elements by setting a width on the content of the table cells. It works only on cells of the main column.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'ripple',
          description:
            "When enabled displays Material's ripple effect on nodes (only when no columns are displayed).",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'scrollOnHover',
          description:
            'When the mouse move towards the left or right edge and there is an overflow, the tree will automatically scroll.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showColumns',
          description: 'Shows the tree data as a table.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showFooter',
          description: 'When set to true shows the footer.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showHeader',
          description:
            'Flag: shows the header of the tree when the tree is displayed as a table.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showIcons',
          description: 'Shows the icons of the nodes.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'useDynamicExpansion',
          description:
            'When the component must use the dynamic expansion feature to open its nodes, it means that not all the nodes of the tree have been passed inside the data property. Therefore, when expanding a node, the tree must emit an event (or run a given callback) and wait for the child nodes to be downloaded from the server.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-tree');
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
          disabled: false,
          expandable: false,
          npm: 'filter_1',
          id: '00100',
          isExpanded: false,
          obj: { t: 'TN', p: '', k: 'First node' },
          options: false,
          value: 'First node',
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
          obj: { t: 'TN', p: '', k: 'Second node' },
          options: false,
          value: 'Second node',
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
  ];
  comp.scrollOnHover = true;
  comp.id = 'demo-component';
  comp.showIcons = true;
  return comp;
}
</script>
