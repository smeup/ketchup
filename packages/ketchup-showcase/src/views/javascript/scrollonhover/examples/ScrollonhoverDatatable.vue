<template>
  <div>
    <div style="width: 300px;">
      <kup-data-table
        :data.prop="data"
        id="basic-data"
        enable-sortable-columns
      ></kup-data-table>
    </div>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';
export default {
  data() {
    return {
      data: {
        ...defaultDataTable,
      },
    };
  },
};
</script>
