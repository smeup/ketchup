<template>
  <div>
    <h3>Chart jquery.sparkline</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="gcData"></kup-lazy>
  </div>
</template>

<script>
import j4graData from '@/mock/j4gra_table_box_data.json';
export default {
  data() {
    return {
      gcData: { data: j4graData },
    };
  },
};
</script>
