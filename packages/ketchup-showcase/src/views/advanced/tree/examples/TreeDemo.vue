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
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'TreeDemo',
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
      demoComp: '<kup-tree id="demo-component"></kup-tree>',
      demoProps: [
        {
          prop: 'autoSelectionNodeMode',
          description: 'Auto selection of the node.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'columns?',
          description:
            'The columns of the tree when tree visualization is active.',
          type: 'Column[]',
          default: 'undefined',
          try: 'json',
        },
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
          description: 'The actual data of the chart.',
          type: 'TreeNode[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'dynamicExpansionCallback',
          description:
            'Function that gets invoked when a new set of nodes must be loaded as children of a node. Used in combination with showObjectNavigation. When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop. 1 - If this prop is set to null, no callback to download data is available: the component will emit an event requiring the parent to load the children of the given node. 2 - If this prop is set to have a callback, then the component will automatically make requests to load children of a given node. After the load has been completed, a different event will be fired to alert the parent of the change.',
          type:
            '(treeNodeToExpand: TreeNode,treeNodePath: TreeNodePath) => Promise<TreeNode[]> | undefined',
          default: 'undefined',
          try: 'json',
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
          prop: 'hoverScroll',
          description: 'Activates the scroll on hover function.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'selectedNode',
          description:
            'An array of integers containing the path to a selected child. Groups up the properties SelFirst, SelItem, SelName.',
          type: 'number[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'showColumns',
          description: 'Shows the tree data as a table.',
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
          prop: 'showObjectNavigation',
          description:
            'When a node has options in its data and is on mouse over state while this prop is true, the node must shows the cog wheel to trigger object navigation upon click. This will generate an event to inform the navigation object has been activated.',
          type: 'boolean',
          default: 'false',
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
      demoEvents: [
        {
          name: 'kupOptionClicked',
          type:
            'CustomEvent<{ cell: Cell; column: Column; treeNode: TreeNode; }>',
        },
        {
          name: 'kupTreeNodeCollapse',
          type: 'CustomEvent<{ treeNodePath: number[]; treeNode: TreeNode; }>',
        },
        {
          name: 'kupTreeNodeExpand',
          type:
            'CustomEvent<{ treeNodePath: number[]; treeNode: TreeNode; usesDynamicExpansion?: boolean; dynamicExpansionRequireChildren?: boolean; }>',
        },
        {
          name: 'kupTreeNodeSelected',
          type:
            'CustomEvent<{ treeNodePath: number[]; treeNode: TreeNode; auto: boolean; }>',
        },
      ],
      demoData: [
        {
          prop: 'data',
          value: baseData,
        },
        {
          prop: 'series',
          value: ['Col2', 'Col3', 'Col4'],
        },
        {
          prop: 'colors',
          value: ['#fc8e1c', 'Black', '#45c4ea'],
        },
        {
          prop: 'axis',
          value: 'Col1',
        },
        {
          prop: 'types',
          value: ['Hbar'],
        },
        {
          prop: 'asp',
          value: '2D',
        },
      ],
    };
  },
};
</script>
