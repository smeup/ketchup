<template>
  <comp :titles="titles">
    <template v-slot:0>
      <field-basic></field-basic>
    </template>
    <template v-slot:1>
      <field-combo></field-combo>
    </template>
    <template v-slot:2>
      <field-graphic></field-graphic>
    </template>
    <template v-slot:3>
      <field-radio></field-radio>
    </template>
  </comp>
</template>

<script>
import FieldBasic from '@/views/components/field/examples/FieldBasic';
import FieldCombo from '@/views/components/field/examples/FieldCombo';
import FieldGraphic from '@/views/components/field/examples/FieldGraphic';
import FieldRadio from '@/views/components/field/examples/FieldRadio';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    FieldBasic,
    FieldCombo,
    FieldGraphic,
    FieldRadio,
    Comp,
  },
  data() {
    return {
      titles: ['Field', 'Combo', 'Graphic', 'Radio'],
    };
  },
};
</script>
