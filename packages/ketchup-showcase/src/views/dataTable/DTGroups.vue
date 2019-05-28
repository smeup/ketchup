<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Filters</h1>

    <h3>Group on continent</h3>
    <kup-data-table :data.prop="data" :groups.prop="groups"></kup-data-table>
  </div>
</template>

<script>
import { groupDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    return {
      data: {
        ...groupDataTable,
      },
      groups: [
        {
          column: 'FLD1',
        },
      ],
    };
  },
};
</script>
