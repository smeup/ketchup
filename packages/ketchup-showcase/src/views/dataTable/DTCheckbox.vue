<template>
  <div>
    <h1>Data Table with checkbox data</h1>

    <h3>Checkbox data</h3>
    <kup-data-table
      :config.prop="baseCheckbox.config"
      :data.prop="baseCheckbox.data"
      rows-per-page="50"
    ></kup-data-table>
  </div>
</template>

<script>
  import { dataTableCheckboxFactory } from '@/mock/dataTable';

  export default {
    name: "DTCheckbox",
    data() {
      return {
        baseCheckbox: dataTableCheckboxFactory(),
      };
    }
  }
</script>