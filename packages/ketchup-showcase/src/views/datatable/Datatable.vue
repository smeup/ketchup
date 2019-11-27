<template>
  <comp :titles="titles">
    <template v-slot:0>
      <datatable-basic></datatable-basic>
    </template>
    <template v-slot:1>
      <datatable-checkbox></datatable-checkbox>
    </template>
    <template v-slot:2>
      <datatable-columns-width></datatable-columns-width>
    </template>
    <template v-slot:3>
      <datatable-filters></datatable-filters>
    </template>
    <template v-slot:4>
      <datatable-graphic-cell></datatable-graphic-cell>
    </template>
    <template v-slot:5>
      <datatable-groups></datatable-groups>
    </template>
    <template v-slot:6>
      <datatable-j4btn></datatable-j4btn>
    </template>
    <template v-slot:7>
      <datatable-pagination></datatable-pagination>
    </template>
    <template v-slot:8>
      <datatable-progressbar></datatable-progressbar>
    </template>
    <template v-slot:9>
      <datatable-radio></datatable-radio>
    </template>
    <template v-slot:10>
      <datatable-row-actions></datatable-row-actions>
    </template>
    <template v-slot:11>
      <datatable-row-selection></datatable-row-selection>
    </template>
    <template v-slot:12>
      <datatable-rows-repetition></datatable-rows-repetition>
    </template>
    <template v-slot:13>
      <datatable-sort></datatable-sort>
    </template>
    <template v-slot:14>
      <datatable-sortable-columns></datatable-sortable-columns>
    </template>
    <template v-slot:15>
      <datatable-tooltip></datatable-tooltip>
    </template>
    <template v-slot:16>
      <datatable-total></datatable-total>
    </template>
  </comp>
</template>

<script>
import DatatableBasic from '@/views/datatable/examples/DatatableBasic';
import DatatableCheckbox from '@/views/datatable/examples/DatatableCheckbox';
import DatatableColumnsWidth from '@/views/datatable/examples/DatatableColumnsWidth';
import DatatableFilters from '@/views/datatable/examples/DatatableFilters';
import DatatableGraphicCell from '@/views/datatable/examples/DatatableGraphicCell';
import DatatableGroups from '@/views/datatable/examples/DatatableGroups';
import DatatableJ4btn from '@/views/datatable/examples/DatatableJ4btn';
import DatatablePagination from '@/views/datatable/examples/DatatablePagination';
import DatatableProgressbar from '@/views/datatable/examples/DatatableProgressbar';
import DatatableRadio from '@/views/datatable/examples/DatatableRadio';
import DatatableRowActions from '@/views/datatable/examples/DatatableRowActions';
import DatatableRowSelection from '@/views/datatable/examples/DatatableRowSelection';
import DatatableRowsRepetition from '@/views/datatable/examples/DatatableRowsRepetition';
import DatatableSort from '@/views/datatable/examples/DatatableSort';
import DatatableSortableColumns from '@/views/datatable/examples/DatatableSortableColumns';
import DatatableTooltip from '@/views/datatable/examples/DatatableTooltip';
import DatatableTotal from '@/views/datatable/examples/DatatableTotal';
import Comp from '@/views/page/templates/Comp';

export default {
  components: {
    DatatableBasic,
    DatatableCheckbox,
    DatatableColumnsWidth,
    DatatableFilters,
    DatatableGraphicCell,
    DatatableGroups,
    DatatableJ4btn,
    DatatablePagination,
    DatatableProgressbar,
    DatatableRadio,
    DatatableRowActions,
    DatatableRowSelection,
    DatatableRowsRepetition,
    DatatableSort,
    DatatableSortableColumns,
    DatatableTooltip,
    DatatableTotal,
    Comp,
  },
  data() {
    return {
      titles: [
        'Data Table',
        'With checkboxes',
        'Custom column width',
        'With filters',
        'Graphic cells',
        'Groups',
        'With J4BTN',
        'Pagination',
        'With progress bar',
        'With radio buttons',
        'With row actions',
        'With row selection',
        'With row repetition',
        'Sorting',
        'Sortable columns',
        'With tooltip',
        'With totals',
      ],
    };
  },
};
</script>
