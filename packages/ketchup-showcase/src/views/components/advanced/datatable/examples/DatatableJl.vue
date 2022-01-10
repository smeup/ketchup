<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { jlObjectsDataTable } from '@/mock/dataTableJL';

export default {
  name: 'JL',
  data() {
    return {
      data: { data: jlObjectsDataTable },
    };
  },
};
</script>
