<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <icon-demo></icon-demo>
      </template>
      <template v-slot:1>
        <icon-basic></icon-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import IconDemo from '@/views/basic/icon/examples/IconDemo';
import IconBasic from '@/views/basic/icon/examples/IconBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    IconDemo,
    IconBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-icon',
      headtitle: 'Icon',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
