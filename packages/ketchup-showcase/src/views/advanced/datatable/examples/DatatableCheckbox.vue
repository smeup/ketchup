<template>
  <div>
    <h3>Checkbox data</h3>
    <kup-data-table
      :config.prop="baseCheckbox.config"
      :showFilters.prop="true"
      :data.prop="baseCheckbox.data"
      rows-per-page="50"
    ></kup-data-table>
  </div>
</template>

<script>
import { dataTableCheckboxFactory } from '@/mock/dataTable';

export default {
  name: 'DTCheckbox',
  data() {
    return {
      baseCheckbox: dataTableCheckboxFactory(),
    };
  },
};
</script>
