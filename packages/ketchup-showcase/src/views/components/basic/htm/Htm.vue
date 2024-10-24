<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <htm-demo></htm-demo>
    </template>
    <template v-slot:1>
      <htm-basic></htm-basic>
    </template>
    <template v-slot:2>
      <htm-iframe></htm-iframe>
    </template>
    <template v-slot:3>
      <htm-html></htm-html>
    </template>
  </comp>
</template>

<script>
import HtmBasic from '@/views/components/basic/htm/examples/HtmBasic.vue';
import HtmDemo from '@/views/components/basic/htm/examples/HtmDemo.vue';
import HtmIframe from '@/views/components/basic/htm/examples/HtmIframe.vue';
import HtmHtml from '@/views/components/basic/htm/examples/HtmHtml.vue';
import Comp from '@/views/templates/Comp.vue';

export default {
  components: {
    HtmBasic,
    HtmDemo,
    HtmIframe,
    HtmHtml,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-htm',
      headtitle: 'HTM',
      titles: ['Playground', 'Basic usage', 'With Iframe', 'With HTML'],
    };
  },
  title: 'Ketchup | HTM',
};
</script>
