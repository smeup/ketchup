<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <checkbox-basic></checkbox-basic>
    </template>
    <template v-slot:1>
      <checkbox-labels></checkbox-labels>
    </template>
    <template v-slot:2>
      <checkbox-disabled></checkbox-disabled>
    </template>
  </comp>
</template>

<script>
import CheckboxBasic from '@/views/basic/checkbox/examples/CheckboxBasic';
import CheckboxLabels from '@/views/basic/checkbox/examples/CheckboxLabels';
import CheckboxDisabled from '@/views/basic/checkbox/examples/CheckboxDisabled';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    CheckboxBasic,
    CheckboxLabels,
    CheckboxDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-checkbox',
      headtitle: 'Checkbox',
      titles: ['Basic usage', 'Adding labels', 'Disabled'],
    };
  },
};
</script>
