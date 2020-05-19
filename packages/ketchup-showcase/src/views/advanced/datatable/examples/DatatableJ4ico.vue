<template>
  <div>
    <kup-data-table :data.prop="j4icoData" />
  </div>
</template>

<script>
import j4icoData from '@/mock/j4ico_table_box_data.json';

export default {
  name: 'DTJ4ico',
  data() {
    return {
      j4icoData,
    };
  },
};
</script>

<style scoped>
</style>