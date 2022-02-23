<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <checkbox-demo></checkbox-demo>
      </template>
      <template v-slot:1>
        <checkbox-basic></checkbox-basic>
      </template>
      <template v-slot:2>
        <checkbox-labels></checkbox-labels>
      </template>
      <template v-slot:3>
        <checkbox-disabled></checkbox-disabled>
      </template>
    </comp>
  </div>
</template>

<script>
import CheckboxDemo from '@/views/components/basic/checkbox/examples/CheckboxDemo';
import CheckboxBasic from '@/views/components/basic/checkbox/examples/CheckboxBasic';
import CheckboxLabels from '@/views/components/basic/checkbox/examples/CheckboxLabels';
import CheckboxDisabled from '@/views/components/basic/checkbox/examples/CheckboxDisabled';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    CheckboxDemo,
    CheckboxBasic,
    CheckboxLabels,
    CheckboxDisabled,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-checkbox',
      headtitle: 'Checkbox',
      titles: ['Playground', 'Basic usage', 'Adding labels', 'Disabled'],
    };
  },
  title: 'Ketchup | Checkbox',
};
</script>
