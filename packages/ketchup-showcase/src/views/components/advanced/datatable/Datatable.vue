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
      <datatable-without-row-selection></datatable-without-row-selection>
    </template>
    <template v-slot:16>
      <datatable-rows-repetition></datatable-rows-repetition>
    </template>
    <template v-slot:17>
      <datatable-sort></datatable-sort>
    </template>
    <template v-slot:18>
      <datatable-sortable-columns></datatable-sortable-columns>
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
    <template v-slot:26>
      <datatable-report-like></datatable-report-like>
    </template>
    <template v-slot:27>
      <datatable-document-like></datatable-document-like>
    </template>
    <template v-slot:28>
      <datatable-merge></datatable-merge>
    </template>
    <template v-slot:29>
      <datatable-formula></datatable-formula>
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
import DatatableDemo from '@/views/components/advanced/datatable/examples/DatatableDemo';
import DatatableBasic from '@/views/components/advanced/datatable/examples/DatatableBasic';
import DatatableCheckbox from '@/views/components/advanced/datatable/examples/DatatableCheckbox';
import DatatableFilters from '@/views/components/advanced/datatable/examples/DatatableFilters';
import DatatableGraphicCell from '@/views/components/advanced/datatable/examples/DatatableGraphicCell';
import DatatableDateTimeNumberCell from '@/views/components/advanced/datatable/examples/DatatableDateTimeNumberCell';
import DatatableChartCell from '@/views/components/advanced/datatable/examples/DatatableChartCell';
import DatatableFixedColumnsRows from '@/views/components/advanced/datatable/examples/DatatableFixedColumnsRows';
import DatatableGroups from '@/views/components/advanced/datatable/examples/DatatableGroups';
import DatatableImagesAndBadges from '@/views/components/advanced/datatable/examples/DatatableImagesAndBadges';
import DatatableJ4btn from '@/views/components/advanced/datatable/examples/DatatableJ4btn';
import DatatableJ4ico from '@/views/components/advanced/datatable/examples/DatatableJ4ico';
import DatatableJ1col from '@/views/components/advanced/datatable/examples/DatatableJ1col';
import DatatableJl from '@/views/components/advanced/datatable/examples/DatatableJl';
import DatatablePagination from '@/views/components/advanced/datatable/examples/DatatablePagination';
import DatatableProgressbar from '@/views/components/advanced/datatable/examples/DatatableProgressbar';
import DatatableRadio from '@/views/components/advanced/datatable/examples/DatatableRadio';
import DatatableRowActions from '@/views/components/advanced/datatable/examples/DatatableRowActions';
import DatatableRowSelection from '@/views/components/advanced/datatable/examples/DatatableRowSelection';
import DatatableWithoutRowSelection from '@/views/components/advanced/datatable/examples/DatatableWithoutRowSelection';
import DatatableRowsRepetition from '@/views/components/advanced/datatable/examples/DatatableRowsRepetition';
import DatatableSort from '@/views/components/advanced/datatable/examples/DatatableSort';
import DatatableSortableColumns from '@/views/components/advanced/datatable/examples/DatatableSortableColumns';
import DatatableTotal from '@/views/components/advanced/datatable/examples/DatatableTotal';
import DatatableShapes from '@/views/components/advanced/datatable/examples/DatatableShapes';
import DatatableCellClasses from '@/views/components/advanced/datatable/examples/DatatableCellClasses';
import DatatableReportLike from '@/views/components/advanced/datatable/examples/DatatableReportLike';
import DatatableDocumentLike from '@/views/components/advanced/datatable/examples/DatatableDocumentLike';
import DatatableMerge from '@/views/components/advanced/datatable/examples/DatatableMerge';
import DatatableFormula from '@/views/components/advanced/datatable/examples/DatatableFormula';

import Comp from '@/views/templates/Comp';

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
    DatatableWithoutRowSelection,
    DatatableRowsRepetition,
    DatatableSort,
    DatatableSortableColumns,
    DatatableTotal,
    DatatableJ4ico,
    DatatableShapes,
    DatatableCellClasses,
    DatatableJ1col,
    DatatableJl,
    DatatableReportLike,
    DatatableDocumentLike,
    DatatableMerge,
    DatatableFormula,
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
        'Without row selection',
        'With row repetition',
        'Sorting',
        'Sortable columns',
        'With totals',
        'With J4Ico',
        'Images and badges',
        'Shapes',
        'Cell classes',
        'With color objects',
        'With JL objects',
        'Report-like',
        'Document-like',
        'Merge columns',
        'Formulas on Columns',
      ],
    };
  },
  title: 'Ketchup | Data table',
};
</script>
