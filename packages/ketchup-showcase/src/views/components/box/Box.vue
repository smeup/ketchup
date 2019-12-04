<template>
  <comp :titles="titles">
    <template v-slot:0>
      <box-basic></box-basic>
    </template>
    <template v-slot:1>
      <box-classes></box-classes>
    </template>
    <template v-slot:2>
      <box-badge></box-badge>
    </template>
    <template v-slot:3>
      <box-filter></box-filter>
    </template>
    <template v-slot:4>
      <box-layout></box-layout>
    </template>
    <template v-slot:5>
      <box-objects></box-objects>
    </template>
    <template v-slot:6>
      <box-pagination></box-pagination>
    </template>
    <template v-slot:7>
      <box-row-actions></box-row-actions>
    </template>
    <template v-slot:8>
      <box-sel></box-sel>
    </template>
    <template v-slot:9>
      <box-shapes></box-shapes>
    </template>
    <template v-slot:10>
      <box-sort></box-sort>
    </template>
    <template v-slot:11>
      <box-dnd></box-dnd>
    </template>
  </comp>
</template>

<script>
import BoxBasic from '@/views/components/box/examples/BoxBasic';
import BoxClasses from '@/views/components/box/examples/BoxClasses';
import BoxBadge from '@/views/components/box/examples/BoxBadge';
import BoxFilter from '@/views/components/box/examples/BoxFilter';
import BoxLayout from '@/views/components/box/examples/BoxLayout';
import BoxObjects from '@/views/components/box/examples/BoxObjects';
import BoxPagination from '@/views/components/box/examples/BoxPagination';
import BoxRowActions from '@/views/components/box/examples/BoxRowActions';
import BoxSel from '@/views/components/box/examples/BoxSel';
import BoxShapes from '@/views/components/box/examples/BoxShapes';
import BoxSort from '@/views/components/box/examples/BoxSort';
import BoxDnd from '@/views/components/box/examples/BoxDnd';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    BoxBasic,
    BoxClasses,
    BoxBadge,
    BoxFilter,
    BoxLayout,
    BoxObjects,
    BoxPagination,
    BoxRowActions,
    BoxSel,
    BoxShapes,
    BoxSort,
    BoxDnd,
    Comp,
  },
  data() {
    return {
      titles: [
        'Box',
        'CSS Classes',
        'With badges',
        'With filters',
        'Layouts',
        'With objects',
        'Pagination',
        'With row actions',
        'Selectable',
        'Shapes',
        'Sortable',
        'Drag and drop',
      ],
    };
  },
};
</script>
