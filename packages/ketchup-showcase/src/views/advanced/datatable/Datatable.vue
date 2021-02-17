<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <datatable-demo></datatable-demo>
    </template>
    <template v-slot:1>
      <datatable-basic></datatable-basic>
    </template>
    <template v-slot:2>
      <datatable-checkbox></datatable-checkbox>
    </template>
    <template v-slot:3>
      <datatable-filters></datatable-filters>
    </template>
    <template v-slot:4>
      <datatable-graphic-cell></datatable-graphic-cell>
    </template>
    <template v-slot:5>
      <datatable-date-time-number-cell></datatable-date-time-number-cell>
    </template>
    <template v-slot:6>
      <datatable-chart-cell></datatable-chart-cell>
    </template>
    <template v-slot:7>
      <datatable-groups></datatable-groups>
    </template>
    <template v-slot:8>
      <datatable-fixed-columns-rows />
    </template>
    <template v-slot:9>
      <datatable-j4btn></datatable-j4btn>
    </template>
    <template v-slot:10>
      <datatable-pagination></datatable-pagination>
    </template>
    <template v-slot:11>
      <datatable-progressbar></datatable-progressbar>
    </template>
    <template v-slot:12>
      <datatable-radio></datatable-radio>
    </template>
    <template v-slot:13>
      <datatable-row-actions></datatable-row-actions>
    </template>
    <template v-slot:14>
      <datatable-row-selection></datatable-row-selection>
    </template>
    <template v-slot:15>
      <datatable-rows-repetition></datatable-rows-repetition>
    </template>
    <template v-slot:16>
      <datatable-sort></datatable-sort>
    </template>
    <template v-slot:17>
      <datatable-sortable-columns></datatable-sortable-columns>
    </template>
    <template v-slot:18>
      <datatable-tooltip></datatable-tooltip>
    </template>
    <template v-slot:19>
      <datatable-total></datatable-total>
    </template>
    <template v-slot:20>
      <datatable-j4ico></datatable-j4ico>
    </template>
    <template v-slot:21>
      <datatable-images-and-badges />
    </template>
    <template v-slot:22>
      <datatable-shapes></datatable-shapes>
    </template>
    <template v-slot:23>
      <datatable-cell-classes></datatable-cell-classes>
    </template>
    <template v-slot:24>
      <datatable-j1col></datatable-j1col>
    </template>
    <template v-slot:25>
      <datatable-jl></datatable-jl>
    </template>
  </comp>
</template>

<style>
kup-lazy.to-be-loaded {
  min-height: 300px;
  transition: all 0.25s;
}
</style>

<script>
import DatatableDemo from '@/views/advanced/datatable/examples/DatatableDemo';
import DatatableBasic from '@/views/advanced/datatable/examples/DatatableBasic';
import DatatableCheckbox from '@/views/advanced/datatable/examples/DatatableCheckbox';
import DatatableFilters from '@/views/advanced/datatable/examples/DatatableFilters';
import DatatableGraphicCell from '@/views/advanced/datatable/examples/DatatableGraphicCell';
import DatatableDateTimeNumberCell from '@/views/advanced/datatable/examples/DatatableDateTimeNumberCell';
import DatatableChartCell from '@/views/advanced/datatable/examples/DatatableChartCell';
import DatatableFixedColumnsRows from '@/views/advanced/datatable/examples/DatatableFixedColumnsRows';
import DatatableGroups from '@/views/advanced/datatable/examples/DatatableGroups';
import DatatableImagesAndBadges from '@/views/advanced/datatable/examples/DatatableImagesAndBadges';
import DatatableJ4btn from '@/views/advanced/datatable/examples/DatatableJ4btn';
import DatatableJ4ico from '@/views/advanced/datatable/examples/DatatableJ4ico';
import DatatableJ1col from '@/views/advanced/datatable/examples/DatatableJ1col';
import DatatableJl from '@/views/advanced/datatable/examples/DatatableJl';
import DatatablePagination from '@/views/advanced/datatable/examples/DatatablePagination';
import DatatableProgressbar from '@/views/advanced/datatable/examples/DatatableProgressbar';
import DatatableRadio from '@/views/advanced/datatable/examples/DatatableRadio';
import DatatableRowActions from '@/views/advanced/datatable/examples/DatatableRowActions';
import DatatableRowSelection from '@/views/advanced/datatable/examples/DatatableRowSelection';
import DatatableRowsRepetition from '@/views/advanced/datatable/examples/DatatableRowsRepetition';
import DatatableSort from '@/views/advanced/datatable/examples/DatatableSort';
import DatatableSortableColumns from '@/views/advanced/datatable/examples/DatatableSortableColumns';
import DatatableTooltip from '@/views/advanced/datatable/examples/DatatableTooltip';
import DatatableTotal from '@/views/advanced/datatable/examples/DatatableTotal';
import DatatableShapes from '@/views/advanced/datatable/examples/DatatableShapes';
import DatatableCellClasses from '@/views/advanced/datatable/examples/DatatableCellClasses';

import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    DatatableDemo,
    DatatableBasic,
    DatatableCheckbox,
    DatatableFilters,
    DatatableGraphicCell,
    DatatableDateTimeNumberCell,
    DatatableChartCell,
    DatatableFixedColumnsRows,
    DatatableGroups,
    DatatableImagesAndBadges,
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
    DatatableJ4ico,
    DatatableShapes,
    DatatableCellClasses,
    DatatableJ1col,
    DatatableJl,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-data-table',
      headtitle: 'Data table',
      titles: [
        'Playground',
        'Basic usage',
        'With checkboxes',
        'With filters',
        'Graphic cells',
        'Date, time, timestamp, number cells',
        'Chart cells',
        'Groups',
        'With Fixed columns and rows',
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
        'With J4Ico',
        'Images and badges',
        'Shapes',
        'Cell classes',
        'With color objects',
        'With JL objects',
      ],
    };
  },
};
</script>
