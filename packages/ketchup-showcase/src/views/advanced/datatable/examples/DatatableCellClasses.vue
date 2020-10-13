<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { cellClassesDataTable } from '@/mock/dataTableCellClasses';

export default {
  name: 'DatatableCellClasses',
  data() {
    return {
      data: { data: cellClassesDataTable, lazyLoadRows: true },
    };
  },
};
</script>
