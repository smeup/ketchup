<template>
  <div>
    <h3>Formulas applied to columns</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="defaultData"
    ></kup-lazy>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFormula',

  data() {
    return {
      defaultData: {
        data: defaultDataTable,
        enableColumnsFormula: true,
      },
    };
  },
};
</script>
