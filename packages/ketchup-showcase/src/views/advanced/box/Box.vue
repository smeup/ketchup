<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <box-demo></box-demo>
    </template>
    <template v-slot:1>
      <box-basic></box-basic>
    </template>
    <template v-slot:2>
      <box-classes></box-classes>
    </template>
    <template v-slot:3>
      <box-badge></box-badge>
    </template>
    <template v-slot:4>
      <box-filter></box-filter>
    </template>
    <template v-slot:5>
      <box-layout></box-layout>
    </template>
    <template v-slot:6>
      <box-objects></box-objects>
    </template>
    <template v-slot:7>
      <box-pagination></box-pagination>
    </template>
    <template v-slot:8>
      <box-row-actions></box-row-actions>
    </template>
    <template v-slot:9>
      <box-sel></box-sel>
    </template>
    <template v-slot:10>
      <box-shapes></box-shapes>
    </template>
    <template v-slot:11>
      <box-sort></box-sort>
    </template>
    <template v-slot:12>
      <box-dnd></box-dnd>
    </template>
    <template v-slot:13>
      <box-with-tooltip></box-with-tooltip>
    </template>
  </comp>
</template>

<script>
import BoxDemo from '@/views/advanced/box/examples/BoxDemo';
import BoxBasic from '@/views/advanced/box/examples/BoxBasic';
import BoxClasses from '@/views/advanced/box/examples/BoxClasses';
import BoxBadge from '@/views/advanced/box/examples/BoxBadge';
import BoxFilter from '@/views/advanced/box/examples/BoxFilter';
import BoxLayout from '@/views/advanced/box/examples/BoxLayout';
import BoxObjects from '@/views/advanced/box/examples/BoxObjects';
import BoxPagination from '@/views/advanced/box/examples/BoxPagination';
import BoxRowActions from '@/views/advanced/box/examples/BoxRowActions';
import BoxSel from '@/views/advanced/box/examples/BoxSel';
import BoxShapes from '@/views/advanced/box/examples/BoxShapes';
import BoxSort from '@/views/advanced/box/examples/BoxSort';
import BoxDnd from '@/views/advanced/box/examples/BoxDnd';
import BoxWithTooltip from '@/views/advanced/box/examples/BoxWithToolTip';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    BoxDemo,
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
    BoxWithTooltip,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-box',
      headtitle: 'Box',
      titles: [
        'Playground',
        'Basic usage',
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
        'With tooltip',
      ],
    };
  },
};
</script>
