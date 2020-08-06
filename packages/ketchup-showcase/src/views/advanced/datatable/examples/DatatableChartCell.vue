<template>
  <div>
    <h3>Chart jquery.sparkline</h3>

    <kup-data-table :data.prop="gcData"></kup-data-table>
  </div>
</template>

<script>
import j4graData from '@/mock/j4gra_table_box_data.json';
export default {
  data() {
    return {
      gcData: j4graData,
    };
  },
};
</script>
