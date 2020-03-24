<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <field-demo></field-demo>
    </template>
  </comp>
</template>

<script>
import FieldDemo from '@/views/advanced/field/examples/FieldDemo';
import FieldBasic from '@/views/advanced/field/examples/FieldBasic';
import FieldCombo from '@/views/advanced/field/examples/FieldCombo';
import FieldGraphic from '@/views/advanced/field/examples/FieldGraphic';
import FieldRadio from '@/views/advanced/field/examples/FieldRadio';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    FieldDemo,
    FieldBasic,
    FieldCombo,
    FieldGraphic,
    FieldRadio,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-fld',
      headtitle: 'Field',
      titles: ['Playground', 'Basic usage', 'Combo', 'Graphic', 'Radio'],
    };
  },
};
</script>
