<template>
  <div>
    <h3>Rating</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="ratingDataTable"
    ></kup-lazy>
    <h3>Color</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="colorDataTable"
    ></kup-lazy>
  </div>
</template>

<script>
import { ratingDataTable } from '@/mock/dataTableRating';
import { colorShapesDataTable } from '@/mock/dataTableColor';

export default {
  name: 'DatatableShapes',
  data() {
    return {
      ratingDataTable: { data: ratingDataTable },
      colorDataTable: { data: colorShapesDataTable },
    };
  },
};
</script>
