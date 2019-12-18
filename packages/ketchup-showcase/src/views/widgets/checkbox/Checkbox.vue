<template>
  <comp :titles="titles" :headtitle="headtitle">
    <template v-slot:0>
      <checkbox-basic></checkbox-basic>
    </template>
    <template v-slot:1>
      <checkbox-labels></checkbox-labels>
    </template>
    <template v-slot:2>
      <checkbox-disabled></checkbox-disabled>
    </template>
    <template v-slot:3>
      <checkbox-customization></checkbox-customization>
    </template>
  </comp>
</template>

<script>
import CheckboxBasic from '@/views/widgets/checkbox/examples/CheckboxBasic';
import CheckboxLabels from '@/views/widgets/checkbox/examples/CheckboxLabels';
import CheckboxDisabled from '@/views/widgets/checkbox/examples/CheckboxDisabled';
import CheckboxCustomization from '@/views/widgets/checkbox/examples/CheckboxCustomization';
import Comp from '@/views/components/page/templates/Comp';
export default {
  components: {
    CheckboxBasic,
    CheckboxLabels,
    CheckboxDisabled,
    CheckboxCustomization,
    Comp,
  },
  data() {
    return {
      headtitle: 'Checkbox',
      titles: ['Basic usage', 'Adding labels', 'Disabled', 'Customization'],
    };
  },
};
</script>
