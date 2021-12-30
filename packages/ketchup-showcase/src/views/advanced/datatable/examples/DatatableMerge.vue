<template>
  <div>
    <h3>Merge Columns</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="defaultData"
    ></kup-lazy>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableMerge',

  data() {
    return {
      defaultData: {
        data: defaultDataTable,
        enableMergeColumns: true,
      },
    };
  },
};
</script>
