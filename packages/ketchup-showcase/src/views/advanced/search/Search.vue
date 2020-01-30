<template>
  <comp :titles="titles">
    <template v-slot:0>
      <search-basic />
    </template>
    <template v-slot:1>
      <search-server-handled />
    </template>
  </comp>
</template>

<script>
import Comp from '@/views/advanced/page/templates/Comp';
import SearchBasic from './examples/SearchBasic';
import SearchServerHandled from './examples/SearchServerHandled';

export default {
  name: 'Search',
  components: {
    SearchBasic,
    SearchServerHandled,
    Comp,
  },
  data() {
    return {
      titles: ['Basics', 'Server handled'],
    };
  },
};
</script>
