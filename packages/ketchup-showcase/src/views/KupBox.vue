<template>
  <page-template :titles="titles">
    <template v-slot:0>
      <box-basic></box-basic>
    </template>
    <template v-slot:1>
      <box-badge></box-badge>
    </template>
  </page-template>
</template>

<script>
import BoxBasic from '@/views/box/BoxBasic';
import BoxBadge from '@/views/box/BoxBadge';
import BoxClasses from '@/views/box/BoxClasses';
import BoxFilter from '@/views/box/BoxFilter';
import BoxLayout from '@/views/box/BoxLayout';
import BoxObjects from '@/views/box/BoxObjects';
import BoxPagination from '@/views/box/BoxPagination';
import BoxRowActions from '@/views/box/BoxRowActions';
import BoxSel from '@/views/box/BoxSel';
import BoxShapes from '@/views/box/BoxShapes';
import BoxSort from '@/views/box/BoxSort';
import PageTemplate from '@/views/PageTemplate';

export default {
  components: {
    BoxBasic,
    BoxBadge,
    BoxClasses,
    BoxFilter,
    BoxLayout,
    BoxObjects,
    BoxPagination,
    BoxRowActions,
    BoxSel,
    BoxShapes,
    BoxSort,
    PageTemplate,
  },
  data() {
    return { titles: ['Box', 'With badges'] };
  },
};
</script>
