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
        <lazy-example></lazy-example>
      </template>
    </comp>
  </div>
</template>

<script>
import LazyDemo from '@/views/basic/lazy/examples/LazyDemo';
import LazyBasic from '@/views/basic/lazy/examples/LazyBasic';
import LazyExample from '@/views/basic/lazy/examples/LazyExample';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    LazyDemo,
    LazyBasic,
    LazyExample,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-lazy',
      headtitle: 'Lazy',
      titles: ['Playground', 'Basic usage', 'Example grid'],
    };
  },
};
</script>
