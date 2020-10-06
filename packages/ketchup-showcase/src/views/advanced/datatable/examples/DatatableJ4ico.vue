<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import j4icoData from '@/mock/j4ico_table_box_data.json';

export default {
  name: 'DTJ4ico',
  data() {
    return {
      data: { data: j4icoData },
    };
  },
};
</script>

<style scoped></style>
