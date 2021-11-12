<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="props"></kup-lazy>
  </div>
</template>

<script>
import { reportDatatable } from '@/mock/dataTable';

export default {
  name: 'DatatableReportLike',

  data() {
    return {
      props: {
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
    };
  },
};
</script>
