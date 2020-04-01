<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <field-demo></field-demo>
    </template>
    <template v-slot:1>
      <field-basic></field-basic>
    </template>
    <template v-slot:2>
      <field-cmb></field-cmb>
    </template>
    <template v-slot:3>
      <field-itx></field-itx>
    </template>
    <template v-slot:4>
      <field-rad></field-rad>
    </template>
    <template v-slot:5>
      <field-styling></field-styling>
    </template>
  </comp>
</template>

<script>
import FieldDemo from '@/views/advanced/field/examples/FieldDemo';
import FieldBasic from '@/views/advanced/field/examples/FieldBasic';
import FieldCmb from '@/views/advanced/field/examples/FieldCmb';
import FieldItx from '@/views/advanced/field/examples/FieldItx';
import FieldRad from '@/views/advanced/field/examples/FieldRad';
import FieldStyling from '@/views/advanced/field/examples/FieldStyling';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    FieldDemo,
    FieldBasic,
    FieldCmb,
    FieldItx,
    FieldRad,
    FieldStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-field',
      headtitle: 'Field',
      titles: ['Playground', 'Basic usage', 'Cmb', 'Itx', 'Rad', 'Styling'],
    };
  },
};
</script>
