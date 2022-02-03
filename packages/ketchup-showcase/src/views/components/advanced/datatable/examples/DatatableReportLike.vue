<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="props1"></kup-lazy>
    <kup-lazy
      style="margin-top: 4em"
      component-name="kup-data-table"
      :data.prop="props2"
    ></kup-lazy>
    <kup-lazy
      style="margin-top: 4em"
      component-name="kup-data-table"
      :data.prop="props3"
    ></kup-lazy>
    <kup-lazy
      style="margin-top: 4em"
      component-name="kup-data-table"
      :data.prop="props4"
    ></kup-lazy>
    <kup-lazy
      style="margin-top: 4em"
      component-name="kup-data-table"
      :data.prop="props5a"
    ></kup-lazy>
    <kup-lazy component-name="kup-data-table" :data.prop="props5"></kup-lazy>
  </div>
</template>

<script>
import {
  reportDatatable,
  reportDatatable2,
  reportDatatable3,
  reportDatatable4,
  subfile,
} from '@/mock/dataTable';

export default {
  name: 'DatatableReportLike',

  data() {
    return {
      props1: {
        customStyle: '',
        data: reportDatatable,
        density: 'dense',
        dragEnabled: false,
        dropEnabled: false,
        editableData: false,
        enableSortableColumns: true,
        enableExtraColumns: true,
        expandGroups: false,
        filters: {},
        fixedColumns: 0,
        fixedRows: 0,
        forceOneLine: false,
        globalFilter: false,
        globalFilterValue: '',
        groupLabelDisplay: 'both',
        groups: [],
        headerIsPersistent: true,
        isFocusable: false,
        lazyLoadRows: false,
        lineBreakCharacter: '\n',
        loadMoreLimit: 1000,
        loadMoreMode: 'progressive_threshold',
        loadMoreStep: 60,
        pageSelected: -1,
        paginatorPos: 'Top',
        removableColumns: false,
        resizableColumns: true,
        rowsPerPage: 99,
        scrollOnHover: false,
        showCustomization: true,
        showFilters: true,
        showFooter: false,
        showGrid: 'Row',
        showGroups: false,
        showHeader: true,
        showLoadMore: false,
        showTooltipOnRightClick: true,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
        tooltipEnabled: true,
      },
      props2: {
        customStyle: '',
        data: reportDatatable2,
        density: 'dense',
        dragEnabled: false,
        dropEnabled: false,
        editableData: false,
        enableSortableColumns: true,
        enableExtraColumns: true,
        expandGroups: false,
        filters: {},
        fixedColumns: 0,
        fixedRows: 0,
        forceOneLine: false,
        globalFilter: false,
        globalFilterValue: '',
        groupLabelDisplay: 'both',
        groups: [],
        headerIsPersistent: true,
        isFocusable: false,
        lazyLoadRows: false,
        lineBreakCharacter: '\n',
        loadMoreLimit: 1000,
        loadMoreMode: 'progressive_threshold',
        loadMoreStep: 60,
        pageSelected: -1,
        paginatorPos: 'Top',
        removableColumns: false,
        resizableColumns: true,
        rowsPerPage: 99,
        scrollOnHover: false,
        showCustomization: true,
        showFilters: true,
        showFooter: false,
        showGrid: 'Row',
        showGroups: false,
        showHeader: false,
        showLoadMore: false,
        showTooltipOnRightClick: true,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
        tooltipEnabled: true,
      },
      props3: {
        customStyle: '',
        data: reportDatatable3,
        density: 'dense',
        dragEnabled: false,
        dropEnabled: false,
        editableData: false,
        enableSortableColumns: true,
        enableExtraColumns: true,
        expandGroups: false,
        filters: {},
        fixedColumns: 0,
        fixedRows: 0,
        forceOneLine: false,
        globalFilter: false,
        globalFilterValue: '',
        groupLabelDisplay: 'both',
        groups: [],
        headerIsPersistent: true,
        isFocusable: false,
        lazyLoadRows: false,
        lineBreakCharacter: '\n',
        loadMoreLimit: 1000,
        loadMoreMode: 'progressive_threshold',
        loadMoreStep: 60,
        pageSelected: -1,
        paginatorPos: 'Top',
        removableColumns: false,
        resizableColumns: true,
        rowsPerPage: 99,
        scrollOnHover: false,
        showCustomization: true,
        showFilters: true,
        showFooter: false,
        showGrid: 'Row',
        showGroups: false,
        showHeader: false,
        showLoadMore: false,
        showTooltipOnRightClick: true,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
        tooltipEnabled: true,
      },
      props4: {
        customStyle: '',
        data: reportDatatable4,
        density: 'dense',
        dragEnabled: false,
        dropEnabled: false,
        editableData: true,
        enableSortableColumns: true,
        enableExtraColumns: true,
        expandGroups: false,
        filters: {},
        fixedColumns: 0,
        fixedRows: 0,
        forceOneLine: false,
        globalFilter: false,
        globalFilterValue: '',
        groupLabelDisplay: 'both',
        groups: [],
        headerIsPersistent: true,
        isFocusable: false,
        lazyLoadRows: false,
        lineBreakCharacter: '\n',
        loadMoreLimit: 1000,
        loadMoreMode: 'progressive_threshold',
        loadMoreStep: 60,
        pageSelected: -1,
        paginatorPos: 'Top',
        removableColumns: false,
        resizableColumns: true,
        rowsPerPage: 99,
        scrollOnHover: false,
        showCustomization: true,
        showFilters: true,
        showFooter: false,
        showGrid: 'Row',
        showGroups: false,
        showHeader: false,
        showLoadMore: false,
        showTooltipOnRightClick: true,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
        tooltipEnabled: true,
      },
      props5a: {
        customStyle: ':host { --kup-datatable-border: none; }',
        showGrid: 'None',
        showHeader: false,
        rowsPerPage: 99999,
        data: {
          columns: [
            {
              name: 'LABEL1',
              title: 'Label1',
            },
            {
              name: 'VALUE1',
              title: 'Value1',
            },
            {
              name: 'LABEL2',
              title: 'Label2',
            },
            {
              name: 'VALUE2',
              title: 'Value2',
            },
            {
              name: 'LABEL3',
              title: 'Label3',
            },
            {
              name: 'VALUE3',
              title: 'Value3',
            },
            {
              name: 'LABEL4',
              title: 'Label4',
            },
            {
              name: 'VALUE4',
              title: 'Value4',
            },
            {
              name: 'LABEL5',
              title: 'Label5',
            },
            {
              name: 'VALUE5',
              title: 'Value5',
            },
          ],
          rows: [
            {
              cells: {
                LABEL1: {
                  value: 'Creato da:',
                },
                VALUE1: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: 'GIAGIU',
                },
                LABEL2: {
                  value: 'il:',
                },
                VALUE2: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '20/01/22 - 11:16:41',
                },
                LABEL3: {
                  value: 'Esercizio:',
                },
                VALUE3: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '2021',
                  span: {
                    col: 3,
                  },
                },
                LABEL4: {
                  value: 'Pertinenza/condizione:',
                },
                VALUE4: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '   /   ',
                },
              },
            },
            {
              cells: {
                LABEL1: {
                  value: 'Data da:',
                },
                VALUE1: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '01/01/2021',
                },
                LABEL2: {
                  value: 'a:',
                },
                VALUE2: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '31/01/2021',
                },
                LABEL3: {
                  value: 'Conti da:',
                },
                VALUE3: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '',
                },
                LABEL4: {
                  value: 'a:',
                },
                VALUE4: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: '*',
                },
                LABEL5: {
                  value: 'Intercompany:',
                },
                VALUE5: {
                  isEditable: true,
                  cssClass: 'strong-text',
                  value: 'Nessuna selezione',
                },
              },
            },
          ],
        },
      },
      props5: {
        autoFillMissingCells: false,
        customStyle: ' #kup-component .f-cell{padding: 0 !important}',
        data: subfile,
        density: 'dense',
        dragEnabled: false,
        dropEnabled: false,
        editableData: true,
        emptyDataLabel: 'Nessun dato da visualizzare.',
        enableColumnsFormula: true,
        enableMergeColumns: true,
        enableExtraColumns: true,
        enableSortableColumns: true,
        expandGroups: false,
        filters: {},
        fixedColumns: 0,
        fixedRows: 0,
        forceOneLine: false,
        globalFilter: false,
        globalFilterValue: '',
        groupLabelDisplay: 'both',
        groups: [],
        headerIsPersistent: true,
        isFocusable: false,
        lazyLoadRows: false,
        lineBreakCharacter: '\n',
        loadMoreLimit: 1000,
        loadMoreMode: 'progressive_threshold',
        loadMoreStep: 60,
        pageSelected: -1,
        paginatorPos: 'Top',
        removableColumns: false,
        resizableColumns: true,
        rowsPerPage: 99,
        scrollOnHover: false,
        showCustomization: true,
        showFilters: true,
        showFooter: false,
        showGrid: 'None',
        showGroups: false,
        showHeader: false,
        showLoadMore: false,
        showTooltipOnRightClick: true,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
        tooltipEnabled: true,
      },
    };
  },
};
</script>
