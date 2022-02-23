<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <iframe-demo></iframe-demo>
    </template>
    <template v-slot:1>
      <iframe-basic></iframe-basic>
    </template>
  </comp>
</template>

<script>
import IframeDemo from '@/views/components/basic/iframe/examples/IframeDemo';
import IframeBasic from '@/views/components/basic/iframe/examples/IframeBasic';
import Comp from '@/views/templates/Comp';

export default {
  components: {
    IframeDemo,
    IframeBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-iframe',
      headtitle: 'Iframe',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Iframe',
};
</script>
