<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <chip-demo></chip-demo>
    </template>
    <template v-slot:1>
      <chip-basic></chip-basic>
    </template>
    <template v-slot:2>
      <chip-choice></chip-choice>
    </template>
    <template v-slot:3>
      <chip-filter></chip-filter>
    </template>
    <template v-slot:4>
      <chip-input></chip-input>
    </template>
  </comp>
</template>

<script>
import ChipDemo from '@/views/basic/chip/examples/ChipDemo';
import ChipBasic from '@/views/basic/chip/examples/ChipBasic';
import ChipChoice from '@/views/basic/chip/examples/ChipChoice';
import ChipFilter from '@/views/basic/chip/examples/ChipFilter';
import ChipInput from '@/views/basic/chip/examples/ChipInput';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    ChipDemo,
    ChipBasic,
    ChipChoice,
    ChipFilter,
    ChipInput,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-chip',
      headtitle: 'Chip',
      titles: [
        'Playground',
        'Basic usage',
        'Choice chips',
        'Filter chips',
        'Input chips',
      ],
    };
  },
};
</script>
