<template>
  <div>
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
      },
    };
  },
};
</script>
