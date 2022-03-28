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
    <kup-lazy
      style="margin-top: 4em"
      component-name="kup-data-table"
      :data.prop="props6a"
    ></kup-lazy>
    <kup-lazy component-name="kup-data-table" :data.prop="props6"></kup-lazy>
    <kup-lazy component-name="kup-data-table" :data.prop="props6b"></kup-lazy>
  </div>
</template>

<script>
import {
  reportDatatable,
  reportDatatable2,
  reportDatatable3,
  reportDatatable4,
  subfile,
  subfileDrop,
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
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
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
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
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
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
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
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
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
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
      },
      props6a: {
        customStyle: ':host { --kup-datatable-border: none; }',
        showGrid: 'None',
        showHeader: false,
        selection: 'none',
        rowsPerPage: 99999,
        data: {
          columns: [
            {
              name: '1',
              title: '1',
            },
            {
              name: '2',
              title: '2',
            },
            {
              name: '3',
              title: '3',
            },
            {
              name: '4',
              title: '4',
            },
            {
              name: '4A',
              title: '4A',
            },
            {
              name: '5',
              title: '5',
            },
            {
              name: '6',
              title: '6',
            },
            {
              name: '7',
              title: '7',
            },
            {
              name: '8',
              title: '8',
            },
          ],
          rows: [
            {
              cells: {
                1: {
                  value: 'P',
                },
                2: {
                  value: 'C',
                },
                3: {
                  cssClass: 'danger-text',
                  span: {
                    col: 2,
                  },
                  value: 'Fattura Acquisto Na',
                },
                4: {
                  value: 'Pag 102',
                },
                5: {
                  value: 'Nr 1',
                },
                6: {
                  value: '17/01/22',
                },
                7: {
                  value: 'Re',
                },
                8: {
                  value: '17/01/22 00005461',
                },
              },
            },
            {
              cells: {
                1: {
                  value: '',
                },
                2: {
                  value: '',
                },
                3: {
                  cssClass: 'danger-text',
                  value: 'Iva',
                },
                '4A': {
                  cssClass: 'danger-text',
                  value: 'A1/A',
                },
                4: {
                  cssClass: 'strong-text',
                  value: 'Gennaio',
                },
                5: {
                  value: 'EUR',
                },
                6: {
                  cssClass: 'strong-text',
                  obj: { t: 'NR', p: '', k: '232.00' },
                  value: '232.00',
                },
                7: {
                  value: 'Do',
                },
                8: {
                  value: 'FFFFF',
                },
              },
            },
            {
              cells: {
                1: {
                  span: {
                    col: 7,
                  },
                  value: '',
                },
                7: {
                  value: 'Pr',
                },
                8: {
                  value: '000001',
                },
              },
            },
          ],
        },
      },
      props6: {
        editableData: true,
        selection: 'none',
        showGrid: 'None',
        showHeader: false,
        rowsPerPage: 99999,
        data: subfileDrop,
      },
      props6b: {
        customStyle: ':host { --kup-datatable-border: none; }',
        showGrid: 'None',
        showHeader: false,
        selection: 'none',
        rowsPerPage: 99999,
        data: {
          columns: [
            {
              name: '1',
              title: '1',
            },
            {
              name: '2',
              title: '2',
            },
            {
              decimals: 2,
              name: '2N',
              obj: { t: 'NR', p: '', k: '' },
              title: '2N',
            },
            {
              name: '3',
              title: '3',
            },
            {
              decimals: 2,
              name: '3N',
              obj: { t: 'NR', p: '', k: '' },
              title: '3N',
            },
            {
              name: '4',
              title: '4',
            },
            {
              decimals: 2,
              name: '4N',
              obj: { t: 'NR', p: '', k: '' },
              title: '4N',
            },
          ],
          rows: [
            {
              cells: {
                1: {
                  value: '',
                },
                2: {
                  cssClass: 'c-right-aligned',
                  span: { col: 2 },
                  value: 'Registrazione',
                },
                3: {
                  cssClass: 'c-right-aligned',
                  span: { col: 2 },
                  value: 'Contropartita',
                },
                4: {
                  cssClass: 'c-right-aligned',
                  span: { col: 2 },
                  value: 'Imposta',
                },
              },
            },
            {
              cells: {
                1: {
                  cssClass: 'strong-text',
                  value: 'Quadratura EUR',
                },
                '2N': {
                  obj: { t: 'NR', p: '', k: '232' },
                  span: { col: 2 },
                  value: '232',
                },
                '3N': {
                  obj: { t: 'NR', p: '', k: '200' },
                  span: { col: 2 },
                  value: '200',
                },
                '4N': {
                  obj: { t: 'NR', p: '', k: '32' },
                  span: { col: 2 },
                  value: '32',
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>
