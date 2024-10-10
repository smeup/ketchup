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
    <template v-slot:5>
      <chip-size></chip-size>
    </template>
    <template v-slot:6>
      <chip-variant></chip-variant>
    </template>
    <template v-slot:7>
      <chip-color></chip-color>
    </template>
    <template v-slot:8>
      <chip-structure></chip-structure>
    </template>
    <template v-slot:9>
      <chip-combination></chip-combination>
    </template>
  </comp>
</template>

<script>
import ChipDemo from '@/views/components/basic/chip/examples/ChipDemo';
import ChipBasic from '@/views/components/basic/chip/examples/ChipBasic';
import ChipChoice from '@/views/components/basic/chip/examples/ChipChoice';
import ChipFilter from '@/views/components/basic/chip/examples/ChipFilter';
import ChipInput from '@/views/components/basic/chip/examples/ChipInput';
import ChipSize from '@/views/components/basic/chip/examples/ChipSize';
import ChipVariant from '@/views/components/basic/chip/examples/ChipVariant';
import ChipColor from '@/views/components/basic/chip/examples/ChipColor';
import ChipStructure from '@/views/components/basic/chip/examples/ChipStructure';
import ChipCombination from '@/views/components/basic/chip/examples/ChipCombination';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    ChipDemo,
    ChipBasic,
    ChipChoice,
    ChipFilter,
    ChipInput,
    ChipSize,
    ChipVariant,
    ChipColor,
    ChipStructure,
    ChipCombination,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-chip',
      headtitle: 'Chip',
      titles: [
        'Playground',
        'Basic usage',
        'Choice chips',
        'Filter chips',
        'Input chips',
        'Chip Size',
        'Chip Variant',
        'Chip Color',
        'Chip Structure',
        'Chip Combination',
      ],
    };
  },
  title: 'Ketchup | Chip',
};
</script>
