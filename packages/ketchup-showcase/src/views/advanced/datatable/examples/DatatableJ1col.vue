<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { colorObjectsDataTable } from '@/mock/dataTableColor';

export default {
  name: 'Color',
  data() {
    return {
      data: { data: colorObjectsDataTable },
    };
  },
};
</script>
