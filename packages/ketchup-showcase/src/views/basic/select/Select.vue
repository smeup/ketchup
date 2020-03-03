<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <select-demo></select-demo>
      </template>
      <template v-slot:1>
        <select-basic></select-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import SelectDemo from '@/views/basic/select/examples/SelectDemo';
import SelectBasic from '@/views/basic/select/examples/SelectBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    SelectDemo,
    SelectBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-select',
      headtitle: 'Select',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
