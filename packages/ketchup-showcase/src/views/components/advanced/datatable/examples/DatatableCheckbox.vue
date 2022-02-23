<template>
  <div>
    <h3>Checkbox data</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { dataTableCheckboxFactory } from '@/mock/dataTable';
let baseCheckbox = dataTableCheckboxFactory();

export default {
  name: 'DTCheckbox',
  data() {
    return {
      data: {
        config: baseCheckbox.config,
        data: baseCheckbox.data,
        rowsPerPage: '50',
        showFilters: true,
      },
    };
  },
};
</script>
