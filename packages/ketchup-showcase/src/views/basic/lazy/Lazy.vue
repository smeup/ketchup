<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <lazy-demo></lazy-demo>
      </template>
      <template v-slot:1>
        <lazy-basic></lazy-basic>
      </template>
      <template v-slot:2>
        <lazy-placeholder></lazy-placeholder>
      </template>
    </comp>
  </div>
</template>

<script>
import LazyDemo from '@/views/basic/lazy/examples/LazyDemo';
import LazyBasic from '@/views/basic/lazy/examples/LazyBasic';
import LazyPlaceholder from '@/views/basic/lazy/examples/LazyPlaceholder';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    LazyDemo,
    LazyBasic,
    LazyPlaceholder,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-lazy',
      headtitle: 'Lazy',
      titles: ['Playground', 'Basic usage', 'Placeholder example'],
    };
  },
};
</script>
