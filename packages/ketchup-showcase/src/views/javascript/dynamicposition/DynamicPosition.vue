<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dynamic-position-basic></dynamic-position-basic>
    </template>
    <template v-slot:1>
      <dynamic-position-image></dynamic-position-image>
    </template>
  </comp>
</template>

<script>
import DynamicPositionBasic from '@/views/javascript/dynamicposition/examples/DynamicPositionBasic';
import DynamicPositionImage from '@/views/javascript/dynamicposition/examples/DynamicPositionImage';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    DynamicPositionBasic,
    DynamicPositionImage,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/dynamic-position/dynamic-position.ts',
      headtitle: 'Dynamic position',
      titles: ['Basic usage', 'On an image'],
    };
  },
};
</script>
