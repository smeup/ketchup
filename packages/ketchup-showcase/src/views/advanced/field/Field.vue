<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <field-demo></field-demo>
    </template>
    <template v-slot:1>
      <field-basic></field-basic>
    </template>
    <template v-slot:2>
      <field-styling></field-styling>
    </template>
    <template v-slot:3>
      <field-cmb></field-cmb>
    </template>
    <template v-slot:4>
      <field-itx></field-itx>
    </template>
    <template v-slot:5>
      <field-rad></field-rad>
    </template>
  </comp>
</template>

<script>
import FieldDemo from '@/views/advanced/field/examples/FieldDemo';
import FieldBasic from '@/views/advanced/field/examples/FieldBasic';
import FieldStyling from '@/views/advanced/field/examples/FieldStyling';
import FieldCmb from '@/views/advanced/field/examples/FieldCmb';
import FieldItx from '@/views/advanced/field/examples/FieldItx';
import FieldRad from '@/views/advanced/field/examples/FieldRad';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    FieldDemo,
    FieldBasic,
    FieldStyling,
    FieldCmb,
    FieldItx,
    FieldRad,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-field',
      headtitle: 'Field',
      titles: ['Playground', 'Basic usage', 'Styling', 'Cmb', 'Itx', 'Rad'],
    };
  },
};
</script>
