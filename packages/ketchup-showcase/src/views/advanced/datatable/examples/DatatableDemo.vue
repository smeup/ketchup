<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { defaultDataTable } from '@/mock/dataTable';

export default {
  components: {
    Demo,
  },
  name: 'DatatableDemo',
  data() {
    return {
      demoComp: createComp(),
      demoProps: [
        {
          prop: 'data',
          description: 'The data of the table.',
          type: 'TableData',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'density',
          description:
            'The density of the rows, defaults at "medium" and can be also set to "large" or "small".',
          type: 'string',
          default: 'small',
          try: 'field',
        },
        {
          prop: 'enableSortableColumns',
          description:
            'Enables the sorting of columns by dragging them into different columns.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'expandGroups',
          description: 'Expands groups when set to true.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'filters',
          description: 'List of filters set by the user.',
          type: 'GenericMap',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'forceOneLine',
          description:
            'Forces cells with long text and a fixed column size to have an ellipsis set on their text. The reflect attribute is mandatory to allow styling.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilter',
          description: 'When set to true it activates the global filter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilterValue',
          description: 'The value of the global filter.',
          type: 'string',
          default: '',
          try: 'field',
        },
        {
          prop: 'groupLabelDisplay',
          description:
            'How the label of a group must be displayed. Available modes: both, label, value. ',
          type: 'string',
          default: 'both',
          try: 'field',
        },
        {
          prop: 'groups',
          description: 'The list of groups.',
          type: 'GroupObject[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'headerIsPersistent',
          description:
            'When set to true the header will stick on top of the table when scrolling.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'loadMoreLimit',
          description:
            'Sets a maximum limit of new records which can be required by the load more functionality.',
          type: 'number',
          default: '1000',
          try: 'field',
        },
        {
          prop: 'loadMoreStep',
          description:
            'The number of records which will be requested to be downloaded when clicking on the load more button.',
          type: 'number',
          default: '60',
          try: 'field',
        },
        {
          prop: 'multiSelection',
          description: 'When set to true enables the multi selection.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'paginatorPos',
          description:
            'Sets the position of the paginator. Available values: Top, Bottom or Both.',
          type: 'string',
          default: 'Top',
          try: 'field',
        },
        {
          prop: 'rowsPerPage',
          description: 'Sets the number of rows per page to display.',
          type: 'number',
          default: '10',
          try: 'field',
        },
        {
          prop: 'rowActions',
          description: 'Sets the actions of the rows.',
          type: 'rowAction[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'selectRow',
          description: 'Selects the specified row.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'showFilters',
          description: 'When set to true enables the column filters.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showGrid',
          description:
            'Can be used to customize the grid view of the table. Available settings: None, Row, Col, Complete.',
          type: 'string',
          default: 'Row',
          try: 'field',
        },
        {
          prop: 'showHeader',
          description: 'Enables rendering of the table header.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'sort',
          description: 'Defines the current sorting options.',
          type: 'SortObject[]',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'sortableColumnsMutateData',
          description:
            'If set to true, when a column is dragged to be sorted the component directly mutates the data.columns property and then fires the event.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'sortEnabled',
          description: 'When set to true enables the sorting of the columns.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'tableHeight',
          description:
            'Sets the height of the table. If set, sticky header will behave through CSS and not JavaScript, scroll on hover will be disabled.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'tableWidth',
          description:
            'Sets the width of the table. If set, sticky header will behave through CSS and not JavaScript, scroll on hover will be disabled.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'totals',
          description: 'Defines the current sorting options.',
          type: 'TotalsMap',
          default: 'undefined',
          try: 'json',
        },
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
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
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-data-table');
  comp.data = defaultDataTable;
  comp.density = 'small';
  comp.groupLabelDisplay = 'both';
  comp.headerIsPersistent = true;
  comp.id = 'demo-component';
  comp.loadMoreLimit = '1000';
  comp.loadMoreStep = '60';
  comp.paginatorPos = 'Top';
  comp.rowsPerPage = '10';
  comp.showGrid = 'Row';
  comp.showHeader = true;
  comp.sortableColumnsMutateData = true;
  comp.sortEnabled = true;
  return comp;
}
</script>
