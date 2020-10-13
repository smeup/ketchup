<template>
  <div>
    <h3>Rating</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { ratingDataTable } from '@/mock/dataTableRating';

export default {
  name: 'DatatableShapes',
  data() {
    return {
      data: { data: ratingDataTable },
    };
  },
};
</script>
