<template>
  <div>
    <h3>Datatable with images and badges</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="boxImagesData"
    ></kup-lazy>
  </div>
</template>

<script>
import { imgBadgeData } from '@/mock/box';

export default {
  name: 'DatatableImagesAndBadges',
  data() {
    return {
      boxImagesData: { data: imgBadgeData },
    };
  },
};
</script>
