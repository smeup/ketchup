<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { documentDatatable } from '@/mock/dataTable';

export default {
  name: 'DatatableDocumentLike',

  data() {
    return {
      data: {
        customStyle: '',
        data: documentDatatable,
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
        showGrid: 'None',
        showGroups: false,
        showHeader: false,
        showLoadMore: false,
        sort: [],
        sortableColumnsMutateData: true,
        sortEnabled: true,
      },
    };
  },
};
</script>
