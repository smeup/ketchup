<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <icon-demo></icon-demo>
      </template>
      <template v-slot:1>
        <icon-basic></icon-basic>
      </template>
      <template v-slot:2>
        <icon-list></icon-list>
      </template>
    </comp>
  </div>
</template>

<script>
import IconDemo from '@/views/basic/icon/examples/IconDemo';
import IconBasic from '@/views/basic/icon/examples/IconBasic';
import IconList from '@/views/basic/icon/examples/IconList';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    IconDemo,
    IconBasic,
    IconList,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-icon',
      headtitle: 'Icon',
      titles: ['Playground', 'Basic usage', 'List'],
    };
  },
};
</script>
